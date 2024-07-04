import React from "react";

const EmployeeIcon = ({ fill = "#EB3D34", width = 24, height = 24 }) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2398 10.793C13.6183 10.793 15.5464 8.86486 15.5464 6.48635C15.5464 4.10785 13.6183 2.17969 11.2398 2.17969C8.86127 2.17969 6.93311 4.10785 6.93311 6.48635C6.93311 8.86486 8.86127 10.793 11.2398 10.793Z"
        fill="#EB3D34"
      />
      <path d="M14 18.667H18.6667V19.6003H14V18.667Z" fill={fill} />
      <path
        d="M10.0001 20.0002V22.0002C10.0001 22.177 10.0703 22.3465 10.1954 22.4716C10.3204 22.5966 10.49 22.6668 10.6668 22.6668H22.0001C22.1769 22.6668 22.3465 22.5966 22.4715 22.4716C22.5965 22.3465 22.6668 22.177 22.6668 22.0002V15.3335C22.6668 15.1567 22.5965 14.9871 22.4715 14.8621C22.3465 14.7371 22.1769 14.6668 22.0001 14.6668H17.3334V13.6868C17.3334 13.51 17.2632 13.3404 17.1382 13.2154C17.0132 13.0904 16.8436 13.0202 16.6668 13.0202C16.49 13.0202 16.3204 13.0904 16.1954 13.2154C16.0703 13.3404 16.0001 13.51 16.0001 13.6868V14.6668H14.6668V12.2802C13.5339 12.0948 12.388 12.0011 11.2401 12.0002C8.70864 11.9894 6.20553 12.5332 3.90677 13.5935C3.52843 13.772 3.20924 14.0554 2.98709 14.4099C2.76493 14.7644 2.64914 15.1752 2.65344 15.5935V20.0002H10.0001ZM21.3334 21.3335H11.3334V16.0002H16.0001V16.2802C16.0001 16.457 16.0703 16.6265 16.1954 16.7516C16.3204 16.8766 16.49 16.9468 16.6668 16.9468C16.8436 16.9468 17.0132 16.8766 17.1382 16.7516C17.2632 16.6265 17.3334 16.457 17.3334 16.2802V16.0002H21.3334V21.3335Z"
        fill={fill}
      />
    </svg>
  );
};

export default EmployeeIcon;