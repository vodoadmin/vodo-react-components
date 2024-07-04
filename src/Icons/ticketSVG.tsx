import React from "react";

const TicketIcon = ({ width = 27, height = 23, stroke = "#2B2F38" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2002 12.0496C22.2002 10.3936 23.5442 9.04961 25.2002 9.04961V7.84961C25.2002 3.04961 24.0002 1.84961 19.2002 1.84961H7.2002C2.4002 1.84961 1.2002 3.04961 1.2002 7.84961V8.44961C2.8562 8.44961 4.2002 9.79361 4.2002 11.4496C4.2002 13.1056 2.8562 14.4496 1.2002 14.4496V15.0496C1.2002 19.8496 2.4002 21.0496 7.2002 21.0496H19.2002C24.0002 21.0496 25.2002 19.8496 25.2002 15.0496C23.5442 15.0496 22.2002 13.7056 22.2002 12.0496Z"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7998 1.84961V21.0496"
        stroke={stroke}
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="18.38 18.38"
      />
    </svg>
  );
};

export default TicketIcon;
