/**
 * WaterPipeScene — precision SVG illustration
 *
 * ViewBox: 0 0 1440 600  (matches the ServicesSection water-zone at desktop)
 * overflow="visible"      → the chrome pipe extends upward into the heading zone
 * preserveAspectRatio     → "xMaxYMin slice" keeps the pipe pinned to the right edge
 *                           on ultra-wide screens, and the water fills from the left.
 *
 * Composition (all x/y in SVG user-units):
 *   Pipe opening    : (1200, 80)  – inside the water zone, close to right edge
 *   Pipe body       : extends upper-right to (1700, −72) – visible above zone via overflow
 *   Water stream    : bezier M1200,80 → C990,100 840,178 → 740,215
 *   Water surface   : wavy path at y ≈ 215 (cards start at y ≈ 48 → partially submerged)
 *   Splash impact   : x=700, y=218
 */

const WaterPipeScene = () => (
  <svg
    viewBox="0 0 1440 600"
    preserveAspectRatio="xMaxYMin slice"
    /* allow pipe to render above this element's bounding box */
    overflow="visible"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    className="absolute inset-0 w-full h-full pointer-events-none"
    style={{ zIndex: 2 }}
  >
    {/* ══════════════════════════
        DEFS
       ══════════════════════════ */}
    <defs>
      {/* Deep water gradient (top of surface → bottom of section) */}
      <linearGradient id="wps-water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#93C5FD" stopOpacity="0.52" />
        <stop offset="28%"  stopColor="#60A5FA" stopOpacity="0.60" />
        <stop offset="62%"  stopColor="#3B82F6" stopOpacity="0.54" />
        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.44" />
      </linearGradient>

      {/* Secondary depth layer */}
      <linearGradient id="wps-depth" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#2563EB" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.22" />
      </linearGradient>

      {/* Chrome gradient — runs perpendicular to pipe axis */}
      {/* Pipe axis ≈ −20° → perpendicular ≈ 70° from horizontal              */}
      {/* gradientTransform rotates the gradient strip to match the pipe width */}
      <linearGradient
        id="wps-chrome"
        gradientUnits="userSpaceOnUse"
        x1="1200" y1="46" x2="1200" y2="114"
      >
        <stop offset="0%"   stopColor="#8592AA" />
        <stop offset="14%"  stopColor="#C2CEDF" />
        <stop offset="28%"  stopColor="#E6EBF4" />
        <stop offset="46%"  stopColor="#F4F6FA" />
        <stop offset="64%"  stopColor="#D4DBE8" />
        <stop offset="80%"  stopColor="#9AAEC8" />
        <stop offset="100%" stopColor="#6B7E98" />
      </linearGradient>

      {/* ── Blur filters ── */}
      <filter id="wps-blur-xs" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" />
      </filter>
      <filter id="wps-blur-sm" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
      <filter id="wps-blur-md" x="-35%" y="-35%" width="170%" height="170%">
        <feGaussianBlur stdDeviation="13" />
      </filter>
      <filter id="wps-blur-lg" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="24" />
      </filter>

      {/* Clip to the water zone (below y=0) */}
      <clipPath id="wps-water-clip">
        <rect x="-10" y="0" width="1460" height="610" />
      </clipPath>
    </defs>

    {/* ══════════════════════════
        WATER BODY
        Clipped to y ≥ 0 so the "water" doesn't
        bleed into the heading zone above.
       ══════════════════════════ */}
    <g clipPath="url(#wps-water-clip)">

      {/* ── Primary water fill ── */}
      <path
        d="M0,215
           C 180,200  360,228  540,212
           C 720,196  900,222 1080,208
           C1260,194 1380,216 1440,210
           L1440,600 L0,600 Z"
        fill="url(#wps-water)"
      />

      {/* ── Depth band ── */}
      <path
        d="M0,268
           C 200,258  400,275  600,262
           C 800,249 1000,268 1200,256
           C1320,249 1400,262 1440,256
           L1440,600 L0,600 Z"
        fill="url(#wps-depth)"
      />

      {/* ── Extra deep bottom ── */}
      <rect x="0" y="420" width="1440" height="180" fill="rgba(29,78,216,0.10)" />

      {/* ── Surface specular layer ── */}
      <path
        d="M0,215
           C 180,200  360,228  540,212
           C 720,196  900,222 1080,208
           C1260,194 1380,216 1440,210
           L1440,300 L0,300 Z"
        fill="rgba(255,255,255,0.07)"
      />

      {/* ── Wave lines at surface ── */}

      {/* back wave */}
      <path
        className="wps-wave-back"
        d="M-80,205
           C 140,193  320,216  520,203
           C 720,190  920,212 1120,200
           C1260,192 1380,206 1520,200"
        fill="none"
        stroke="rgba(191,219,254,0.68)"
        strokeWidth="2.5"
      />

      {/* front wave */}
      <path
        className="wps-wave-front"
        d="M-80,220
           C 120,208  300,232  500,218
           C 700,204  900,228 1100,216
           C1240,208 1380,222 1520,216"
        fill="none"
        stroke="rgba(147,197,253,0.72)"
        strokeWidth="2"
      />

      {/* micro-crest */}
      <path
        d="M0,212
           C 200,202  400,218  600,207
           C 800,196 1000,214 1200,204
           C1320,198 1400,210 1440,206"
        fill="none"
        stroke="rgba(219,234,254,0.82)"
        strokeWidth="1.2"
      />

      {/* ── Caustic light patches ── */}
      <ellipse cx="155"  cy="295" rx="115" ry="18" fill="rgba(255,255,255,0.055)" filter="url(#wps-blur-md)" />
      <ellipse cx="435"  cy="330" rx="88"  ry="14" fill="rgba(255,255,255,0.048)" filter="url(#wps-blur-md)" />
      <ellipse cx="810"  cy="308" rx="105" ry="16" fill="rgba(255,255,255,0.048)" filter="url(#wps-blur-md)" />
      <ellipse cx="1095" cy="348" rx="78"  ry="12" fill="rgba(255,255,255,0.038)" filter="url(#wps-blur-md)" />
      <ellipse cx="285"  cy="418" rx="65"  ry="10" fill="rgba(255,255,255,0.032)" filter="url(#wps-blur-md)" />
      <ellipse cx="675"  cy="390" rx="90"  ry="13" fill="rgba(255,255,255,0.038)" filter="url(#wps-blur-md)" />

      {/* ── Shimmer rays ── */}
      <rect
        className="wps-shimmer"
        x="-180" y="218" width="220" height="382"
        fill="rgba(255,255,255,0.075)"
        style={{ transform: "skewX(-14deg)" }}
        filter="url(#wps-blur-xs)"
      />
      <rect
        className="wps-shimmer-2"
        x="-180" y="218" width="130" height="382"
        fill="rgba(255,255,255,0.055)"
        style={{ transform: "skewX(-10deg)" }}
        filter="url(#wps-blur-xs)"
      />

    </g>

    {/* ══════════════════════════
        SPLASH  (not clipped — droplets fly above surface)
       ══════════════════════════ */}

    {/* Halo glow */}
    <ellipse
      cx="700" cy="218" rx="115" ry="36"
      fill="rgba(147,197,253,0.30)"
      filter="url(#wps-blur-md)"
    />

    {/* Surface rings */}
    <ellipse cx="700" cy="222" rx="63"  ry="16"
      fill="none" stroke="rgba(191,219,254,0.88)" strokeWidth="2" />
    <ellipse cx="700" cy="222" rx="90"  ry="24"
      fill="none" stroke="rgba(191,219,254,0.42)" strokeWidth="1.5" />
    <ellipse cx="700" cy="222" rx="118" ry="32"
      fill="none" stroke="rgba(191,219,254,0.20)" strokeWidth="1" />

    {/* Left splash arc */}
    <path d="M662,215 Q634,175 648,152"
      fill="none" stroke="rgba(147,197,253,0.74)" strokeWidth="4.2" strokeLinecap="round" />
    {/* Right splash arc */}
    <path d="M740,215 Q768,173 756,150"
      fill="none" stroke="rgba(147,197,253,0.70)" strokeWidth="3.8" strokeLinecap="round" />
    {/* Inner left arc */}
    <path d="M680,214 Q660,168 670,146"
      fill="none" stroke="rgba(147,197,253,0.62)" strokeWidth="3.2" strokeLinecap="round" />
    {/* Inner right arc */}
    <path d="M720,214 Q742,166 734,144"
      fill="none" stroke="rgba(147,197,253,0.58)" strokeWidth="2.8" strokeLinecap="round" />

    {/* Droplets */}
    <circle cx="648" cy="150" r="5.5" fill="rgba(147,197,253,0.82)" />
    <circle cx="756" cy="148" r="5.0" fill="rgba(147,197,253,0.78)" />
    <circle cx="670" cy="144" r="4.2" fill="rgba(147,197,253,0.72)" />
    <circle cx="734" cy="142" r="3.8" fill="rgba(147,197,253,0.68)" />
    <circle cx="636" cy="166" r="3.5" fill="rgba(147,197,253,0.64)" />
    <circle cx="765" cy="160" r="3.2" fill="rgba(147,197,253,0.62)" />
    <circle cx="655" cy="132" r="2.8" fill="rgba(147,197,253,0.56)" />
    <circle cx="748" cy="128" r="2.2" fill="rgba(147,197,253,0.52)" />

    {/* ══════════════════════════
        WATER STREAM
        Bezier: pipe-opening (1200,80) → impact (700,218)
        Control pts chosen so initial direction matches pipe axis (~−20°)
       ══════════════════════════ */}

    {/* Outer glow */}
    <path
      d="M1200,80 C990,100 840,178 740,215"
      fill="none"
      stroke="rgba(147,197,253,0.20)"
      strokeWidth="96"
      strokeLinecap="round"
      filter="url(#wps-blur-sm)"
    />

    {/* Stream body */}
    <path
      d="M1200,80 C990,100 840,178 740,215"
      fill="none"
      stroke="rgba(96,165,250,0.50)"
      strokeWidth="58"
      strokeLinecap="round"
    />

    {/* Mid-layer (lighter) */}
    <path
      d="M1200,80 C990,100 840,178 740,215"
      fill="none"
      stroke="rgba(186,230,253,0.60)"
      strokeWidth="36"
      strokeLinecap="round"
    />

    {/* Highlight */}
    <path
      d="M1200,78 C991,98 841,176 741,213"
      fill="none"
      stroke="rgba(255,255,255,0.46)"
      strokeWidth="14"
      strokeLinecap="round"
    />

    {/* Bright centre */}
    <path
      d="M1200,77 C992,97 842,175 742,212"
      fill="none"
      stroke="rgba(255,255,255,0.28)"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* Edge turbulence dashes */}
    <path
      d="M1215,75 C1005,95 856,172 757,210"
      fill="none" stroke="rgba(147,197,253,0.45)"
      strokeWidth="1.8" strokeLinecap="round"
      strokeDasharray="11 8"
    />
    <path
      d="M1185,85 C975,105 825,183 726,221"
      fill="none" stroke="rgba(147,197,253,0.40)"
      strokeWidth="1.8" strokeLinecap="round"
      strokeDasharray="11 8"
    />

    {/* Stray droplets along stream */}
    <circle cx="1070" cy="94"  r="4.5" fill="rgba(147,197,253,0.74)" />
    <circle cx="988"  cy="112" r="4.0" fill="rgba(147,197,253,0.70)" />
    <circle cx="908"  cy="138" r="3.6" fill="rgba(147,197,253,0.66)" />
    <circle cx="828"  cy="165" r="3.2" fill="rgba(147,197,253,0.62)" />
    <circle cx="1038" cy="100" r="3.0" fill="rgba(147,197,253,0.56)" />
    <circle cx="960"  cy="122" r="2.6" fill="rgba(147,197,253,0.52)" />

    {/* ══════════════════════════
        CHROME PIPE
        Body: from opening (1200,80) to off-screen upper-right.
        Pipe axis direction: angle ≈ −20° from horizontal
          → unit vector: (cos20°, −sin20°) ≈ (0.940, −0.342)
        Perp (highlight side, "top" of pipe): (0.342, 0.940) rotated −90° = (−0.342, 0.940)...
        Actually highlight is on the upper face: offset (−0.342 × 20, −0.940 × 20) from centre.
        Pipe centre line: M1200,80  L1700,−72 (and beyond, clipped by viewport)
       ══════════════════════════ */}

    {/* Drop shadow */}
    <path
      d="M1208,96 L1708,-56"
      stroke="rgba(8,24,68,0.16)"
      strokeWidth="76"
      strokeLinecap="butt"
      filter="url(#wps-blur-sm)"
    />

    {/* Pipe body */}
    <path
      d="M1200,80 L1700,-72"
      stroke="#BFCAD8"
      strokeWidth="68"
      strokeLinecap="butt"
    />

    {/* ── Chrome highlights & shadows ──
        Pipe axis: Δx=500, Δy=−152  → |len|≈521
        Unit:  (0.960, −0.292)
        Perp(top = highlight): (−0.292, −0.960)  × 23px → (−6.7, −22.1)
        Perp(bot = shadow):    (+0.292, +0.960)  × 23px → (+6.7, +22.1)
    */}

    {/* Top shine 1 */}
    <path
      d="M1193,57 L1693,-95"
      stroke="rgba(255,255,255,0.64)"
      strokeWidth="16"
      strokeLinecap="butt"
    />
    {/* Top shine 2 */}
    <path
      d="M1195,63 L1695,-89"
      stroke="rgba(255,255,255,0.32)"
      strokeWidth="8"
      strokeLinecap="butt"
    />
    {/* Bottom shadow */}
    <path
      d="M1207,102 L1707,-50"
      stroke="rgba(18,46,110,0.22)"
      strokeWidth="14"
      strokeLinecap="butt"
    />

    {/* ── Pipe opening ellipse ──
        Centre: (1200, 80)
        The pipe cross-section perpendicular to axis (−20°) has its major axis at 70° from horizontal.
        Ry = 34 (half-diameter), Rx = 10 (foreshortened view along the axis)
    */}
    {/* Dark interior */}
    <ellipse
      cx="1200" cy="80"
      rx="11" ry="34"
      transform="rotate(70 1200 80)"
      fill="#1A3055"
    />
    {/* Deep centre */}
    <ellipse
      cx="1200" cy="80"
      rx="5.5" ry="24"
      transform="rotate(70 1200 80)"
      fill="#0C1A30"
    />
    {/* Rim highlight */}
    <ellipse
      cx="1200" cy="80"
      rx="11" ry="34"
      transform="rotate(70 1200 80)"
      fill="none"
      stroke="rgba(200,215,235,0.65)"
      strokeWidth="2.5"
    />
    {/* Water exit glow */}
    <ellipse
      cx="1200" cy="80"
      rx="20" ry="48"
      transform="rotate(70 1200 80)"
      fill="rgba(147,197,253,0.18)"
      filter="url(#wps-blur-xs)"
    />

  </svg>
);

export default WaterPipeScene;
