import '@oslojs/crypto/hmac';
import { sha256 } from '@oslojs/crypto/sha2';
import '@oslojs/crypto/subtle';
import { decodeBase64urlIgnorePadding, encodeBase64urlNoPadding } from '@oslojs/encoding';
import { ECDSAPublicKey, p256, decodeSEC1PublicKey, decodePKIXECDSASignature, verifyECDSASignature } from '@oslojs/crypto/ecdsa';
import { parseClientDataJSON, ClientDataType, parseAttestationObject, AttestationStatementFormat, coseAlgorithmES256, COSEKeyType, coseEllipticCurveP256, coseAlgorithmRS256, parseAuthenticatorData, createAssertionSignatureMessage } from '@oslojs/webauthn';

//#region src/tokens.ts
/**
* Secure token utilities
*
* Crypto via Oslo.js (@oslojs/crypto). Base64url via @oslojs/encoding.
*
* Tokens are opaque random values. We store only the SHA-256 hash in the database.
*/
const TOKEN_BYTES = 32;
/** Valid API token prefixes */
const TOKEN_PREFIXES = {
	PAT: "ec_pat_",
	OAUTH_ACCESS: "ec_oat_",
	OAUTH_REFRESH: "ec_ort_"
};
/** All valid API token scopes */
const VALID_SCOPES = [
	"content:read",
	"content:write",
	"media:read",
	"media:write",
	"schema:read",
	"schema:write",
	"admin"
];
/**
* Check if a set of scopes includes a required scope.
* The `admin` scope grants access to everything.
*/
function hasScope(scopes, required) {
	if (scopes.includes("admin")) return true;
	return scopes.includes(required);
}
/**
* Generate a cryptographically secure random token
* Returns base64url-encoded string (URL-safe)
*/
function generateToken() {
	const bytes = new Uint8Array(TOKEN_BYTES);
	crypto.getRandomValues(bytes);
	return encodeBase64urlNoPadding(bytes);
}
/**
* Hash a token for storage
* We never store raw tokens - only their SHA-256 hash
*/
function hashToken(token) {
	return encodeBase64urlNoPadding(sha256(decodeBase64urlIgnorePadding(token)));
}
/**
* Generate a token and its hash together
*/
function generateTokenWithHash() {
	const token = generateToken();
	return {
		token,
		hash: hashToken(token)
	};
}
/**
* Generate a prefixed API token and its hash.
* Returns the raw token (shown once to the user), the hash (stored server-side),
* and a display prefix (for identification in UIs/logs).
*
* Uses oslo/crypto for SHA-256 hashing.
*/
function generatePrefixedToken(prefix) {
	const bytes = new Uint8Array(TOKEN_BYTES);
	crypto.getRandomValues(bytes);
	const raw = `${prefix}${encodeBase64urlNoPadding(bytes)}`;
	return {
		raw,
		hash: hashPrefixedToken(raw),
		prefix: raw.slice(0, prefix.length + 4)
	};
}
/**
* Hash a prefixed API token for storage/lookup.
* Hashes the full prefixed token string via SHA-256, returns base64url (no padding).
*/
function hashPrefixedToken(token) {
	return encodeBase64urlNoPadding(sha256(new TextEncoder().encode(token)));
}
/**
* Compute an S256 PKCE code challenge from a code verifier.
* Used server-side to verify that code_verifier matches the stored code_challenge.
*
* Equivalent to: BASE64URL(SHA256(ASCII(code_verifier)))
*/
function computeS256Challenge(codeVerifier) {
	return encodeBase64urlNoPadding(sha256(new TextEncoder().encode(codeVerifier)));
}

