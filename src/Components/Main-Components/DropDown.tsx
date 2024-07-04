import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "../dropdown-menu";
import { Button } from "./button";

import { dropOptions } from "@/Utils/DropDown.types";

export const DropDown = ({
  title,
  selections,
  mainIcon,
}: {
  title?: string | ReactNode;
  selections?: dropOptions[];
  mainIcon: ReactNode;
}) => {
  const onUpdate = () => {};

  const onDelete = async () => {};
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open menu</span>
            {/* <EditIcon className="w-6 h-6" /> */}
            {mainIcon}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{title}</DropdownMenuLabel>
          {selections?.map((item, i) => (
            <DropdownMenuItem onClick={() => item.action()} key={i}>
              {item.icon && item.icon}
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
