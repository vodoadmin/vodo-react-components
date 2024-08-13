import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { cn } from "../../Utils/utils";

interface SelectItemProps {
  name: string;
  value: string;
}

interface SelectorProps {
  items: SelectItemProps[];
  placeholder?: string;
  showCheckIcon?: boolean;
  value?: string | undefined;
  onValueChange?: (value: string) => void;
  className?: string;
  itemsStyle?: string;
  id?: string;
  defaultValue?: string;
  name?: string;
  disabled?: boolean;
  dir?: string;
}

export const Selector: React.FC<SelectorProps> = ({
  items,
  placeholder,
  showCheckIcon = true,
  value,
  defaultValue,
  onValueChange,
  className,
  itemsStyle,
  id,
  name,
  disabled,
  dir,
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      value={value}
    >
      <SelectTrigger
        className={cn("w-[200px] rounded-none", className)}
        id={id}
        name={name}
        dir={dir}
      >
        <SelectValue className="" placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="min-w-fit">
        {items.map((item) => (
          <SelectItem
            showCheckIcon={showCheckIcon}
            key={item.name}
            value={item.value.toLowerCase()}
            className={itemsStyle}
          >
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
