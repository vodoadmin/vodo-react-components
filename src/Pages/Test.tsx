import React, { ReactNode } from "react";
import { Button } from "../Components/Main-Components/button";

import MainTabel from "../Components/Main-Components/MainTabel";
import { tableHeaderType, tableItemType } from "@/Utils/tableTypes";
import { DropDown } from "../Components/Main-Components/DropDown";
import { dropOptions } from "@/Utils/DropDown.types";
// import { Copy, Edit, EditIcon } from "lucide-react";
import ArrowLeftIcon from "../Icons/arrow-leftSVG";
import Status from "../Components/Main-Components/status";
import PaginationComponent from "../Components/Main-Components/PaginationComponent";
// import ArrowRightIcon from "../Icons/arrow-rightSVG";

const Test: React.FC = () => {
  return (
    <div className="p-5">
      <PaginationComponent
        setLimitFn={() => {}}
        setPageFn={() => {}}
        totalDataLength={100}
      />
      {/* <ArrowRightIcon /> */}
      <ArrowLeftIcon />
    </div>
  );
};

export default Test;
