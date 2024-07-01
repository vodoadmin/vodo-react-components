import { cn } from "../Utils/utils";
import React from "react";

interface FilterSearch {
  className?: string;
}
const FilterSearchIcon: React.FC<FilterSearch> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.436 26.4675C17.436 27.3781 16.8387 28.5723 16.0774 29.0351L13.9726 30.3936C12.0171 31.6028 9.30007 30.2443 9.30007 27.8259V19.8393C9.30007 18.7794 8.70294 17.421 8.09088 16.6746L2.35842 10.6436C1.59708 9.88225 1 8.53873 1 7.62811V4.16476C1 2.35845 2.35849 1 4.01552 1H23.9296C25.5866 1 26.9452 2.35845 26.9452 4.01548V7.32953C26.9452 8.53872 26.1839 10.0465 25.4375 10.7929"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.0484 22.6608C22.6866 22.6608 24.8254 20.522 24.8254 17.8837C24.8254 15.2455 22.6866 13.1067 20.0484 13.1067C17.4101 13.1067 15.2714 15.2455 15.2714 17.8837C15.2714 20.522 17.4101 22.6608 20.0484 22.6608Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.721 23.5565L24.2281 22.0637"
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

export default FilterSearchIcon;
