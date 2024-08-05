import React from "react";
import ArrowRightIcon from "./arrowRightIcon";
const ArrowLeftIcon = ({ stroke = "#2B2F38", width = 12, height = 20 }) => {
  return (
    <div className="rotate-180">
      <ArrowRightIcon width={width} height={height} stroke={stroke} />
    </div>
  );
};

export default ArrowLeftIcon;
