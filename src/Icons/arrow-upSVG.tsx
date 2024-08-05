import React from "react";

import ArrowDownIcon from "./arrow-downSVG";
import { iconsProps } from "@/Utils/icons.types";
const ArrowUpIcon = ({
  stroke = "#2B2F38",
  width = 12,
  height = 20,
}: iconsProps) => {
  return (
    <div className="rotate-180">
      <ArrowDownIcon width={width} height={height} stroke={stroke} />
    </div>
  );
};

export default ArrowUpIcon;
