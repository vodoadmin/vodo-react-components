import { ReactNode, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import React from "react";
import { ModuleProps } from "./Main-Components/sidebar";
import ArrowRightIcon from "../Icons/arrowRightIcon";
import { cn } from "../Utils/utils";
import { Link } from "react-router-dom";

interface subModuleCardProps {
  title: string;
  subModuleStyles?: string;
  submoduleArr: ModuleProps[];
  svg: ReactNode;
}

const SideModuleCard: React.FC<subModuleCardProps> = ({
  title,
  submoduleArr,
  subModuleStyles,
  svg,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Accordion type={"single"} collapsible className="vodo-rc-submodule ">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <li onClick={() => setOpen(!open)}>
            <div
              className={cn(
                `${
                  svg ? "gap-3" : "gap-2"
                } hover:text-destructive *:*:*:hover:stroke-destructive ${
                  svg ? "flex-row-reverse" : "flex-row"
                } text-destructive`,
                subModuleStyles ?? ""
              )}
            >
              <div className={`rtl:rotate-180 ${open ? "!rotate-90 " : ""}`}>
                <ArrowRightIcon stroke={open ? "#E4412D" : "black"} />
              </div>

              <span className={`${open ? "text-inherit" : ""}`}>{title}</span>

              {svg ?? svg}
            </div>
          </li>
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            {submoduleArr?.map((sub, i) => (
              <li key={i}>
                <Link to={sub.link}>{sub.title}</Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SideModuleCard;
