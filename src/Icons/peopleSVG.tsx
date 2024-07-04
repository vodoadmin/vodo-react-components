import React from "react";

const PeopleIcon = ({ width = 27, height = 27, stroke = "#2B2F38" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M20.6315 7.63059C20.5594 7.61857 20.4752 7.61857 20.4031 7.63059C18.7442 7.57048 17.4219 6.21211 17.4219 4.52916C17.4219 2.81015 18.8043 1.42773 20.5233 1.42773C22.2423 1.42773 23.6247 2.82217 23.6247 4.52916C23.6127 6.21211 22.2904 7.57048 20.6315 7.63059Z"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M19.3925 16.382C21.0394 16.6585 22.8546 16.37 24.1288 15.5165C25.8238 14.3865 25.8238 12.5353 24.1288 11.4053C22.8425 10.5517 21.0033 10.2632 19.3564 10.5517"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M6.16902 7.63059C6.24115 7.61857 6.32529 7.61857 6.39742 7.63059C8.05632 7.57048 9.37864 6.21211 9.37864 4.52916C9.37864 2.81015 7.99622 1.42773 6.27721 1.42773C4.5582 1.42773 3.17578 2.82217 3.17578 4.52916C3.1878 6.21211 4.51012 7.57048 6.16902 7.63059Z"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M7.4079 16.382C5.76102 16.6585 3.94585 16.37 2.67162 15.5165C0.976649 14.3865 0.976649 12.5353 2.67162 11.4053C3.95787 10.5517 5.79709 10.2632 7.44397 10.5517"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4216 16.6101C13.3494 16.598 13.2653 16.598 13.1932 16.6101C11.5343 16.55 10.2119 15.1916 10.2119 13.5086C10.2119 11.7896 11.5944 10.4072 13.3134 10.4072C15.0324 10.4072 16.4148 11.8017 16.4148 13.5086C16.4028 15.1916 15.0805 16.562 13.4216 16.6101Z"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.92454 20.3971C8.22958 21.5271 8.22958 23.3782 9.92454 24.5082C11.8479 25.7944 14.9974 25.7944 16.9208 24.5082C18.6158 23.3782 18.6158 21.5271 16.9208 20.3971C15.0094 19.1228 11.8479 19.1228 9.92454 20.3971Z"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PeopleIcon;
