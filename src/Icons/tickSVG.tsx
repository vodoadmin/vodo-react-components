import { cn } from "../Utils/utils";
import React from "react";

interface Tick {
  className?: string;
}
const TickIcon: React.FC<Tick> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3603_908)">
          <path
            d="M10 19.5C12.3869 19.5 14.6761 18.5518 16.364 16.864C18.0518 15.1761 19 12.8869 19 10.5C19 8.11305 18.0518 5.82387 16.364 4.13604C14.6761 2.44821 12.3869 1.5 10 1.5C7.61305 1.5 5.32387 2.44821 3.63604 4.13604C1.94821 5.82387 1 8.11305 1 10.5C1 12.8869 1.94821 15.1761 3.63604 16.864C5.32387 18.5518 7.61305 19.5 10 19.5ZM13.9727 8.84766L9.47266 13.3477C9.14219 13.6781 8.60781 13.6781 8.28086 13.3477L6.03086 11.0977C5.70039 10.7672 5.70039 10.2328 6.03086 9.90586C6.36133 9.57891 6.8957 9.57539 7.22266 9.90586L8.875 11.5582L12.7773 7.65234C13.1078 7.32188 13.6422 7.32188 13.9691 7.65234C14.2961 7.98281 14.2996 8.51719 13.9691 8.84414L13.9727 8.84766Z"
            fill="#60B04C"
          />
        </g>
        <defs>
          <clipPath id="clip0_3603_908">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(1 1.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default TickIcon;
