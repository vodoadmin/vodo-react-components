import { cn } from "../Utils/utils";
import React from "react";

interface Eye {
  className?: string;
}
const EyeIcon: React.FC<Eye> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0317 14.1228C10.0317 17.1581 12.4844 19.6108 15.5196 19.6108C18.5549 19.6108 21.0076 17.1581 21.0076 14.1228C21.0076 11.0876 18.5549 8.63489 15.5196 8.63489C12.4844 8.63489 10.0317 11.0876 10.0317 14.1228Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5198 26.8003C10.1084 26.8003 5.06499 23.6118 1.55452 18.0932C0.174859 15.9317 0.174859 12.2986 1.55452 10.1371C5.06499 4.61842 10.1084 1.42987 15.5198 1.42987C20.9311 1.42987 25.9746 4.61842 29.485 10.1371C30.8647 12.2986 30.8647 15.9317 29.485 18.0932C25.9746 23.6118 20.9311 26.8003 15.5198 26.8003Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default EyeIcon;
