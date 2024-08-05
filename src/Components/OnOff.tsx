import React from "react";

export default function OnOff({ type }: { type: String }) {
  return type === "of" ? (
    <span className="flex flex-col items-center justify-center w-10 h-10 text-white rounded  bg-mainColor">
      {" "}
      Of
    </span>
  ) : (
    <span className="flex flex-col items-center justify-center w-10 h-10 text-white rounded  bg-customGreen">
      {" "}
      On
    </span>
  );
}
