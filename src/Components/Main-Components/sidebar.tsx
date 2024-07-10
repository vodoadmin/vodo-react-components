import React, { ReactNode } from "react";
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
import { cn } from "../../Utils/utils";

export interface classNameProp {
  subModule?: string;
  module?: string;
}

export interface ModuleProps {
  title: string;
  link: string;
  Svg?: ReactNode;
}
export interface SubModuleProps {
  title: string;
  submoduleArr: ModuleProps[];
  Svg?: ReactNode;
}
interface SideBarprops {
  subModules?: SubModuleProps[];
  modules?: ModuleProps[];
  className?: classNameProp;
  sideBarStyle?: string;
}
const SideBar = ({
  subModules,
  modules,
  className, //// To add style to subModules & modules
  sideBarStyle, //// To add style to the whole sidebar
}: SideBarprops) => {
  const [open, setOpen] = useState(false);
  const handleSideBar = () => {
    setOpen(!open);
  };
  return (
    <aside
      className={cn(
        `bg-white z-50 items-end w-16 h-screen  transition-all flex flex-col vodo-rc-aside  ${
          open ? "w-[280px]" : ""
        }`,
        sideBarStyle ?? ""
      )}
    >
      <div className="flex w-full items-center justify-end gap-[70px]">
        {open && <LogoIcon />}
        <Button className="w-16 py-8 rounded-none " onClick={() => handleSideBar()}>
          {open ? <ArrowMenuIcon stroke="white" /> : <BurgerIcon />}
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="w-full border-none">
          <AccordionTrigger
            onClick={(e: any) =>
              e.currentTarget.classList.toggle("vodo-rc-sidebar-acitve")
            }
            className="hover:no-underline w-full p-0 rounded-none  py-6 !flex !justify-start px-5 gap-4 vodo-rc-icon-trigger after:rounded-none"
          >
            <ModulesIcon />
            {open && <span className=" text-black/50">Modules</span>}
          </AccordionTrigger>
          <AccordionContent className="p-0 pl-11">
            {open && (
              <ul className="*:my-3">
                {subModules &&
                  subModules.map((module: SubModuleProps, i) => (
                    <SideModuleCard
                      key={i}
                      title={module.title}
                      submoduleArr={module.submoduleArr}
                      svg={module.Svg}
                      subModuleStyles={className?.subModule}
                    />
                  ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col w-full gap-1">
        {modules &&
          modules.map((module: ModuleProps, i) => (
            <SideCard
              key={i}
              title={module.title}
              link={module.link}
              Svg={module.Svg}
              open={open}
              moduleStyles={className?.module}
            />
          ))}
      </div>
    </aside>
  );
};
export default SideBar;
