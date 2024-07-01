import { cn } from "@/lib/utils";
import React from "react";
interface ArrowMenu {
  className?: string;
}
const ArrowMenuIcon: React.FC<ArrowMenu> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="26"
        height="20"
        viewBox="0 0 26 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.56947 1.04163L1 9.61105L9.56947 18.1805"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.0001 9.61121H1.23999"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowMenuIcon;
