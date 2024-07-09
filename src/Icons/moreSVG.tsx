import { iconsProps } from "@/Utils/icons.types";
import React from "react";
const MoreIcon = ({
  width = 24,
  height = 24,
  stroke = "#2B2F38",
}: iconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="more-horizontal"
      stroke={stroke}
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  );
};

export default MoreIcon;
