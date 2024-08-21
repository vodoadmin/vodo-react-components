import React from "react";
import { cn } from "../../Utils/utils";
interface LoaderProps {
  className?: string;
}
const Loader = ({ className }: LoaderProps) => {
  return (
    <div
      className={cn(
        "vodo-rc-loader size-[63px] rounded-full inline-block relative box-border m-[0.3rem] after:size-10 after:rounded-full after:box-border after:absolute",
        className
      )}
    ></div>
  );
};

export default Loader;
