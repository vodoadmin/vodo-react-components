import { Button } from "./Main-Components/button";
import React, { ReactNode } from "react";
import { ModuleProps } from "./Main-Components/sidebar";

interface SideCard {
  open: boolean;
  title: string;
  link: string | undefined;
  linkElement: 
  Svg: ReactNode | undefined;
}

const SideCard: React.FC<SideCard> = ({ open, Svg, title, link ,linkElement}) => {
  const el=linkElement
  return (
    <a
      href={link}
      className="flex justify-start w-full h-10 gap-4 px-5 py-8 rounded-none"
    >
      {Svg && Svg}
      {open && <span className="text-[#2B2F3880]">{title}</span>}
    </a>
  );
};

export default SideCard;
