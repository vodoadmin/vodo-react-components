import { cn } from "../Utils/utils";
import React, { ReactNode } from "react";
// import { useTranslation } from "react-i18next";

export default function ThTable({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  // const { t, i18n } = useTranslation();

  return (
    <th
      className={cn(
        "px-3 py-2 text-sm font-bold tracking-wider text-center bg-mainBack_light text-hColor vodo-rc-poppins-medium text-nowrap",
        className
      )}
    >
      {children}
    </th>
  );
}
