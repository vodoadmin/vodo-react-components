/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "../../Utils/utils";
import { Input } from "../input";
import { Label } from "../label";
import CloudUploadIcon from "../../Icons/cloudUploadIcon";
import { ChangeEvent, useState } from "react";
import Upload from "../upload";
import React from "react";

interface inputFile extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  onChangeFn?: (e: any) => void;
}

const simulateUploadProgress = (setProgress: any, setRemaining: any) => {
  return new Promise((resolve) => {
    let progress = 0;
    const totalDuration = 1000; // total duration for the simulated upload in milliseconds
    const intervalDuration = 100; // update interval in milliseconds
    const interval = setInterval(() => {
      progress += (intervalDuration / totalDuration) * 100;
      setProgress(Math.min(progress, 100));

      const remainingTime = (
        (totalDuration - (progress / 100) * totalDuration) /
        1000
      ).toFixed(2);
      setRemaining(remainingTime);

      if (progress >= 100) {
        clearInterval(interval);
        resolve("Upload complete");
      }
    }, intervalDuration);
  });
};

const InputFile: React.FC<inputFile> = ({ className, disabled, onChangeFn, name }) => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [remaining, setRemaining] = useState<string | undefined>("0");
  const [error, setError] = useState("");
  const handleChange = async (e: ChangeEvent<HTMLInputElement> | undefined) => {
    if (e && e.target && e.target.files) {
      const selected = e.target.files[0];
      if (selected.size > 1 * 1024 * 1024) {
        setError("File size exceeds 1 MB");
        return;
      }

      setFile(selected);
      try {
        simulateUploadProgress(setProgress, setRemaining)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Upload simulation failed", error);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null); // Update the state to remove the file
    setProgress(0);
    setRemaining("0");
    setError("");
  };

  return (
    <>
      <Label
        htmlFor="file"
        className={cn(
          "flex mb-2.5 items-center gap-5 border-2 p-[50px] border-dashed relative focus-within:border-black has-[input:active]:bg-black/20 has-[input:disabled]:opacity-50 has-[input:disabled]:bg-transparent",
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
          name={name ?? "image"}
          onChange={(e) => {
            handleChange(e);
            onChangeFn?.(e);
          }}
        ></Input>
      </Label>
      {file && (
        <div>
          {progress < 100 && (
            <Upload
              progress={progress}
              remaining={remaining}
              file={file}
              onRemove={handleRemoveFile}
            />
          )}
          {progress == 100 && (
            <Upload complete file={file} onRemove={handleRemoveFile} />
          )}
        </div>
      )}
      {error && !file && <span className="text-red-500">{error}</span>}
    </>
  );
};
export default InputFile;
