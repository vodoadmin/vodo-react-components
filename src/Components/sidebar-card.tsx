import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SideCard {
  open: boolean;
  title: string;
  link: string;
  Svg: ReactNode;
}

const SideCard: React.FC<SideCard> = ({ open, Svg, title, link }) => {
  return (
    <Link
      to={link}
      className="flex justify-start w-full h-10 gap-4 px-5 py-8 rounded-none"
    >
      {Svg && Svg}
      {open && <span className="text-[#2B2F3880]">{title}</span>}
    </Link>
  );
};

export default SideCard;