//#endregion
//#region src/passkey/register.ts
/**
* Passkey registration (credential creation)
*
* Based on oslo webauthn documentation:
* https://webauthn.oslojs.dev/examples/registration
*/
const CHALLENGE_TTL$1 = 300 * 1e3;
/**
* Generate registration options for creating a new passkey
*/
async function generateRegistrationOptions(config, user, existingCredentials, challengeStore) {
	const challenge = generateToken();
	await challengeStore.set(challenge, {
		type: "registration",
		userId: user.id,
		expiresAt: Date.now() + CHALLENGE_TTL$1
	});
	const userIdEncoded = encodeBase64urlNoPadding(new TextEncoder().encode(user.id));
	return {
		challenge,
		rp: {
			name: config.rpName,
			id: config.rpId
		},
		user: {
			id: userIdEncoded,
			name: user.email,
			displayName: user.name || user.email
		},
		pubKeyCredParams: [{
			type: "public-key",
			alg: coseAlgorithmES256
		}, {
			type: "public-key",
			alg: coseAlgorithmRS256
		}],
		timeout: 6e4,
		attestation: "none",
		authenticatorSelection: {
			residentKey: "preferred",
			userVerification: "preferred"
		},
		excludeCredentials: existingCredentials.map((cred) => ({
			type: "public-key",
			id: cred.id,
			transports: cred.transports
		}))
	};
}
/**
* Verify a registration response and extract credential data
*/
async function verifyRegistrationResponse(config, response, challengeStore) {
	const clientDataJSON = decodeBase64urlIgnorePadding(response.response.clientDataJSON);
	const attestationObject = decodeBase64urlIgnorePadding(response.response.attestationObject);
	const clientData = parseClientDataJSON(clientDataJSON);
	if (clientData.type !== ClientDataType.Create) throw new Error("Invalid client data type");
	const challengeString = encodeBase64urlNoPadding(clientData.challenge);
	const challengeData = await challengeStore.get(challengeString);
	if (!challengeData) throw new Error("Challenge not found or expired");
	if (challengeData.type !== "registration") throw new Error("Invalid challenge type");
	if (challengeData.expiresAt < Date.now()) {
		await challengeStore.delete(challengeString);
		throw new Error("Challenge expired");
	}
	await challengeStore.delete(challengeString);
	if (clientData.origin !== config.origin) throw new Error(`Invalid origin: expected ${config.origin}, got ${clientData.origin}`);
	const attestation = parseAttestationObject(attestationObject);
	if (attestation.attestationStatement.format !== AttestationStatementFormat.None) ;
	const { authenticatorData } = attestation;
	if (!authenticatorData.verifyRelyingPartyIdHash(config.rpId)) throw new Error("Invalid RP ID hash");
	if (!authenticatorData.userPresent) throw new Error("User presence not verified");
	if (!authenticatorData.credential) throw new Error("No credential data in attestation");
	const { credential } = authenticatorData;
	const algorithm = credential.publicKey.algorithm();
	let encodedPublicKey;
	if (algorithm === coseAlgorithmES256) {
		if (credential.publicKey.type() !== COSEKeyType.EC2) throw new Error("Expected EC2 key type for ES256");
		const cosePublicKey = credential.publicKey.ec2();
		if (cosePublicKey.curve !== coseEllipticCurveP256) throw new Error("Expected P-256 curve for ES256");
		encodedPublicKey = new ECDSAPublicKey(p256, cosePublicKey.x, cosePublicKey.y).encodeSEC1Uncompressed();
	} else if (algorithm === coseAlgorithmRS256) throw new Error("RS256 not yet supported - please use ES256");
	else throw new Error(`Unsupported algorithm: ${algorithm}`);
	return {
		credentialId: response.id,
		publicKey: encodedPublicKey,
		counter: authenticatorData.signatureCounter,
		deviceType: "singleDevice",
		backedUp: false,
		transports: response.response.transports ?? []
	};
}
/**
* Register a new passkey for a user
*/
async function registerPasskey(adapter, userId, verified, name) {
	if (await adapter.countCredentialsByUserId(userId) >= 10) throw new Error("Maximum number of passkeys reached (10)");
	if (await adapter.getCredentialById(verified.credentialId)) throw new Error("Credential already registered");
	const newCredential = {
		id: verified.credentialId,
		userId,
		publicKey: verified.publicKey,
		counter: verified.counter,
		deviceType: verified.deviceType,
		backedUp: verified.backedUp,
		transports: verified.transports,
		name
	};
	return adapter.createCredential(newCredential);
}

