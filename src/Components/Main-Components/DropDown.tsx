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
import { cn } from "../../Utils/utils";

export const DropDown = ({
  title,
  selections,
  mainIcon,
  className,
  outerClassName,
}: {
  title?: string | ReactNode;
  selections?: dropOptions[];
  mainIcon: ReactNode;
  className?: string;
  outerClassName?: string;
}) => {
  const onUpdate = () => {};

  const onDelete = async () => {};
  return (
    <div className={outerClassName}>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className={cn(" focus-visible:ring-0 focus-visible:ring-offset-0", className)}
        >
          <Button variant="ghost" className="w-8 h-8 p-0">
            <span className="sr-only">Open menu</span>
            {/* <EditIcon className="w-6 h-6" /> */}
            {mainIcon}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{title}</DropdownMenuLabel>
          {selections?.map((item, i) => (
            <DropdownMenuItem onClick={() => item.action()} key={i} className="gap-2">
              {item.icon && item.icon}
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
