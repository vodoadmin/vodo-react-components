import { cn } from "../Utils/utils";
import React, { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
interface SideCard {
  open: boolean;
  title: string;
  moduleStyles?: string;
  link: string;
  Svg: ReactNode;
  dataLink?: string;
}

const SideCard: React.FC<SideCard> = ({
  Svg,
  title,
  link,
  moduleStyles,
  open,
  dataLink,
}) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  const isActive = (basePath: string): boolean => activeLink.includes(basePath);
  return (
    <Link
      to={link}
      className={cn(
        `${open ? "" : "!justify-center"} ${isActive(link) ? "active-card" : ""}`,
        moduleStyles ?? ""
      )}
      data-testing={dataLink}
    >
      {Svg && Svg}
      {open && <span>{title}</span>}
    </Link>
  );
};

export default SideCard;
