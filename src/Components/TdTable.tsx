import React, { ReactNode } from "react";
import "../index.css";

export default function TdTable({ children }: { children: ReactNode }) {
  return (
    <td className="py-1 text-sm bg-white border-b border-gray-200 text-pColor poppins-regular">
      <div className={`custom_hight flex justify-center items-center flex-col`}>
        {children}
      </div>
    </td>
  );
}
