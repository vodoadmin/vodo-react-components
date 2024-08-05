import { cn } from "../Utils/utils";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
interface SideCard {
  open: boolean;
  title: string;
  moduleStyles?: string;
  link: string;
  Svg: ReactNode;
}

const SideCard: React.FC<SideCard> = ({ open, Svg, title, link, moduleStyles }) => {
  return (
    <Link to={link} className={cn("", moduleStyles ?? "")}>
      {Svg && Svg}
      {open && <span>{title}</span>}
    </Link>
  );
};

export default SideCard;
