import React from "react";
const PlusIcon = ({ fill = "white", width = 12, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 6.85714H7.35714V12H5.64286V6.85714H0.5V5.14286H5.64286V0H7.35714V5.14286H12.5V6.85714Z"
        fill={fill}
      />
    </svg>
  );
};

export default PlusIcon;
