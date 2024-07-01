import { cn } from "@/lib/utils";
import React from "react";

interface Calendar {
  className?: string;
}
const CalendarIcon: React.FC<Calendar> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="24"
        height="27"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 1.11511V4.71511"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.3999 1.11511V4.71511"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.3999 9.62305H1.99991"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.4 8.9151V19.1151C1.4 22.7151 3.2 25.1151 7.4 25.1151H17C21.2 25.1151 23 22.7151 23 19.1151V8.9151C23 5.3151 21.2 2.9151 17 2.9151H7.4C3.2 2.9151 1.4 5.3151 1.4 8.9151Z"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.76636 15.1551H7.75556"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.76636 18.7551H7.75556"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2053 15.1551H12.1945"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.2053 18.7551H12.1945"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6467 15.1551H16.636"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6467 18.7551H16.636"
          stroke="#2B2F38"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CalendarIcon;
