import * as React from "react";

import { cn } from "../Utils/utils";

import ClearIcon from "../Icons/clearSVG";
import EyePasswordIcon from "../Icons/eyepasswordSVG";
import EyeSlashIcon from "../Icons/eyeslash";
import CloseIcon from "../Icons/closeSVG";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,value, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>(value as string);
    return (
      <div className="relative ">
        <input
          type={type === "text" || showPassword === true ? "text" : "password"}
          className={cn(
            `flex h-9 rounded-full sm:w-64 w-56 placeholder:opacity-50 placeholder:text-xs  border-b-2  border-input box-border bg-transparent ps-3 ${type==="password"? "pe-12": "pe-5"} text-sm  transition-colors outline-none focus:shadow-[#2b2f384f_0px_2px] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:bg-black/10 disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          ref={ref}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange && onChange(e);
          }}
          {...props}
        />

        <div className="absolute top-0.5 bottom-0.5 right-0   flex items-center gap-2 scale-75 px-1">
          <div
            className="cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {type === "password" &&
              (showPassword ? <EyePasswordIcon /> : <EyeSlashIcon />)}
          </div>
          <div className="cursor-pointer" onClick={() => setInputValue("")}>
            <CloseIcon />
          </div>
        </div>
      </div>
    );
  }
);
InputForm.displayName = "Input";

export { InputForm };
