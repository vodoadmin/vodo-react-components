import React from "react";
import { Button } from "./button";
import ModulesIcon from "../../Icons/ModulesSVG";
import BurgerIcon from "../../Icons/burgerSVG";
import { useState } from "react";
import ArrowMenuIcon from "../../Icons/arrow-menuSVG";
import LogoIcon from "../../Icons/logoSVG";
import SideCard from "../sidebar-card";
import StatsIcon from "../../Icons/statsSVG";
import TicketIcon from "../../Icons/ticketSVG";
import PeopleIcon from "../../Icons/peopleSVG";
import PaypalIcon from "../../Icons/paypalSVG";
import LinkIcon from "../../Icons/linkSVG";
import SideModuleCard from "../sub-module-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";
const SideBar = () => {
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
        <Button
          className=" rounded-none w-16 py-8"
          onClick={() => handleSideBar()}
        >
          {open ? (
            <ArrowMenuIcon className="*:*:!stroke-white " />
          ) : (
            <BurgerIcon className="*:*:!stroke-white " />
          )}
        </Button>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-none w-full">
          <AccordionTrigger
            onClick={(e: any) => e.currentTarget.classList.toggle("active")}
            className="hover:no-underline w-full p-0 rounded-none  py-6 !flex !justify-start px-5 gap-4 icon-trigger after:rounded-none"
          >
            <ModulesIcon className="*:*:stroke-black/50" />
            {open && <span className=" text-black/50">Modules</span>}
          </AccordionTrigger>
          <AccordionContent className="p-0 pl-11">
            {open && (
              <ul className="*:my-3">
                <SideModuleCard title="sub module1" />
                <SideModuleCard title="sub module2" />
                <SideModuleCard title="sub module3" />
                <SideModuleCard title="sub module4" />
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <SideCard Svg={LinkIcon} title="Supply chain" open={open} />
      <SideCard Svg={PaypalIcon} title="Supply chain" open={open} />
      <SideCard Svg={PeopleIcon} title="Supply chain" open={open} />
      <SideCard Svg={TicketIcon} title="Supply chain" open={open} />
      <SideCard Svg={StatsIcon} title="Supply chain" open={open} />
    </aside>
  );
};
export default SideBar;
