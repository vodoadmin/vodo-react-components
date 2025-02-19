import React, { ReactNode, useEffect, useState } from "react";
import DeleteIcon from "../Icons/deleteSVG";
import MainTabel, { mainTabelProps } from "../Components/Main-Components/MainTabel";
import { Switcher } from "../Components/Main-Components/switcher";
import PaginationComponent from "../Components/Main-Components/PaginationComponent";
import { SearchInput } from "../Components/Main-Components/search-input";
import { Selector } from "../Components/Main-Components/selector";
import InputFile from "../Components/Main-Components/input-file";
// import SubmissionProgress from "../Components/Main-Components/submissionProgress";
import UserInput from "../Components/Main-Components/user-input";
import { Button } from "../Components/Main-Components/button";
import SideBar, {
  ModuleProps,
  SubModuleProps,
} from "../Components/Main-Components/sidebar";
import Login from "../Components/Main-Components/Login";
import { NavigationTrail } from "../Components/Main-Components/navigation-trail";
import { log } from "console";
import DropDownSelect from "../Components/Main-Components/DropDownSelect";
import Loader from "../Components/Main-Components/Loader";
import EyeSlashIcon from "../Icons/eyeslash";
import EyePasswordIcon from "../Icons/eyepasswordSVG";
import EditIcon from "../Icons/editIcon";
import { useLocation } from "react-router-dom";

// import ArrowRightIcon from "../Icons/arrow-rightSVG";

const subModules: SubModuleProps[] = [
  {
    title: "SubModule 1",
    submoduleArr: [
      { title: "SubItem 1", link: "/subitem1", dataLink: "sub1" },
      { title: "SubItem 2", link: "/subitem2", dataLink: "sub2" },
    ],
    Svg: <DeleteIcon height={20} />,
    dataTesting: "subModule1",
  },
  {
    title: "SubModule 2",
    submoduleArr: [
      { title: "SubItem 3", link: "/subitem3", dataLink: "sub3" },
      { title: "SubItem 4", link: "/subitem4", dataLink: "sub4" },
    ],
    Svg: <EditIcon />,
    dataTesting: "subModule2",
  },
];

const modules: ModuleProps[] = [
  { title: "Module 1", link: "/module1", Svg: <EyeSlashIcon />, dataLink: "module1" },
  {
    title: "Module 2",
    link: "/module2",
    Svg: <EyePasswordIcon />,
    dataLink: "module1",
  },
];

// const TabelHead = [
//   { accessorKey: "id", header: "ID" },
//   { accessorKey: "name", header: "Name" },
//   { accessorKey: "age", header: "Age" },
//   { accessorKey: "email", header: "Email" },
//   { accessorKey: "image", header: "Profile Picture" },
// ];

// const TabelData = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 28,
//     email: "john.doe@example.com",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     age: 34,
//     email: "jane.smith@example.com",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     age: 45,
//     email: "alice.johnson@example.com",
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     age: 52,
//     email: "bob.brown@example.com",
//     image: "https://via.placeholder.com/50",
//   },
// ];

// const tableStyling: mainTabelProps["tableStyling"] = {
//   headStyle: "bg-green-300  w-1/2",
//   headElementStyle: "bg-red-200 p-4 ",
//   bodyStyle: "bg-green-200",
//   bodyElementStyle: "bg-yellow-400",
// }

const items = [
  { name: "test", value: "1" },
  { name: "example", value: "2" },
  { name: "sample", value: "3" },
  { name: "demo", value: "4" },
  { name: "placeholder", value: "5" },
  { name: "mock", value: "6" },
  { name: "template", value: "7" },
  { name: "prototype", value: "8" },
  { name: "trial", value: "9" },
  { name: "specimen", value: "10" },
];
const Test: React.FC = () => {
  // const location = useLocation();
  return (
    <div className="flex items-center h-full bg-white">
      <div className="max-w-[400px] mx-auto w-full">
        {/* <SideBar subModules={subModules} modules={modules} image="" admin="" name="" /> */}
        <DropDownSelect
          onSearchInputChange={() => {}}
          options={items}
          labelKey="name"
          handleChange={() => {}}
          valueKey="id"
          showOptions
        />
      </div>
    </div>
  );
};

export default Test;
