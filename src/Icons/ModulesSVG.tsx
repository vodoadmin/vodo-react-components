import { cn } from "../Utils/utils";
import React from "react";

interface Modules {
  className?: string;
}
const ModulesIcon: React.FC<Modules> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="26"
        height="29"
        viewBox="0 0 26 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.31 9.20942C23.3479 9.20942 24.9999 7.55736 24.9999 5.51945C24.9999 3.48153 23.3479 1.82947 21.31 1.82947C19.2719 1.82947 17.62 3.48153 17.62 5.51945C17.62 7.55736 19.2719 9.20942 21.31 9.20942Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.68999 9.20942C6.72791 9.20942 8.37995 7.55736 8.37995 5.51945C8.37995 3.48153 6.72791 1.82947 4.68999 1.82947C2.65207 1.82947 1 3.48153 1 5.51945C1 7.55736 2.65207 9.20942 4.68999 9.20942Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.31 27.6589C23.3479 27.6589 24.9999 26.007 24.9999 23.969C24.9999 21.9311 23.3479 20.279 21.31 20.279C19.2719 20.279 17.62 21.9311 17.62 23.969C17.62 26.007 19.2719 27.6589 21.31 27.6589Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.68999 27.6589C6.72791 27.6589 8.37995 26.007 8.37995 23.969C8.37995 21.9311 6.72791 20.279 4.68999 20.279C2.65207 20.279 1 21.9311 1 23.969C1 26.007 2.65207 27.6589 4.68999 27.6589Z"
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

export default ModulesIcon;
