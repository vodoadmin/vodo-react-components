import React, { ReactElement } from "react";
import { Button } from "./button";
import ModulesIcon from "../../Icons/ModulesSVG";
import BurgerIcon from "../../Icons/burgerSVG";
import { useState } from "react";
import ArrowMenuIcon from "../../Icons/arrow-menuSVG";
import LogoIcon from "../../Icons/logoSVG";
import SideCard from "../sidebar-card";
import SideModuleCard from "../sub-module-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
export interface ModuleProps {
  title: string;
  link?: string;
  open?: boolean;
  Svg?: React.ElementType;
  submodule?: ModuleProps[];
}
interface SideBarprops {
  subModules: ModuleProps[];
  modules: ModuleProps[];
}
const SideBar = ({ subModules, modules }: SideBarprops) => {
  const [open, setOpen] = useState(false);
  const handleSideBar = () => {
    setOpen(!open);
  };
  return (
    <aside
      className={`bg-white z-50 items-end w-16 h-screen fixed left-0 top-0 transition-all flex flex-col  ${
        open ? "w-[280px]" : ""
      }`}
    >
      <div className="flex w-full items-center justify-end gap-[70px]">
        {open && <LogoIcon />}
        <Button className="w-16 py-8 rounded-none " onClick={() => handleSideBar()}>
          {open ? <ArrowMenuIcon stroke="white" /> : <BurgerIcon stroke="white" />}
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="w-full border-none">
          <AccordionTrigger
            onClick={(e: any) => e.currentTarget.classList.toggle("active")}
            className="hover:no-underline w-full p-0 rounded-none  py-6 !flex !justify-start px-5 gap-4 icon-trigger after:rounded-none"
          >
            <ModulesIcon stroke="rgb(0 0 0 / 0.5)" />
            {open && <span className=" text-black/50">Modules</span>}
          </AccordionTrigger>
          <AccordionContent className="p-0 pl-11">
            {open && (
              <ul className="*:my-3">
                {subModules.map((module: ModuleProps, i) => (
                  <SideModuleCard
                    key={i}
                    title={module.title}
                    submodule={module.submodule}
                  />
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="w-full">
        {modules.map((module: ModuleProps, i) => (
          <SideCard
            key={i}
            title={module.title}
            link={module.link}
            Svg={module.Svg}
            open={open}
          />
        ))}
      </div>
    </aside>
  );
};
export default SideBar;
