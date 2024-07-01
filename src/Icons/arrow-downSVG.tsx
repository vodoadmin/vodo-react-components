import React from "react";
import { cn } from "../../../lib/utils";

interface ArrowDown {
  className?: string;
}
const ArrowDownIcon: React.FC<ArrowDown> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="14"
        height="7"
        viewBox="0 0 14 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.20818 1.40857L1.06676 1.54999C0.787903 1.27114 0.787903 0.812227 1.06676 0.533372C1.34561 0.254517 1.80452 0.254517 2.08338 0.533372M1.20818 1.40857L2.08338 0.533372M1.20818 1.40857L1.06676 1.54999L5.58016 6.06338C5.98583 6.46906 6.52183 6.67576 7.05761 6.67576M1.20818 1.40857L7.05761 6.67576M2.08338 0.533372L6.59678 5.04676C6.85095 5.30094 7.26427 5.30094 7.51844 5.04676L12.0319 0.533372C12.3107 0.254517 12.7696 0.254517 13.0485 0.533372C13.3273 0.812227 13.3273 1.27114 13.0485 1.54999L8.53506 6.06338C8.12938 6.46906 7.59339 6.67576 7.05761 6.67576M2.08338 0.533372L7.05761 6.67576"
          fill="#2B2F38"
          stroke="#2B2F38"
          strokeWidth="0.4"
        />
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
