import React from "react";

const DownloadIcon = ({ width = 34, height = 34, stroke = "#2B2F38" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.04 15.2822V24.6243L15.1541 21.5103"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0398 24.6248L8.92578 21.5107"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.2809 13.7256V21.5107C32.2809 29.2957 29.1668 32.4098 21.3818 32.4098H12.0397C4.25465 32.4098 1.14062 29.2957 1.14062 21.5107V12.1686C1.14062 4.38355 4.25465 1.26953 12.0397 1.26953H19.8248"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.2813 13.7256H26.0532C21.3822 13.7256 19.8252 12.1686 19.8252 7.49758V1.26953L32.2813 13.7256Z"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
