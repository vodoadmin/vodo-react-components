import { cn } from "../Utils/utils";
import { Progress } from "./progress";
import UploadIcon from "../Icons/uploadIcon";
import CloseIcon from "../Icons/closeSVG";
import React from "react";

interface Upload {
  className?: string;
  complete?: boolean;
  file: File;
  progress?: number;
  remaining?: string;
  onRemove: () => void; // Added prop to handle file removal
}
const Upload: React.FC<Upload> = ({
  className,
  complete,
  file,
  progress,
  remaining,
  onRemove,
}) => {
  const fileSize = (file.size / 1024).toFixed(2);
  return (
    <section
      className={cn("w-[391px] bg-black/5 p-3 rounded-md relative", className)}
    >
      <div className="flex items-center ">
        <UploadIcon
          width={44}
          height={44}
          stroke={complete ? "#60B04C" : undefined}
        />
        <div className=" grow">
          <h1 className="text-sm font-normal">{file.name}</h1>
          {!complete && (
            <div className="flex items-center justify-between text-xs text-black/50">
              <div>
                <span>{fileSize} KB</span>
                {" . "}
                <span>{remaining} seconds left</span>
              </div>
              <div>{progress}%</div>
            </div>
          )}
          {complete && (
            <span className="text-xs font-normal text-secondary">
              file uploaded successfully
            </span>
          )}
        </div>
      </div>
      <span
        onClick={onRemove}
        className="absolute w-5 h-5 text-xs cursor-pointer top-1 right-3 text-black/50"
      >
        <CloseIcon />
      </span>
      {!complete && <Progress className="h-1 bg-white " value={progress} />}
    </section>
  );
};

export default Upload;
