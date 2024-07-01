import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";
import UploadIcon from "./vodo-icons/uploadSVG";
import CloseIcon from "./vodo-icons/closeSVG";
import React from "react";

interface Upload {
  className?: string;
  complete?: boolean;
  file: File;
  progress?: number;
  remaining?: string;
}
const Upload: React.FC<Upload> = ({
  className,
  complete,
  file,
  progress,
  remaining,
}) => {
  console.log(progress);

  const fileSize = (file.size / 1024).toFixed(2);
  return (
    <section className={cn("w-[391px] bg-black/5 p-3 rounded-md relative", className)}>
      <div className="flex items-center ">
        <UploadIcon className={`w-11 h-11 ${complete ? "*:*:stroke-secondary" : ""}`} />
        <div className=" grow">
          <h1 className="text-sm font-normal">{file.name}</h1>
          {!complete && (
            <div className="flex justify-between items-center text-black/50 text-xs">
              <div>
                <span>{fileSize} KB</span>
                {" . "}
                <span>{remaining} seconds left</span>
              </div>
              <div>{progress}%</div>
            </div>
          )}
          {complete && (
            <span className="text-secondary text-xs font-normal">
              file uploaded successfully
            </span>
          )}
        </div>
      </div>
      <span onClick={(e) => e.currentTarget.parentElement?.remove()}>
        <CloseIcon className="absolute top-1 right-3 text-xs text-black/50 w-5 h-5 cursor-pointer" />
      </span>
      {!complete && <Progress className=" bg-white h-1" value={progress} />}
    </section>
  );
};

export default Upload;
