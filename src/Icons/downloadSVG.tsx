import { cn } from "../Utils/utils";
import React from "react";

interface Download {
  className?: string;
}
const DownloadIcon: React.FC<Download> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0393 15.443V24.7851L15.1533 21.671"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.0393 24.785L8.92529 21.671"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.2804 13.886V21.671C32.2804 29.4561 29.1663 32.5701 21.3813 32.5701H12.0392C4.25416 32.5701 1.14014 29.4561 1.14014 21.671V12.329C1.14014 4.54389 4.25416 1.42987 12.0392 1.42987H19.8243"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.2803 13.886H26.0523C21.3812 13.886 19.8242 12.329 19.8242 7.65792V1.42987L32.2803 13.886Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default DownloadIcon;
