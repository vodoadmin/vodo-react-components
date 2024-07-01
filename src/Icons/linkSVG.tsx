import { cn } from "@/lib/utils";
import React from "react";

interface Link {
  className?: string;
}
const LinkIcon: React.FC<Link> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="27"
        height="24"
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.03071 11.8795C2.08271 10.7395 1.50671 9.2755 1.50671 7.6795C1.50671 4.0555 4.47071 1.0795 8.10671 1.0795H14.1067C17.7307 1.0795 20.7067 4.0555 20.7067 7.6795C20.7067 11.3035 17.7427 14.2795 14.1067 14.2795H11.1067"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4828 22.6795H12.9068C9.28276 22.6795 6.30676 19.7035 6.30676 16.0795C6.30676 12.4555 9.27076 9.47949 12.9068 9.47949H15.9068"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.9827 11.8795C24.9307 13.0195 25.5067 14.4835 25.5067 16.0795C25.5067 19.7035 22.5427 22.6795 18.9067 22.6795"
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

export default LinkIcon;
