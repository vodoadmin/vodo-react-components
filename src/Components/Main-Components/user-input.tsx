import { Label } from "../label";
import { InputForm } from "../inputForm";
import { ChangeEvent, HTMLInputTypeAttribute, useRef, useState } from "react";
import ErrorIcon from "../../Icons/errorSVG";
import TickIcon from "../../Icons/tickSVG";
import React from "react";

import { cn } from "../../Utils/utils";

interface UserInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  onChangeFn?: (e: any) => void;
  labelStyle?: string;
  closeBtnFn?: () => void;
}
const UserInput: React.FC<UserInputProps> = ({
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
  onChangeFn,
  value,
  name,
  id,
  labelStyle = "",
  closeBtnFn,
  ...props
}) => {
  const input = useRef(null);

  return (
    <>
      <div className="relative">
        <Label
          htmlFor={id}
          className={cn(
            `w-full opacity-50 text-muted-foreground  text-[14px]  ${
              error
                ? "text-destructive opacity-100"
                : success
                ? "text-secondary opacity-100"
                : ""
            }`,
            labelStyle
          )}
        >
          {label}
        </Label>
        <InputForm
          id={id}
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeFn={onChangeFn}
          closeBtnFn={closeBtnFn}
          onFocus={onFocus}
          value={value}
          name={name}
          className={cn(`${error ? " border-b-destructive" : ""}  `, className)}
          type={type}
          ref={input}
          disabled={disabled}
          {...props}
        />
        {/* <span className="absolute top-7 right-2">
          {error ? (
            <ErrorIcon className="w-5 h-5" />
          ) : success ? (
            <TickIcon className="w-5 h-5" />
          ) : (
            ""
          )}
        </span> */}

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
