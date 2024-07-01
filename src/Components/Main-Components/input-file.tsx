/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "../../Utils/utils";
import { Input } from "../input";
import { Label } from "../label";
import CloudUploadIcon from "../../Icons/cloud-uploadSVG";
import { ChangeEvent, useState } from "react";
// import axios from "axios";
import Upload from "../upload";
import React from "react";

interface inputFile {
  className?: string;
  disabled?: boolean;
  url: string;
}

const InputFile: React.FC<inputFile> = ({ className, disabled, url }) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [remaining, setRemaining] = useState<string | undefined>("0");
  const onChange = async (e: ChangeEvent<HTMLInputElement> | undefined) => {
    if (e && e.target && e.target.files) {
      const selected = e.target.files[0];
      setFile(selected);
      const formData = new FormData();
      formData.append("file", selected);
      try {
        await axios.post(url, formData, {
          onUploadProgress: (ProgressEvent) => {
            if (ProgressEvent.total) {
              const { loaded, total } = ProgressEvent;
              const percentCompleted = Math.round((loaded * 100) / total);
              const remainingTime = ProgressEvent.estimated?.toFixed(2);
              setProgress(percentCompleted);
              setRemaining(remainingTime);
            }
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Label
        htmlFor="file"
        className={cn(
          "flex items-center gap-5 border-2 p-[50px] border-dashed relative focus-within:border-black has-[input:active]:bg-black/20 has-[input:disabled]:opacity-50 has-[input:disabled]:bg-transparent",
          className
        )}
      >
        <CloudUploadIcon className="w-[25px] h-[17.5px]" />
        <div>
          <h1>Drag your image or click to browse</h1>
          <p className="text-black/50 font-normal my-2">JPG or PNG only</p>
          <p className="text-black/50 font-normal">Maximum size 1 MB</p>
        </div>
        <Input
          className=" absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer"
          type="file"
          id="file"
          disabled={disabled}
          accept=".jpg,.png"
          onChange={(e) => onChange(e)}
        ></Input>
      </Label>
      {file && (
        <div>
          {progress < 100 && (
            <Upload progress={progress} remaining={remaining} file={file} />
          )}
          {progress == 100 && <Upload complete file={file} />}
        </div>
      )}
    </>
  );
};
export default InputFile;
