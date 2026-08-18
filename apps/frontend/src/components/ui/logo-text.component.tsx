import React from 'react';

export const LogoTextComponent = () => {
  return (
    <svg
      width="280"
      height="48"
      viewBox="0 0 280 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RJ Business Solutions"
    >
      <defs>
        <linearGradient id="rjWordmark" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#1B4FD8" />
          <stop offset="100%" stopColor="#001963" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" y="4" rx="10" fill="url(#rjWordmark)" />
      <text
        x="20"
        y="31"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="16"
        fontWeight="700"
      >
        RJ
      </text>
      <text
        x="52"
        y="24"
        fill="currentColor"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.4"
      >
        RJ BUSINESS SOLUTIONS
      </text>
      <text
        x="52"
        y="40"
        fill="#C9A84C"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="8"
        fontWeight="500"
        letterSpacing="1.6"
      >
        EMPOWERING GENERATIONAL WEALTH
      </text>
    </svg>
  );
};
