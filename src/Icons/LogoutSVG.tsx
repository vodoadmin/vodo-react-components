import React from "react";

const LogoutIcon = ({ width = 27, height = 27, stroke = "#2B2F38" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7959 19.0051C17.4043 23.5524 15.0676 25.4092 9.95187 25.4092H9.78766C4.14145 25.4092 1.88044 23.1482 1.88044 17.502V9.26632C1.88044 3.62012 4.14145 1.35911 9.78766 1.35911H9.95187C15.0297 1.35911 17.3664 3.19065 17.7833 7.66215"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0904 13.3965L24.4648 13.3965"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6484 17.6279L25.8799 13.3964L21.6484 9.16494"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
