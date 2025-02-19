import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import SideCard from "../sidebar-card";
import SideModuleCard from "../sub-module-card";

import { cn } from "../../Utils/utils";
import { Button } from "./button";
import ArrowMenuIcon from "../../Icons/arrow-menuSVG";
import BurgerIcon from "../../Icons/burgerSVG";

export interface classNameProp {
  subModule?: string;
  module?: string;
}

export interface ModuleProps {
  title: string;
  link: string;
  Svg?: ReactNode;
  dataLink?: string;
}
export interface SubModuleProps {
  title: string;
  submoduleArr: ModuleProps[];
  Svg?: ReactNode;
  dataTesting?: string;
}
interface SideBarprops {
  subModules?: SubModuleProps[];
  modules?: ModuleProps[];
  className?: classNameProp;
  sideBarStyle?: string;
  ModuleName?: string;
  name: string;
  image: string;
  admin: string;
  ModuleIcon?: any;
  OpenState?: any;
}
const SideBar = ({
  subModules,
  modules,
  className, //// To add style to subModules & modules
  sideBarStyle, //// To add style to the whole sidebar
  OpenState,
  name,
  image,
  admin,
}: SideBarprops) => {
  const [open, setOpen] = useState(true);
  const handleSideBar = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (OpenState) {
      OpenState(open);
    }
  }, [open]);
  return (
    <aside
      className={cn(
        `vodo-rc-aside  ${open ? "!w-[230px]" : "w-14 !p-1"} relative`,
        sideBarStyle ?? ""
      )}
    >
      <div className="absolute top-0 ltr:right-0 rtl:left-0 w-fit">
        <Button className="w-14 p-2.5 rounded-none" onClick={() => handleSideBar()}>
          {open ? (
            <ArrowMenuIcon className="transform size-5 rtl:rotate-180" />
          ) : (
            <BurgerIcon className=" size-5" />
          )}
        </Button>
      </div>
      <div className="h-14"></div>

      {open ? (
        <div className="w-[190px] h-[120px] bg-[#413E54] rounded-3xl border-t-[23px] border-destructive relative flex flex-col items-center justify-end my-5">
          <>
            <img
              src={image}
              alt={name}
              className="size-[68px] rounded-full object-cover absolute -top-10 shadow-[0_-6px_6px_-1px_#0000001a]"
            />
            <div className="mb-4 text-center">
              <h1 className="text-white capitalize">{name}</h1>
              <span className="text-[#CDA6FF] capitalize h-[23px] block">
                {admin && admin}
              </span>
            </div>
          </>
        </div>
      ) : (
        <img
          src={image}
          alt={name}
          className="size-12 mb-[15px] rounded-full object-cover -top-10 shadow-[0_-6px_6px_-1px_#0000001a]"
        />
      )}

      <ul className="*:!my-3 w-full">
        {subModules?.length &&
          subModules.map((module: SubModuleProps, i) => (
            <SideModuleCard
              sideOpen={open}
              setSideOpen={setOpen}
              key={i}
              title={module.title}
              submoduleArr={module.submoduleArr}
              svg={module.Svg}
              subModuleStyles={className?.subModule}
              dataTesting={module.dataTesting}
            />
          ))}
      </ul>
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
              dataLink={module.dataLink}
            />
          ))}
      </div>
    </aside>
  );
};
export default SideBar;
