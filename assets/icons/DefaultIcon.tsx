export default function DefaultIcon({}: {}) {
  return (
    <svg
      id="iconce.com"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-4 w-4"
    >
      <defs>
        <linearGradient
          id="r5"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(45)"
          style={{ transformOrigin: 'center center' }}
        >
          <stop stopColor="#5C5C5C"></stop>
          <stop offset="1" stopColor="#0F1015"></stop>
        </linearGradient>
        <radialGradient
          id="r6"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256) rotate(90) scale(512)"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect
        id="r4"
        width="256"
        height="256"
        x="0"
        y="0"
        rx="500"
        fill="url(#r5)"
        stroke="#FFFFFF"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      />
      <text
        x="50%"
        y="50%"
        fontSize="128"
        fontWeight="600"
        fill="#FFFFFF"
        fontFamily="sans-serif"
        textAnchor="middle"
        dy="0.35em"
      />
    </svg>
  )
}
