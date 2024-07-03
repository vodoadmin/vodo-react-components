import React from "react";

const AddBusinessIcon = (
  width = 48,
  height = 49,
  stroke = "#2B2F38",
  fill = "#FAFAFA"
) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24.8389" r="24" fill={fill} />
      <path
        d="M24.0723 30.2393V24.2393"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 27.2393H21"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 23.6389V30.8389C36 35.6389 34.8 36.8389 30 36.8389H18C13.2 36.8389 12 35.6389 12 30.8389V18.8389C12 14.0389 13.2 12.8389 18 12.8389H19.8C21.6 12.8389 21.996 13.3669 22.68 14.2789L24.48 16.6789C24.936 17.2789 25.2 17.6389 26.4 17.6389H30C34.8 17.6389 36 18.8389 36 23.6389Z"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default AddBusinessIcon;
