import { iconsProps } from "@/Utils/icons.types";
import React from "react";

const CloseIcon = ({
  fill = "#2B2F38",
  width = 20,
  height = 20,
}: iconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3607_242)">
        <path
          d="M7.79209 6.20312C7.35615 5.76249 6.64365 5.76249 6.20303 6.20312C5.7624 6.63906 5.7624 7.35156 6.20303 7.79218L8.40615 9.99531L6.20303 12.1984C5.7624 12.6344 5.76709 13.3469 6.20303 13.7875C6.63896 14.2281 7.35146 14.2281 7.79209 13.7875L9.99521 11.5844L12.1983 13.7875C12.6343 14.2281 13.3468 14.2234 13.7874 13.7875C14.228 13.3516 14.228 12.6391 13.7874 12.1984L11.5843 9.99531L13.7874 7.79218C14.228 7.35624 14.2233 6.64374 13.7874 6.20312C13.3515 5.76249 12.639 5.76249 12.1983 6.20312L9.99521 8.40624L7.79209 6.20312Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_3607_242">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseIcon;
