import * as React from "react";

import { cn } from "../Utils/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "outline-none bg-transparent text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/25 disabled:cursor-not-allowed disabled:bg-black/[0.08] placeholder:disabled:text-black/50 placeholder:text-sm transition-colors w-full flex text-primary  h-9 rounded-lg border border-black/10 px-3 py-1 focus:shadow-custom",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
