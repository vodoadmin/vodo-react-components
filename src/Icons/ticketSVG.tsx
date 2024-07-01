import { cn } from "../Utils/utils";
import React from "react";

interface Ticket {
  className?: string;
}
const TicketIcon: React.FC<Ticket> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <svg
        width="27"
        height="22"
        viewBox="0 0 27 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.2002 11.211C22.2002 9.55505 23.5442 8.21105 25.2002 8.21105V7.01105C25.2002 2.21105 24.0002 1.01105 19.2002 1.01105H7.2002C2.4002 1.01105 1.2002 2.21105 1.2002 7.01105V7.61105C2.8562 7.61105 4.2002 8.95505 4.2002 10.611C4.2002 12.267 2.8562 13.611 1.2002 13.611V14.211C1.2002 19.011 2.4002 20.211 7.2002 20.211H19.2002C24.0002 20.211 25.2002 19.011 25.2002 14.211C23.5442 14.211 22.2002 12.867 22.2002 11.211Z"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8003 1.01105V20.211"
          stroke="#2B2F38"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="18.38 18.38"
        />
      </svg>
    </div>
  );
};

export default TicketIcon;
