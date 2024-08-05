import * as React from "react";

import { cn } from "../Utils/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[141px] w-full outline-none border border-black/10 bg-background px-[9px] py-[14px] text-sm text-primary placeholder:text-black/50 focus:border-black/25 focus:shadow-customLight disabled:cursor-not-allowed data-[state=touched]:aria-[invalid=true]:border-inputInvalid data-[state=touched]:aria-[invalid=false]:border-inputValid disabled:text-black/50 disabled:!border-black/10 disabled:bg-black/[0.08]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
