import { cn } from "../Utils/utils";
import React from "react";

interface Clear {
  className?: string;
}
const ClearIcon: React.FC<Clear> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0952148 7L2.55811 3.49609L0.279297 0.258789H1.70752L2.74219 1.83936C2.93685 2.13981 3.09342 2.3916 3.21191 2.59473C3.39811 2.31543 3.5695 2.06787 3.72607 1.85205L4.8623 0.258789H6.22705L3.89746 3.43262L6.40479 7H5.00195L3.61816 4.90527L3.25 4.34033L1.479 7H0.0952148Z"
          fill="#EB3D34"
        />
      </svg>
    </div>
  );
};

export default ClearIcon;
