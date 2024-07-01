import { useState } from "react";
import ArrowLeftIcon from "../Icons/arrow-leftSVG";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import React from "react";

interface SideModuleProps {
  title: string;
}

const SideModuleCard: React.FC<SideModuleProps> = ({ title }) => {
  const [open, setOpen] = useState(false);

  return (
    <Accordion type={"single"} collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none w-full">
        <AccordionTrigger className="hover:no-underline w-full p-0">
          <li onClick={() => setOpen(!open)}>
            <div className="flex items-center gap-2 hover:text-destructive *:*:*:hover:stroke-destructive ">
              <ArrowLeftIcon
                className={`${open ? "rotate-90 *:*:stroke-destructive" : ""}`}
              />
              <span
                className={`transition-all ${open ? "text-destructive" : ""}`}
              >
                {title}
              </span>
            </div>
          </li>
        </AccordionTrigger>
        <AccordionContent className="p-0 pl-11">
          <ul className="*:my-3 *:cursor-pointer *:text-black ">
            <li className="hover:text-destructive">test1</li>
            <li className="hover:text-destructive">test2</li>
            <li className="hover:text-destructive">test3</li>
            <li className="hover:text-destructive">test4</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SideModuleCard;
