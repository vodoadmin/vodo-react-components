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
        `vodo-rc-aside  ${open ? "!w-[280px]" : ""}`,
        sideBarStyle ?? ""
      )}
    >
      <div>
        <Button
          className="w-16 py-8 rounded-none "
          onClick={() => handleSideBar()}
        >
          {open ? <ArrowMenuIcon stroke="white" /> : <BurgerIcon />}
        </Button>
      </div>
      {subModules?.length ? (
        <Accordion
          className="vodo-rc-submodule-outer"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1" className="w-full border-none">
            <AccordionTrigger
              onClick={(e: any) =>
                e.currentTarget.classList.toggle("vodo-rc-sidebar-active")
              }
            >
              <ModulesIcon />
              {open && <span className="text-black/50">Modules</span>}
            </AccordionTrigger>

            <AccordionContent>
              {open && (
                <ul className="*:!my-3">
                  {subModules?.length &&
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
      ) : (
        ""
      )}

      <div className="vodo-rc-modules">
        {modules?.length &&
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
