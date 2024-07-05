import React, { ReactNode } from "react";
import "../index.css";
import { cn } from "../Utils/utils";

export default function TdTable({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "py-1 text-sm bg-white border-b border-gray-200 text-pColor vodo-rc-poppins-regular text-center",
        className
      )}
    >
      <div
        className={`vodo-rc-custom_hight flex justify-center items-center flex-col`}
      >
        {children}
      </div>
    </td>
  );
}
