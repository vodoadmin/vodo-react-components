import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import React from "react";
import { ModuleProps } from "./Main-Components/sidebar";
import ArrowRightIcon from "../Icons/arrowRightIcon";

const SideModuleCard: React.FC<ModuleProps> = ({ title, submodule }) => {
  const [open, setOpen] = useState(false);
  console.log(submodule);

  return (
    <Accordion type={"single"} collapsible className="w-full">
      <AccordionItem value="item-1" className="w-full border-none">
        <AccordionTrigger className="w-full p-0 hover:no-underline">
          <li onClick={() => setOpen(!open)}>
            <div className="flex items-center gap-2 hover:text-destructive *:*:*:hover:stroke-destructive ">
              <div className={`${open ? "rotate-90 " : ""}`}>
                <ArrowRightIcon stroke={open ? "#E4412D" : ""} />
              </div>

              <span className={`transition-all ${open ? "text-destructive" : ""}`}>
                {title}
              </span>
            </div>
          </li>
        </AccordionTrigger>
        <AccordionContent className="p-0 pl-11">
          <ul className="*:my-3 *:cursor-pointer *:text-black ">
            {submodule?.map((sub, i) => (
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
