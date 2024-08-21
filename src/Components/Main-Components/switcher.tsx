import React from "react";

import CheckIcon from "../../Icons/check-icon";
import ArrowDownIcon from "../../Icons/arrow-downSVG";
import { cn } from "../../Utils/utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  // CommandSeparator,
} from "../command";
import { useState } from "react";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>;

type SetStateAction<S> = (arg: S) => void;

interface SwitcherProps extends PopoverTriggerProps {
  items: any[];
  targetKey?: any;
  heading?: string;
  placeHolder?: string;
  className?: string;
  setSelectedOption: SetStateAction<string | null>;
  currentValue?: string;
  disabled?: boolean;
}

export const Switcher: React.FC<SwitcherProps> = ({
  className,
  items = [],
  targetKey = "",
  heading,
  setSelectedOption,
  placeHolder,
  currentValue,
  disabled,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(currentValue ?? null);

  const onSelect = (item: any) => {
    setOpen(false);
    setSelected(targetKey ? item[targetKey] : item);
    setSelectedOption(item);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          size="default"
          role="combobox"
          aria-expanded={open}
          aria-label={placeHolder}
          className={cn(
            " group text-sm font-normal py-3 gap-x-2 flex items-center rounded-none text-destructive justify-between disabled:cursor-not-allowed disabled:pointer-events-auto  disabled:last:stroke-red-500",
            className
          )}
        >
          {selected || placeHolder}
          <ArrowDownIcon className="rtl:mr-auto ltr:ml-auto font-bold text-primary shrink-0 group-disabled:*:stroke-[#2B2F3880] group-disabled:*:fill-[#2B2F3880]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command className="">
          <CommandList>
            <CommandInput
              placeholder={placeHolder}
              className="box-border border-none"
            />
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup heading={heading}>
              {items.map((item, i) => (
                <CommandItem
                  key={i}
                  onSelect={() => {
                    onSelect(item);
                  }}
                  className="text-sm"
                >
                  {targetKey ? item[targetKey] : item}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selected === targetKey
                        ? item[targetKey]
                        : item
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
