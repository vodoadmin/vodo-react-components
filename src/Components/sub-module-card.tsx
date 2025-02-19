import { ReactNode, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import React from "react";
import { ModuleProps } from "./Main-Components/sidebar";

import { cn } from "../Utils/utils";
import { Link, useLocation } from "react-router-dom";
import ArrowIcon from "../Icons/arrowIcon";

interface subModuleCardProps {
  title: string;
  subModuleStyles?: string;
  submoduleArr: ModuleProps[];
  svg: ReactNode;
  sideOpen: boolean;
  setSideOpen: any;
  dataTesting?: string;
}

const SideModuleCard: React.FC<subModuleCardProps> = ({
  title,
  submoduleArr,
  subModuleStyles,
  svg,
  sideOpen,
  setSideOpen,
  dataTesting,
}) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  const isActive = (basePath: string): boolean => activeLink.includes(basePath);
  useEffect(() => {
    if (open) {
      setSideOpen(true);
    }
  }, [open]);
  return (
    <Accordion type={"single"} collapsible className="vodo-rc-submodule ">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <li
            className="flex items-center justify-start w-full"
            onClick={() => setOpen(!open)}
            data-testing={dataTesting}
          >
            <div
              className={cn(
                `${svg ? "gap-3" : "gap-2"} ${
                  sideOpen ? "" : "!justify-center"
                } w-full justify-end  *:*:*:hover:stroke-destructive flex-row`,
                subModuleStyles ?? ""
              )}
              data-testing={dataTesting}
            >
              {svg ?? svg}
              {sideOpen && (
                <>
                  <span
                    className={`capitalize font-bold ${open ? "text-inherit" : ""}`}
                  >
                    {title}
                  </span>
                  <div
                    className={`rtl:rotate-180 transition-all ml-auto ${
                      open ? "!rotate-0 " : "!-rotate-90"
                    }`}
                  >
                    <ArrowIcon stroke={open ? "#E4412D" : "black"} />
                  </div>
                </>
              )}
            </div>
          </li>
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {submoduleArr?.map((sub, i) => (
              <li key={i} data-testing={sub.dataLink}>
                <Link
                  className={`capitalize text-[#413E54]  w-full block ${
                    isActive(sub.link) ? "active-sub" : ""
                  }`}
                  to={sub.link}
                  data-testing={sub.dataLink}
                >
                  {sideOpen && <>{sub.title}</>}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SideModuleCard;
