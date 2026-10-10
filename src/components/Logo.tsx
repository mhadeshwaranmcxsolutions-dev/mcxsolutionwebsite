type LogoProps = {
  className?: string;
  showText?: boolean;
  light?: boolean;
};

export default function Logo({ className = "", showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 320 130"
        className="h-12 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="MCX Solutions logo"
      >
        <defs>
          <linearGradient id="mcBlueGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3FA9F5" />
            <stop offset="40%" stopColor="#0A66C2" />
            <stop offset="100%" stopColor="#072A5C" />
          </linearGradient>
          <linearGradient id="xOrangeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFC04D" />
            <stop offset="55%" stopColor="#FF8A1F" />
            <stop offset="100%" stopColor="#F25C05" />
          </linearGradient>
          <clipPath id="mcxClipped">
            <text
              x="0"
              y="82"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="92"
              fontWeight="900"
              letterSpacing="-3"
            >
              MCX
            </text>
          </clipPath>
        </defs>

        <text
          x="0"
          y="82"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="92"
          fontWeight="900"
          letterSpacing="-3"
        >
          <tspan fill="url(#mcBlueGrad)">MC</tspan>
          <tspan fill="url(#xOrangeGrad)">X</tspan>
        </text>

        <g clipPath="url(#mcxClipped)" opacity="0.55">
          <path d="M-20 0 L60 0 L0 90 L-80 90 Z" fill="white" />
          <path d="M90 0 L150 0 L100 90 L40 90 Z" fill="white" opacity="0.6" />
          <path d="M180 0 L240 0 L200 90 L140 90 Z" fill="white" opacity="0.7" />
          <path d="M260 0 L330 0 L290 90 L220 90 Z" fill="white" opacity="0.5" />
        </g>

        {showText && (
          <text
            x="2"
            y="118"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="24"
            fontWeight="800"
            letterSpacing="10"
            fill={light ? "#FFFFFF" : "#0B1F3A"}
            opacity={light ? 0.85 : 1}
          >
            SOLUTIONS
          </text>
        )}
      </svg>
    </div>
  );
}
