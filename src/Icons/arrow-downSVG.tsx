import { iconsProps } from "../Utils/icons.types";
import React from "react";

const ArrowDownIcon = ({
  stroke = "#2B2F38",
  width = 14,
  height = 8,
  className,
}: iconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 14 8`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? ""}
    >
      <path
        d="M1.00914 2.38904L1.14973 2.24845L1.00914 2.38904L5.52254 6.90243C5.92821 7.30811 6.46421 7.51481 6.99999 7.51481C7.53577 7.51481 8.07177 7.30811 8.47744 6.90243L12.9909 2.38904C13.2697 2.11019 13.2697 1.65128 12.9909 1.37242C12.712 1.09357 12.2531 1.09357 11.9742 1.37242L7.46082 5.88581C7.20665 6.13999 6.79333 6.13999 6.53916 5.88581L2.02576 1.37242C1.74691 1.09357 1.288 1.09357 1.00914 1.37242C0.730286 1.65128 0.730286 2.11019 1.00914 2.38904Z"
        fill={stroke}
        stroke={stroke}
        strokeWidth="0.4"
      />
    </svg>
  );
};

export default ArrowDownIcon;
