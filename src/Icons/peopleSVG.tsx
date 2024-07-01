import { cn } from "../Utils/utils";
import React from "react";

interface People {
  className?: string;
}
const PeopleIcon: React.FC<People> = ({ className }) => {
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
          opacity="0.4"
          d="M20.6315 7.79117C20.5594 7.77915 20.4752 7.77915 20.4031 7.79117C18.7442 7.73107 17.4219 6.37269 17.4219 4.68975C17.4219 2.97074 18.8043 1.58832 20.5233 1.58832C22.2423 1.58832 23.6247 2.98276 23.6247 4.68975C23.6127 6.37269 22.2904 7.73107 20.6315 7.79117Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M19.3928 16.5428C21.0396 16.8192 22.8548 16.5307 24.129 15.6772C25.824 14.5473 25.824 12.696 24.129 11.566C22.8428 10.7125 21.0036 10.424 19.3567 10.7125"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M6.16829 7.79117C6.24041 7.77915 6.32456 7.77915 6.39669 7.79117C8.05559 7.73107 9.3779 6.37269 9.3779 4.68975C9.3779 2.97074 7.99548 1.58832 6.27648 1.58832C4.55747 1.58832 3.17505 2.98276 3.17505 4.68975C3.18707 6.37269 4.50938 7.73107 6.16829 7.79117Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          opacity="0.4"
          d="M7.40766 16.5428C5.76078 16.8192 3.9456 16.5307 2.67137 15.6772C0.976405 14.5473 0.976405 12.696 2.67137 11.566C3.95762 10.7125 5.79684 10.424 7.44372 10.7125"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4213 16.7711C13.3492 16.7591 13.265 16.7591 13.1929 16.7711C11.534 16.711 10.2117 15.3527 10.2117 13.6697C10.2117 11.9507 11.5941 10.5683 13.3131 10.5683C15.0321 10.5683 16.4145 11.9627 16.4145 13.6697C16.4025 15.3527 15.0802 16.7231 13.4213 16.7711Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.92381 20.558C8.22885 21.6879 8.22885 23.5391 9.92381 24.669C11.8472 25.9553 14.9967 25.9553 16.9201 24.669C18.615 23.5391 18.615 21.6879 16.9201 20.558C15.0087 19.2837 11.8472 19.2837 9.92381 20.558Z"
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

export default PeopleIcon;
