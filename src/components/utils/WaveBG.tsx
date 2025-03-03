import { SVGProps } from "react";

interface WaveBGProps extends SVGProps<SVGSVGElement> {
  topColor?: string;
  bottomColor?: string;
  bgColor?: string;
}

const WaveBG = ({ topColor, bottomColor, bgColor, ...props }: WaveBGProps) => {
  // Generate a unique ID for the gradient
  const gradientId = `wave-gradient-${Math.random().toString(36).slice(2)}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1282 1753"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor={topColor || bgColor} />
          <stop offset="95%" stopColor={bottomColor || bgColor} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M1281 1H1v1659.25c200.058-106.44 439.942-106.44 640 0 195.823 122.23 444.18 122.23 640 0V1Z"
      />
    </svg>
  );
};

export default WaveBG;
