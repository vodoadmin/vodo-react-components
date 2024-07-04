import { Button } from "./Main-Components/button";
import React from "react";
import { ModuleProps } from "./Main-Components/sidebar";

interface SideCard {
  open: boolean;
  title: string;
  link: string;
  Svg: React.ElementType;
}

const SideCard: React.FC<ModuleProps> = ({ open, Svg, title, link }) => {
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
