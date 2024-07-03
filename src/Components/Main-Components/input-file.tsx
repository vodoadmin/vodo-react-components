/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "../../Utils/utils";
import { Input } from "../input";
import { Label } from "../label";
import CloudUploadIcon from "../../Icons/cloudUploadIcon";
import { ChangeEvent, useState } from "react";
// import axios from "axios";
import Upload from "../upload";
import React from "react";

interface inputFile {
  className?: string;
  disabled?: boolean;
  url: string;
}

const uploadFileWithProgress = (
  url: string,
  formData: any,
  setProgress: any,
  setRemaining: any
) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    // Set up a listener to track the upload progress
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        const remainingTime = (
          (event.total - event.loaded) /
          (event.loaded / event.timeStamp)
        ).toFixed(2); // Approximate remaining time in milliseconds
        setProgress(percentCompleted);
        setRemaining(remainingTime);
      }
    };

    // Set up listeners for success and error
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText));
      }
    };

    xhr.onerror = () => reject(new Error("Network error"));

    // Send the form data
    xhr.send(formData);
  });
};

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
        uploadFileWithProgress(url, formData, setProgress, setRemaining)
          .then((response) => {
            console.log("Upload successful", response);
          })
          .catch((error) => {
            console.error("Upload failed", error);
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
        <CloudUploadIcon width={25} height={17.5} fill="#E4412D" />
        <div>
          <h1>Drag your image or click to browse</h1>
          <p className="my-2 font-normal text-black/50">JPG or PNG only</p>
          <p className="font-normal text-black/50">Maximum size 1 MB</p>
        </div>
        <Input
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer "
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
