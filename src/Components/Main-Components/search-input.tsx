import React, { ChangeEvent } from "react";

import Search from "../../Icons/searchIcon";

import { Input } from "../input";
import { cn } from "../../Utils/utils";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setInputValue: (value: string | null) => void;
  buttonClass?: string;
  onClick?: any;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    { className, type, disabled, setInputValue, buttonClass, onClick, ...props },
    ref
  ) => {
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
          onClick={onClick}
          className={cn(
            "absolute top-0 right-0 flex items-center justify-center h-full px-3 py-2 text-white cursor-default bg-destructive rounded-s-none rounded-e-lg disabled:opacity-60 disabled:cursor-not-allowed",
            buttonClass
          )}
        >
          <Search width={14} height={14} />
        </button>
      </div>
    );
  }
);
Input.displayName = "SearchInput";

export { SearchInput };
