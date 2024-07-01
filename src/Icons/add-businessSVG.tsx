import { cn } from "@/lib/utils";
import React from "react";

interface AddBusinessIcon {
  className?: string;
}
const AddBusinessIcon: React.FC<AddBusinessIcon> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="#FAFAFA" />
        <path
          d="M24.072 29.4V23.4"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 26.4H21"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 22.8V30C36 34.8 34.8 36 30 36H18C13.2 36 12 34.8 12 30V18C12 13.2 13.2 12 18 12H19.8C21.6 12 21.996 12.528 22.68 13.44L24.48 15.84C24.936 16.44 25.2 16.8 26.4 16.8H30C34.8 16.8 36 18 36 22.8Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default AddBusinessIcon;
