"use client";
import React from "react";
import { ChevronDown, CheckIcon } from "lucide-react";
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

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

type SetStateAction<S> = (arg: S) => void;

interface SwitcherProps extends PopoverTriggerProps {
  items: string[];
  heading: string;
  placeHolder: string;
  className: string;
  setSelectedOption: SetStateAction<string | null>;
}

export const Switcher: React.FC<SwitcherProps> = ({
  className,
  items = [],
  heading,
  setSelectedOption,
  placeHolder,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const onSelect = (item: string) => {
    setOpen(false);
    setSelected(item);
    setSelectedOption(item);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="default"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a company size"
          className={cn(
            "text-sm font-normal py-3 gap-x-2 flex items-center rounded-none text-destructive",
            className
          )}
        >
          {selected || placeHolder}
          <ChevronDown className="h-3 w-3 text-primary shrink-0 font-bold" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search size..." />
            <CommandEmpty>No sizes found.</CommandEmpty>
            <CommandGroup heading={heading}>
              {items.map((item) => (
                <CommandItem
                  key={item}
                  onSelect={(item: any) => {
                    onSelect(item);
                  }}
                  className="text-sm"
                >
                  {item}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selected === item ? "opacity-100" : "opacity-0"
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
