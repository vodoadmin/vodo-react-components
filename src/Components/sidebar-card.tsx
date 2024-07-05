import { cn } from "../Utils/utils";
import React, { ReactNode } from "react";

interface SideCard {
  open: boolean;
  title: string;
  moduleStyles?: string;
  link: string;
  Svg: ReactNode;
}

const SideCard: React.FC<SideCard> = ({
  open,
  Svg,
  title,
  link,
  moduleStyles,
}) => {
  return (
    <a
      href={link}
      className={cn(
        "flex justify-start w-full h-10 gap-4 px-5 py-8 rounded-none",
        moduleStyles ?? ""
      )}
    >
      {Svg && Svg}
      {open && <span className="text-[#2B2F3880]">{title}</span>}
    </a>
  );
};

export default SideCard;
