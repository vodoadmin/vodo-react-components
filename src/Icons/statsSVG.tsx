import { cn } from "../Utils/utils";
import React from "react";

interface Stats {
  className?: string;
}
const StatsIcon: React.FC<Stats> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_136_998)">
          <path
            d="M6.4 9.81108H6.6C7.37 9.81108 8 10.4411 8 11.2111V18.2111C8 18.9811 7.37 19.6111 6.6 19.6111H6.4C5.63 19.6111 5 18.9811 5 18.2111V11.2111C5 10.4411 5.63 9.81108 6.4 9.81108ZM12 5.61108C12.77 5.61108 13.4 6.24108 13.4 7.01108V18.2111C13.4 18.9811 12.77 19.6111 12 19.6111C11.23 19.6111 10.6 18.9811 10.6 18.2111V7.01108C10.6 6.24108 11.23 5.61108 12 5.61108ZM17.6 13.6111C18.37 13.6111 19 14.2411 19 15.0111V18.2111C19 18.9811 18.37 19.6111 17.6 19.6111C16.83 19.6111 16.2 18.9811 16.2 18.2111V15.0111C16.2 14.2411 16.83 13.6111 17.6 13.6111Z"
            fill="#2B2F38"
            fillOpacity="0.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_136_998">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.611084)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default StatsIcon;
