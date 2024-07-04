import React from "react";

const StatsIcon = ({ width = 24, height = 25, stroke = "#2B2F38" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_144_2134)">
        <path
          d="M6.4 9.6502H6.6C7.37 9.6502 8 10.2802 8 11.0502V18.0502C8 18.8202 7.37 19.4502 6.6 19.4502H6.4C5.63 19.4502 5 18.8202 5 18.0502V11.0502C5 10.2802 5.63 9.6502 6.4 9.6502ZM12 5.4502C12.77 5.4502 13.4 6.0802 13.4 6.8502V18.0502C13.4 18.8202 12.77 19.4502 12 19.4502C11.23 19.4502 10.6 18.8202 10.6 18.0502V6.8502C10.6 6.0802 11.23 5.4502 12 5.4502ZM17.6 13.4502C18.37 13.4502 19 14.0802 19 14.8502V18.0502C19 18.8202 18.37 19.4502 17.6 19.4502C16.83 19.4502 16.2 18.8202 16.2 18.0502V14.8502C16.2 14.0802 16.83 13.4502 17.6 13.4502Z"
          stroke={stroke}
          fillOpacity="0.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_144_2134">
          <rect width="24" height="24" fill="white" transform="translate(0 0.450195)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default StatsIcon;
