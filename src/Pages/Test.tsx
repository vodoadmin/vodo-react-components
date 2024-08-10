import React, { ReactNode, useState } from "react";
import DeleteIcon from "../Icons/deleteSVG";
import MainTabel, {
  mainTabelProps,
} from "../Components/Main-Components/MainTabel";
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

const Test: React.FC = () => {
  const [file, setFile] = useState<any>("");
  console.log(file);
  return <InputFile onChangeFn={(val) => setFile(val)} />;
};

export default Test;
