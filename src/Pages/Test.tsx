import React, { ReactNode, useState } from "react";

import SideBar, {
  ModuleProps,
  SubModuleProps,
} from "../Components/Main-Components/sidebar";

import DeleteIcon from "../Icons/deleteSVG";
import EditIcon from "../Icons/Icons_2/editIcon";
import TrashCanIcon from "../Icons/Icons_2/trashCanIcon";
import MainTabel, {
  mainTabelProps,
} from "../Components/Main-Components/MainTabel";
import EyeICon from "../Icons/Icons_2/eyeIcon";
import { Switcher } from "../Components/Main-Components/switcher";
import PaginationComponent from "../Components/Main-Components/PaginationComponent";
import { SearchInput } from "../Components/Main-Components/search-input";
import { Selector } from "../Components/Main-Components/selector";
import InputFile from "../Components/Main-Components/input-file";
// import SubmissionProgress from "../Components/Main-Components/submissionProgress";
import UserInput from "../Components/Main-Components/user-input";
import { Button } from "../Components/Main-Components/button";

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
  // const [file, setFile] = useState(null);
  // const [progress, setProgress] = useState(0);
  // const onsubmit = async (e: any) => {
  //   e.preventDefault();
  //   const formData = {
  //     name: e.currentTarget[0].value,
  //     password: e.currentTarget[1].value,
  //   };
  //   const config = {
  //     onUploadProgress: (progressEvent: any) => {
  //       const percentCompleted = Math.round(
  //         (progressEvent.loaded * 100) / progressEvent.total
  //       );
  //       setProgress(percentCompleted);
  //       console.log(`Upload progress: ${percentCompleted}%`);
  //       // You can update your UI with the progress here
  //     },
  //     timeout: 5000, // Example timeout of 5 seconds
  //   };
  //   try {
  //     const response = await axios.post(
  //       "https://668acd082c68eaf3211de0b8.mockapi.io/submit/submit",
  //       formData,
  //       config
  //     );

  //     console.log("Submission successful:", response.data);

  //     // Handle remaining time or other response data here
  //   } catch (error) {
  //     console.error("Submission error:", error);

  //     // Handle error, e.g., timeout, network error, etc.
  //   }
  // };
  // setTimeout(() => {
  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       const newProgress = prevProgress + 3;
  //       if (newProgress >= 100) {
  //         clearInterval(interval);
  //         return 100;
  //       }
  //       return newProgress;
  //     });
  //   }, 300);
  // }, 3000);

  return (
    <div className="">
      {/* <SubmissionProgress progress={progress} /> */}
      {/* <form onSubmit={(e) => onsubmit(e)} className="w-[800px] mx-auto">
        <UserInput label="username" placeholder="username" type="text" />
        <UserInput label="password" placeholder="password" type="password" />
        <Button type="submit">submit</Button>
      </form> */}
      {/* <MainTabel
        TabelHead={TabelHead}
        TabelData={TabelData}
        tableStyling={tableStyling}
      /> */}
      {/* <SideBar modules={modules} subModules={subModules} /> */}
      {/* <InputFile setState={setFile} className="w-[400px]" /> */}
      {/* <Switcher
        items={["Item 1", "Item 2", "Item 3"]}
        setSelectedOption={() => {}}
        placeHolder="Select item"
        heading="select item"
      /> */}
      {/* <PaginationComponent
        setLimitFn={() => {}}
        totalDataLength={20}
        setPageFn={() => {}}
      /> */}
      {/* <SearchInput setInputValue={() => {}} /> */}
    </div>
  );
};

export default Test;
