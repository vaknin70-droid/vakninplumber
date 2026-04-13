import { d as decodeBase64, e as encodeBase64 } from './base64_wRBbrS2s.mjs';

function encodeCursor(orderValue, id) {
  return encodeBase64(JSON.stringify({ orderValue, id }));
}
function decodeCursor(cursor) {
  try {
    const parsed = JSON.parse(decodeBase64(cursor));
    if (typeof parsed.orderValue === "string" && typeof parsed.id === "string") {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}
class EmDashValidationError extends Error {
  constructor(message, details) {
    super(message);
    this.details = details;
    this.name = "EmDashValidationError";
  }
}

export { EmDashValidationError as E, decodeCursor as d, encodeCursor as e };
