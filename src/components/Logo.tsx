import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light' | 'monochrome';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'default',
  showTagline = false
}) => {
  const isLight = variant === 'light';
  const navyColor = isLight ? '#FFFFFF' : '#071D3A';
  const orangeColor = '#F15A24';
  const suitcaseFill = isLight ? 'rgba(255, 255, 255, 0.05)' : '#FFFFFF';
  const tagBgColor = isLight ? '#071D3A' : '#071D3A';
  const tagBorder = isLight ? '#F15A24' : 'none';

  return (
    <div className={`inline-flex flex-col ${showTagline ? 'items-start' : 'items-center'}`}>
      <svg
        viewBox="0 0 1536 544"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ overflow: 'visible' }}
        aria-label="InfoTripp Logo — Extra P Extra Plans"
      >
        <g id="infotripp-exact-logo">
          {/* ==================== 1. WORDMARK "infotri" ==================== */}

          {/* First 'i' leaf dot (tilted upward organic leaf shape) */}
          <path
            d="M 46 174 C 41 155 48 132 68 116 C 74 135 72 158 59 176 C 55 181 48 180 46 174 Z"
            fill={navyColor}
          />

          {/* First 'i' vertical stem (rounded capsule) */}
          <rect x="44" y="238" width="35" height="180" rx="17.5" fill={navyColor} />

          {/* Letter 'n' */}
          <g fill={navyColor}>
            <rect x="116" y="238" width="35" height="180" rx="17.5" />
            <path
              d="M 133 275 C 145 245 175 238 205 238 C 235 238 255 255 255 290 V 400.5 C 255 410.2 247.2 418 237.5 418 C 227.8 418 220 410.2 220 400.5 V 292 C 220 272 208 266 195 266 C 172 266 151 285 151 315 V 400.5 C 151 410.2 143.2 418 133.5 418 C 123.8 418 116 410.2 116 400.5 Z"
            />
          </g>

          {/* Letter 'f' */}
          <g fill={navyColor}>
            <rect x="282" y="200" width="35" height="218" rx="17.5" />
            <path
              d="M 282 220 C 282 170 300 128 348 128 C 362 128 375 133 382 138 C 388 143 388 152 382 158 C 376 164 366 164 358 160 C 352 158 344 156 335 156 C 322 156 317 166 317 185 V 238 H 360 C 369.7 238 377.5 245.8 377.5 255.5 C 377.5 265.2 369.7 273 360 273 H 317 V 400.5 C 317 410.2 309.2 418 299.5 418 C 289.8 418 282 410.2 282 400.5 Z"
            />
            <rect x="252" y="238" width="45" height="35" rx="17.5" />
          </g>

          {/* Letter 'o' (circular ring) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 480 328 C 480 378 446 418 405 418 C 364 418 330 378 330 328 C 330 278 364 238 405 238 C 446 238 480 278 480 328 Z M 445 328 C 445 295 427 268 405 268 C 383 268 365 295 365 328 C 365 361 383 388 405 388 C 427 388 445 361 445 328 Z"
            fill={navyColor}
          />

          {/* Letter 't' */}
          <g fill={navyColor}>
            <rect x="495" y="238" width="70" height="34" rx="17" />
            <path
              d="M 515 185 C 515 175.5 522.5 168 532 168 C 541.5 168 549 175.5 549 185 V 375 C 549 385 555 390 564 390 C 572 390 578 387 583 382 C 589 376 598 377 603 383 C 608 389 607 398 600 405 C 590 415 577 420 562 420 C 533 420 515 401 515 372 Z"
            />
          </g>

          {/* Letter 'r' */}
          <g fill={navyColor}>
            <rect x="595" y="238" width="35" height="180" rx="17.5" />
            <path
              d="M 612 280 C 625 250 650 238 678 238 C 688 238 696 244 698 254 C 700 264 694 273 684 274 C 662 276 642 290 635 315 V 400.5 C 635 410.2 627.2 418 617.5 418 C 607.8 418 600 410.2 600 400.5 Z"
            />
          </g>

          {/* Second 'i' (round dot + vertical stem) */}
          <g fill={navyColor}>
            <circle cx="725.5" cy="162" r="18" />
            <rect x="708" y="238" width="35" height="180" rx="17.5" />
          </g>

          {/* ==================== 2. SUITCASE (LUGGAGE CONTAINER) ==================== */}
          <g id="suitcase-group">
            {/* Handle Top Arch */}
            <path
              d="M 942 135 V 72 C 942 46, 960 26, 986 26 H 1026 C 1052 26, 1070 46, 1070 72 V 135"
              stroke={navyColor}
              strokeWidth="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Suitcase Main Body */}
            <rect
              x="780"
              y="132"
              width="452"
              height="390"
              rx="52"
              ry="52"
              stroke={navyColor}
              strokeWidth="32"
              fill={suitcaseFill}
            />

            {/* ==================== 3. 'pp' LETTERS IN ORANGE ==================== */}
            {/* First 'p' */}
            <g fill={orangeColor}>
              <rect x="868" y="240" width="34" height="205" rx="17" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 885 240 C 935 240 975 272 975 318 C 975 364 935 396 885 396 H 880 V 240 H 885 Z M 902 272 V 364 C 926 364 944 344 944 318 C 944 292 926 272 902 272 Z"
              />
            </g>

            {/* Second 'p' */}
            <g fill={orangeColor}>
              <rect x="998" y="240" width="34" height="205" rx="17" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 1015 240 C 1065 240 1105 272 1105 318 C 1105 364 1065 396 1015 396 H 1010 V 240 H 1015 Z M 1032 272 V 364 C 1056 364 1074 344 1074 318 C 1074 292 1056 272 1032 272 Z"
              />
            </g>
          </g>

          {/* ==================== 4. LUGGAGE TAG "EXTRA P EXTRA PLANS" ==================== */}
          <g id="luggage-tag-group">
            {/* Fastening cord / ribbon connecting suitcase to tag */}
            <path
              d="M 1218 238 L 1268 226 M 1218 262 L 1262 254"
              stroke={navyColor}
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Tilted Tag Body (Rotated clockwise by 11 degrees) */}
            <g transform="translate(1385, 340) rotate(11) translate(-1385, -340)">
              {/* Solid Dark Navy Tag Container */}
              <rect
                x="1265"
                y="180"
                width="240"
                height="325"
                rx="38"
                ry="38"
                fill={tagBgColor}
                stroke={tagBorder}
                strokeWidth={isLight ? 4 : 0}
              />

              {/* White Punch Hole */}
              <circle cx="1385" cy="225" r="16" fill="#FFFFFF" />

              {/* Line 1: EXTRA P */}
              <text
                x="1385"
                y="295"
                textAnchor="middle"
                fill="#FFFFFF"
                style={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Arial Black', sans-serif",
                  fontWeight: 900,
                  fontSize: '34px',
                  letterSpacing: '1.5px'
                }}
              >
                EXTRA P
              </text>

              {/* Line 2: EXTRA */}
              <text
                x="1385"
                y="348"
                textAnchor="middle"
                fill="#FFFFFF"
                style={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Arial Black', sans-serif",
                  fontWeight: 900,
                  fontSize: '34px',
                  letterSpacing: '1.5px'
                }}
              >
                EXTRA
              </text>

              {/* Line 3: PLANS */}
              <text
                x="1385"
                y="402"
                textAnchor="middle"
                fill="#FFFFFF"
                style={{
                  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Arial Black', sans-serif",
                  fontWeight: 900,
                  fontSize: '34px',
                  letterSpacing: '1.5px'
                }}
              >
                PLANS
              </text>
            </g>
          </g>
        </g>
      </svg>

      {showTagline && (
        <span
          className="block text-[11px] font-bold uppercase tracking-widest mt-1 text-[#F15A24]"
        >
          Travel. Simplified.
        </span>
      )}
    </div>
  );
};
