'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      className="mt-[8px]"
      role="img"
      aria-label="RJ Business Solutions"
    >
      <defs>
        <linearGradient id="rjMarkGradient" x1="0" y1="0" x2="60" y2="60">
          <stop offset="0%" stopColor="#1B4FD8" />
          <stop offset="100%" stopColor="#001963" />
        </linearGradient>
      </defs>
      <rect width="60" height="60" rx="14" fill="url(#rjMarkGradient)" />
      <text
        x="30"
        y="39"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="0.5"
      >
        RJ
      </text>
    </svg>
  );
};
