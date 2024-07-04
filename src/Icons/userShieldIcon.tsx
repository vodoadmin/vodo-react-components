import React from "react";

const userShieldIcon = ({ fill = "#EB3D34", width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 23C6.443 21.765 2 16.522 2 11V5L12 1L22 5V11C22 16.524 17.557 21.765 12 23ZM4 6V11C4.05715 13.3121 4.87036 15.5418 6.31518 17.3479C7.75999 19.1539 9.75681 20.4367 12 21C14.2432 20.4367 16.24 19.1539 17.6848 17.3479C19.1296 15.5418 19.9429 13.3121 20 11V6L12 3L4 6Z"
        fill={fill}
      />
      <path
        d="M12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11Z"
        fill={fill}
      />
      <path
        d="M7 15C7.49273 15.8983 8.21539 16.6496 9.09398 17.1767C9.97256 17.7039 10.9755 17.988 12 18C13.0245 17.988 14.0274 17.7039 14.906 17.1767C15.7846 16.6496 16.5073 15.8983 17 15C16.975 13.104 13.658 12 12 12C10.333 12 7.025 13.104 7 15Z"
        fill={fill}
      />
    </svg>
  );
};

export default userShieldIcon;