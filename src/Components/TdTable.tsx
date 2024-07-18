import React, { ReactNode } from "react";

import { cn } from "../Utils/utils";

export default function TdTable({
  children,
  className,
}: {
  children: ReactNode;
  className?: {
    general?: string;
    text?: string;
  };
}) {
  return (
    <td
      className={cn(
        "py-1 px-3 text-sm bg-white border-b border-gray-200 text-pColor vodo-rc-poppins-regular text-center min-h-[69px]",
        className?.general
      )}
    >
      <div
        className={cn(
          `flex justify-center items-center flex-col`,
          className?.text
        )}
      >
        {children}
      </div>
    </td>
  );
}
