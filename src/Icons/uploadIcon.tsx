import React from "react";

const UploadIcon = ({ stroke = "#EB3D34", width = 28, height = 36 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6665 1.5V8.83333C17.6665 9.31956 17.8597 9.78588 18.2035 10.1297C18.5473 10.4735 19.0136 10.6667 19.4998 10.6667H26.8332M17.6665 1.5H4.83317C3.86071 1.5 2.92808 1.88631 2.24045 2.57394C1.55281 3.26158 1.1665 4.19421 1.1665 5.16667V30.8333C1.1665 31.8058 1.55281 32.7384 2.24045 33.4261C2.92808 34.1137 3.86071 34.5 4.83317 34.5H23.1665C24.139 34.5 25.0716 34.1137 25.7592 33.4261C26.4469 32.7384 26.8332 31.8058 26.8332 30.8333V10.6667M17.6665 1.5L26.8332 10.6667M13.9998 16.1667V27.1667M13.9998 16.1667L9.4165 20.75M13.9998 16.1667L18.5832 20.75"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UploadIcon;
