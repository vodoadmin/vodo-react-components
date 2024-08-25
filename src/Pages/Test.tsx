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
import SideBar from "../Components/Main-Components/sidebar";
import Login from "../Components/Main-Components/Login";
import { NavigationTrail } from "../Components/Main-Components/navigation-trail";
import { log } from "console";
import DropDownSelect from "../Components/Main-Components/DropDownSelect";
import Loader from "../Components/Main-Components/Loader";

// import ArrowRightIcon from "../Icons/arrow-rightSVG";

// const subModules: SubModuleProps[] = [
//   {
//     title: "SubModule 1",
//     submoduleArr: [
//       { title: "SubItem 1", link: "/subitem1" },
//       { title: "SubItem 2", link: "/subitem2" },
//     ],
//     Svg: <DeleteIcon height={20} />,
//   },
//   {
//     title: "SubModule 2",
//     submoduleArr: [
//       { title: "SubItem 3", link: "/subitem3" },
//       { title: "SubItem 4", link: "/subitem4" },
//     ],
//     Svg: <EditIcon />,
//   },
// ];

// const modules: ModuleProps[] = [
//   { title: "Module 1", link: "/module1", Svg: <EyeICon /> },
//   { title: "Module 2", link: "/module2", Svg: <TrashCanIcon /> },
// ];

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
// };
const arr = ["a", "b", "c", "d"];
const items = [
  { label: "a", value: "0" },
  { label: "v", value: "1" },
  { label: "c", value: "2" },
  { label: "d", value: "3" },
];
const items2 = [
  { name: "ass", value: "0" },
  { name: "var", value: "1" },
  { name: "car", value: "2" },
  { name: null, value: "3", leyone: "one", id: "3" },
];
const OnSearch = (e: any) => {
  console.log(e);
};
const onChange = (e: any) => {
  console.log(e);
};
const Test: React.FC = () => {
  return (
    <div className="h-full bg-white ">
      <div className="w-[800px] mx-auto mt-96">
        <DropDownSelect
          options={items2}
          handleChange={(e: any) => console.log(e)}
          onSearchInputChange={(e: string) => console.log(e)}
          labelKey="name"
          valueKey="value"
          isMultiple
          className="h-[40px] disabled:!bg-red-500"
        />
      </div>
    </div>
  );
};

export default Test;
