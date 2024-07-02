import React, { ReactNode } from "react";
// import { useTranslation } from "react-i18next";

export default function ThTable({ children }: { children: ReactNode }) {
  // const { t, i18n } = useTranslation();

  return (
    <th className="px-3 py-2 text-sm font-bold tracking-wider text-center bg-mainBack_light text-hColor poppins-medium">
      {children}
    </th>
  );
}