//#endregion
//#region src/passkey/authenticate.ts
/**
* Passkey authentication (credential assertion)
*
* Based on oslo webauthn documentation:
* https://webauthn.oslojs.dev/examples/authentication
*/
const CHALLENGE_TTL = 300 * 1e3;
/**
* Generate authentication options for signing in with a passkey
*/
async function generateAuthenticationOptions(config, credentials, challengeStore) {
	const challenge = generateToken();
	await challengeStore.set(challenge, {
		type: "authentication",
		expiresAt: Date.now() + CHALLENGE_TTL
	});
	return {
		challenge,
		rpId: config.rpId,
		timeout: 6e4,
		userVerification: "preferred",
		allowCredentials: credentials.length > 0 ? credentials.map((cred) => ({
			type: "public-key",
			id: cred.id,
			transports: cred.transports
		})) : void 0
	};
}
/**
* Verify an authentication response
*/
async function verifyAuthenticationResponse(config, response, credential, challengeStore) {
	const clientDataJSON = decodeBase64urlIgnorePadding(response.response.clientDataJSON);
	const authenticatorData = decodeBase64urlIgnorePadding(response.response.authenticatorData);
	const signature = decodeBase64urlIgnorePadding(response.response.signature);
	const clientData = parseClientDataJSON(clientDataJSON);
	if (clientData.type !== ClientDataType.Get) throw new Error("Invalid client data type");
	const challengeString = encodeBase64urlNoPadding(clientData.challenge);
	const challengeData = await challengeStore.get(challengeString);
	if (!challengeData) throw new Error("Challenge not found or expired");
	if (challengeData.type !== "authentication") throw new Error("Invalid challenge type");
	if (challengeData.expiresAt < Date.now()) {
		await challengeStore.delete(challengeString);
		throw new Error("Challenge expired");
	}
	await challengeStore.delete(challengeString);
	if (clientData.origin !== config.origin) throw new Error(`Invalid origin: expected ${config.origin}, got ${clientData.origin}`);
	const authData = parseAuthenticatorData(authenticatorData);
	if (!authData.verifyRelyingPartyIdHash(config.rpId)) throw new Error("Invalid RP ID hash");
	if (!authData.userPresent) throw new Error("User presence not verified");
	if (authData.signatureCounter !== 0 && authData.signatureCounter <= credential.counter) throw new Error("Invalid signature counter - possible cloned authenticator");
	const signatureMessage = createAssertionSignatureMessage(authenticatorData, clientDataJSON);
	const ecdsaPublicKey = decodeSEC1PublicKey(p256, credential.publicKey instanceof Uint8Array ? credential.publicKey : new Uint8Array(credential.publicKey));
	const ecdsaSignature = decodePKIXECDSASignature(signature);
	if (!verifyECDSASignature(ecdsaPublicKey, sha256(signatureMessage), ecdsaSignature)) throw new Error("Invalid signature");
	return {
		credentialId: response.id,
		newCounter: authData.signatureCounter
	};
}
/**
* Authenticate a user with a passkey
*/
async function authenticateWithPasskey(config, adapter, response, challengeStore) {
	const credential = await adapter.getCredentialById(response.id);
	if (!credential) throw new Error("Credential not found");
	const verified = await verifyAuthenticationResponse(config, response, credential, challengeStore);
	await adapter.updateCredentialCounter(verified.credentialId, verified.newCounter);
	const user = await adapter.getUserById(credential.userId);
	if (!user) throw new Error("User not found");
	return user;
}

export { TOKEN_PREFIXES as T, VALID_SCOPES as V, hashPrefixedToken as a, generateTokenWithHash as b, hashToken as c, generateAuthenticationOptions as d, generateRegistrationOptions as e, authenticateWithPasskey as f, generatePrefixedToken as g, hasScope as h, computeS256Challenge as i, registerPasskey as r, verifyRegistrationResponse as v };
