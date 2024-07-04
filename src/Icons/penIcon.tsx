import React from "react";
const PenIcon = ({ fill = "#2B2F38", width = 30, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 21.9106V25.108C6 25.4025 6.22 25.6339 6.5 25.6339H9.54C9.67 25.6339 9.8 25.5813 9.89 25.4761L20.81 14.0012L17.06 10.057L6.15 21.5319C6.05 21.6371 6 21.7633 6 21.9106ZM23.71 10.951C24.1 10.5408 24.1 9.87821 23.71 9.46801L21.37 7.00685C21.1832 6.8099 20.9295 6.69922 20.665 6.69922C20.4005 6.69922 20.1468 6.8099 19.96 7.00685L18.13 8.93161L21.88 12.8758L23.71 10.951Z"
        fill={fill}
        fillOpacity="0.55"
      />
    </svg>
  );
};

export default PenIcon;
