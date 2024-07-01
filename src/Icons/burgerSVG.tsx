import { cn } from "../Utils/utils";
import React from "react";

interface Burger {
  className?: string;
}
const BurgerIcon: React.FC<Burger> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="28"
        height="23"
        viewBox="0 0 28 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.80005 2.41101H25.8"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          opacity="0.34"
          d="M1.80005 11.611H25.8"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M1.80005 20.811H25.8"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default BurgerIcon;
