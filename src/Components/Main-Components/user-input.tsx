import { Label } from "../label";
import { InputForm } from "../inputForm";
import { ChangeEvent, useRef, useState } from "react";
import ErrorIcon from "../../Icons/Icons_2/errorSVG";
import TickIcon from "../../Icons/tickSVG";
import React from "react";

import { cn } from "../../Utils/utils";

interface UserInput {
  type: "text" | "password";
  label: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  error?: string;
  success?: string;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void;
}
const UserInput: React.FC<UserInput> = ({
  type,
  label,
  disabled,
  className,
  placeholder,
  error,
  success,
  onChange,
  onBlur,
  onFocus,
}) => {
  const input = useRef(null);

  return (
    <>
      <div className="relative">
        <Label
          htmlFor="username"
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
        <InputForm
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          className={cn(`${error ? " border-b-destructive" : ""}  `, className)}
          type={type}
          ref={input}
          disabled={disabled}
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

export default UserInput;
