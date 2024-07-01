import React, { ChangeEvent } from "react";
import { SearchIcon } from "lucide-react";

import { Input } from "../input";
import { cn } from "../../Utils/utils";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  setInputValue: (value: string | null) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, type, disabled, setInputValue, ...props }, ref) => {
    function handleInput(e: ChangeEvent<HTMLInputElement>) {
      setInputValue(e.target.value);
    }

    return (
      <div className={cn("relative", className)}>
        <Input
          disabled={disabled}
          placeholder="search..."
          ref={ref}
          {...props}
          type={type}
          className="pr-10"
          onChange={handleInput}
        />
        <button
          disabled={disabled}
          className="absolute bg-destructive right-0 top-0 h-full rounded-s-none text-white flex items-center justify-center rounded-e-lg py-2 px-3 disabled:opacity-60 disabled:cursor-not-allowed cursor-default"
        >
          <SearchIcon className=" w-[14px] h-[14px]" strokeWidth={3} />
        </button>
      </div>
    );
  }
);
Input.displayName = "SearchInput";

export { SearchInput };
