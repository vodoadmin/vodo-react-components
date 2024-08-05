import { iconsProps } from "@/Utils/icons.types";
import { cn } from "../Utils/utils";
import React from "react";

const CheckIcon = ({ className, width = 12, height = 8 }: iconsProps) => {
  return (
    <svg
      className={cn("", className)}
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 4.00004L4.58 6.83004L10.25 1.17004"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CheckIcon;
