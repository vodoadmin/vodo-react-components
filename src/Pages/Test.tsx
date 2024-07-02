import React from "react";
import { Selector, SideBar } from "..";
import StatsIcon from "../Icons/statsSVG";
import TicketIcon from "../Icons/ticketSVG";
import PeopleIcon from "../Icons/peopleSVG";
import PaypalIcon from "../Icons/paypalSVG";
import LinkIcon from "../Icons/linkSVG";
import { ModuleProps } from "@/Components/Main-Components/sidebar";
const items = [
  { name: "English", value: "en" },
  { name: "Arabic", value: "ar" },
];
const submodules: ModuleProps[] = [
  {
    title: "test1",
    submodule: [
      {
        title: "sasa1",
        link: "sasa1",
      },
      {
        title: "sasa2",
        link: "sasa2",
      },
    ],
  },
  {
    title: "test2",
    submodule: [
      {
        title: "sasa3",
        link: "sasa3",
      },
      {
        title: "sasa4",
        link: "sasa4",
      },
    ],
  },
  {
    title: "test3",
    submodule: [
      {
        title: "sasa5",
        link: "sasa5",
      },
      {
        title: "sasa6",
        link: "sasa6",
      },
    ],
  },
  {
    title: "test4",
    submodule: [
      {
        title: "sasa7",
        link: "sasa8",
      },
      {
        title: "sasa8",
        link: "sasa8",
      },
    ],
  },
];
const modules = [
  { title: "test1", link: "test1", Svg: StatsIcon },
  { title: "test2", link: "test1", Svg: TicketIcon },
  { title: "test3", link: "test1", Svg: PeopleIcon },
  { title: "test4", link: "test1", Svg: PaypalIcon },
  { title: "test4", link: "test1", Svg: LinkIcon },
];
const Test: React.FC = () => {
  return (
    <div>
      <SideBar subModules={submodules} modules={modules} />
    </div>
  );
};

export default Test;
