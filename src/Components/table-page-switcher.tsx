import React from "react";

import { ChevronDown } from "lucide-react";
import { cn } from "../Utils/utils";
import { Button } from "./Main-Components/button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { useState } from "react";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface SwitcherProps extends PopoverTriggerProps {
  items: string[];
  selected: number;
  onSelected: (item: string) => void;
  className: string;
}

export const TablePageSwitcher: React.FC<SwitcherProps> = ({
  className,
  items = [],
  selected,
  onSelected,
}) => {
  const [open, setOpen] = useState(false);

  const handleOnSelect = (item: string) => {
    setOpen(false);
    onSelected(item);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="default"
          role="combobox"
          aria-expanded={open}
          aria-label=""
          className={cn(
            "text-muted-foreground text-sm font-normal py-3 gap-x-2 flex items-center rounded-none",
            className
          )}
        >
          {selected || ""}
          <ChevronDown
            strokeWidth={3}
            className="h-3 w-3 text-primary shrink-0 font-bold"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandInput
              className=" placeholder:text-primary/50"
              placeholder="Search page..."
            />
            <CommandEmpty>No items found.</CommandEmpty>
            <CommandGroup heading="Pages">
              {items.map((item) => (
                <CommandItem
                  key={item}
                  onSelect={(item: any) => {
                    handleOnSelect(item);
                  }}
                  className="text-sm"
                >
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
