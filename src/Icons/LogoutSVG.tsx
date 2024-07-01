import React from "react";
import { cn } from "../Utils/utils";

interface LogOut {
  className?: string;
}
const LogoutIcon: React.FC<LogOut> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.491 19.2715C17.0994 23.8187 14.7626 25.6755 9.64693 25.6755H9.48273C3.83652 25.6755 1.57551 23.4145 1.57551 17.7683V9.53268C1.57551 3.88648 3.83652 1.62547 9.48273 1.62547H9.64693C14.7247 1.62547 17.0615 3.45701 17.4783 7.9285"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.78594 13.6631L24.1604 13.6631"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.3439 17.8947L25.5754 13.6632L21.3439 9.43172"
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

export default LogoutIcon;
