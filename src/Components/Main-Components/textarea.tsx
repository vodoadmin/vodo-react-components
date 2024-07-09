import { Label } from "../label";
import { Textarea } from "../textarea";
import React, { ChangeEvent } from "react";
import ErrorIcon from "../../Icons/errorSVG";
import TickIcon from "../../Icons/tickSVG";
import { cn } from "../../Utils/utils";

interface TextArea {
  label: string;
  disabled?: boolean;
  placeHolder?: string;
  name: string;
  className?: string;
  error?: string;
  success?: string;
  onChange?: (e?: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e?: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e?: React.FocusEvent<HTMLTextAreaElement>) => void;
}
const TextArea: React.FC<TextArea> = ({
  label,
  disabled,
  placeHolder,
  className,
  name,
  error,
  success,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <>
      <div className="relative">
        <Label
          htmlFor={label}
          className={`w-full opacity-50 text-muted-foreground  text-[10px]  ${
            error
              ? "text-destructive opacity-100"
              : success
              ? "text-secondary opacity-100"
              : ""
          }`}
        >
          {label}
        </Label>
        <Textarea
          disabled={disabled}
          id={label}
          name={name}
          placeholder={placeHolder}
          className={cn(
            `w-[426px]  focus-visible:ring-0 focus-visible:ring-offset-0 focus:shadow-lg disabled:bg-black/10 disabled:resize-none mx-auto ${
              error ? " border-b-destructive outline-none" : ""
            } `,
            className
          )}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <span className="absolute top-8 right-2">
          {error ? (
            <ErrorIcon className="w-5 h-5" />
          ) : success ? (
            <TickIcon className="w-5 h-5" />
          ) : (
            ""
          )}
        </span>

        {error && (
          <span className=" text-destructive text-[10px]">{error}</span>
        )}
        {success && (
          <span className=" text-secondary text-[10px]">{success}</span>
        )}
      </div>
    </>
  );
};

export default TextArea;
