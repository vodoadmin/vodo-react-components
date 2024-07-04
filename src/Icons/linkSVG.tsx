import React from "react";

const LinkIcon = ({ stroke = "#2B2F38", width = 27, height = 25 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.03084 12.718C2.08284 11.578 1.50684 10.114 1.50684 8.51797C1.50684 4.89397 4.47084 1.91797 8.10684 1.91797H14.1068C17.7308 1.91797 20.7068 4.89397 20.7068 8.51797C20.7068 12.142 17.7428 15.118 14.1068 15.118H11.1068"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4826 23.5184H12.9066C9.28264 23.5184 6.30664 20.5424 6.30664 16.9184C6.30664 13.2944 9.27064 10.3184 12.9066 10.3184H15.9066"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.9832 12.7178C24.9312 13.8578 25.5072 15.3218 25.5072 16.9178C25.5072 20.5418 22.5432 23.5178 18.9072 23.5178"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinkIcon;
