import { ReactNode, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import React from "react";
import { ModuleProps, SubModuleProps } from "./Main-Components/sidebar";
import ArrowRightIcon from "../Icons/arrowRightIcon";
import { cn } from "../Utils/utils";

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
  console.log(submoduleArr);

  return (
    <Accordion type={"single"} collapsible className="w-full">
      <AccordionItem value="item-1" className="w-full border-none">
        <AccordionTrigger className="w-full p-0 hover:no-underline">
          <li onClick={() => setOpen(!open)}>
            <div
              className={cn(
                `flex items-center ${
                  svg ? "gap-3" : "gap-2"
                } hover:text-destructive *:*:*:hover:stroke-destructive ${
                  svg ? "flex-row-reverse" : "flex-row"
                } text-destructive`,
                subModuleStyles ?? ""
              )}
            >
              <div className={`${open ? "rotate-90 " : ""}`}>
                <ArrowRightIcon stroke={open ? "#E4412D" : ""} />
              </div>

              <span className={`transition-all ${open ? "text-inherit" : ""}`}>
                {title}
              </span>

              {svg ?? svg}
            </div>
          </li>
        </AccordionTrigger>
        <AccordionContent className="p-0 pl-11">
          <ul className="*:my-3 *:cursor-pointer *:text-black ">
            {submoduleArr?.map((sub, i) => (
              <li key={i}>
                <a href={sub.link}>{sub.title}</a>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SideModuleCard;
