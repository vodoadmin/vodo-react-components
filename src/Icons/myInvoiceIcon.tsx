import React from "react";
const MyInvoiceIcon = ({ fill = "#EB3D34", width = 18, height = 22 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10H5M11 6H5M1 17.646V7.054C1 4.2 1 2.774 1.879 1.887C2.757 1 4.172 1 7 1H11C13.828 1 15.243 1 16.121 1.887C17 2.773 17 4.2 17 7.054V17.646C17 19.157 17 19.913 16.538 20.211C15.783 20.697 14.616 19.677 14.029 19.307C13.544 19.001 13.302 18.849 13.032 18.84C12.742 18.83 12.495 18.977 11.971 19.307L10.06 20.512C9.544 20.837 9.287 21 9 21C8.713 21 8.456 20.837 7.94 20.512L6.03 19.307C5.544 19.001 5.302 18.849 5.033 18.84C4.742 18.83 4.495 18.977 3.971 19.307C3.384 19.677 2.217 20.697 1.461 20.211C1 19.913 1 19.158 1 17.646Z"
        stroke="#2B2F38"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MyInvoiceIcon;