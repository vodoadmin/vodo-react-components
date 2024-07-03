import React from "react";
const RoundAddIcon = ({ fill = "white", width = 20, height = 21 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.631836" width="20" height="20" rx="10" fill="#EB3D34" />
      <path
        d="M15 11.3461H10.7143V15.6318H9.28571V11.3461H5V9.91755H9.28571V5.63184H10.7143V9.91755H15V11.3461Z"
        fill={fill}
      />
    </svg>
  );
};

export default RoundAddIcon;
