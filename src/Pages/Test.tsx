import React, { ReactNode } from "react";
import { Button } from "../Components/Main-Components/button";

import MainTabel from "../Components/Main-Components/MainTabel";
import { tableHeaderType, tableItemType } from "@/Utils/tableTypes";
import { DropDown } from "../Components/Main-Components/DropDown";
import { dropOptions } from "@/Utils/DropDown.types";
// import { Copy, Edit, EditIcon } from "lucide-react";

import Status from "../Components/Main-Components/status";
import PaginationComponent from "../Components/Main-Components/PaginationComponent";
import SideBar from "../Components/Main-Components/sidebar";
import { SquareArrowUpLeftIcon } from "lucide-react";
import DeleteIcon from "../Icons/deleteSVG";
// import ArrowRightIcon from "../Icons/arrow-rightSVG";

const Test: React.FC = () => {
  return (
    <div className="flex items-start justify-start">
      {/* <PaginationComponent
        setLimitFn={() => {}}
        setPageFn={() => {}}
        totalDataLength={100}
      /> */}
      {/* <ArrowRightIcon /> */}
      <SideBar
        modules={[
          {
            title: "First",
            Svg: <DeleteIcon height={24} fill="green" />,
            link: "",
          },
        ]}
        openIndicator={true}
      />
    </div>
  );
};

export default Test;
