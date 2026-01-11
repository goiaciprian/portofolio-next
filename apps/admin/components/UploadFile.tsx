import React, { useRef } from "react";
import Image from "next/image";

interface UploadFileProps {
  name: string;
  disable?: boolean;
}

export function UploadFile({ name, disable }: UploadFileProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = React.useState<undefined | File>();

  const getObjectUrl = () => {
    if (!file) {
      throw Error("No image");
    }

    return URL.createObjectURL(file);
  };

  const preventDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const updateFile = (newFile: File | undefined) => {
    setFile(newFile);

    if (inputRef.current) {
      if (newFile) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(newFile);
        inputRef.current.files = dataTransfer.files;
      } else {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div>
      <label
        htmlFor={name}
        onDragEnter={preventDrag}
        onDragOver={preventDrag}
        onDragLeave={preventDrag}
        onDrop={(e) => {
          preventDrag(e);
          const [file] = e.dataTransfer.files;
          updateFile(file);
        }}
        className={disable ? "" : "cursor-pointer"}
      >
        <div className="border-2 w-full rounded-2xl shadow-xs flex items-center justify-center">
          {file ? (
            <div className="w-full h-100 relative py-3">
              <div
                className="top-0 opacity-0 hover:opacity-85 w-full h-full z-100 absolute bg-gray-900 rounded-2xl flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  updateFile(undefined);
                }}
              >
                <button
                  className="font-bold text-3xl cursor-pointer"
                  type="button"
                >
                  X
                </button>
              </div>
              <div className="w-full h-full relative">
                <Image
                  alt={`${name}`}
                  src={getObjectUrl()}
                  className="rounded-2xl object-contain"
                  fill
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-full">
              <p className="font-semibold py-3 pl-4">Upload File</p>
            </div>
          )}
        </div>
      </label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        hidden
        disabled={disable}
        onChange={(e) => {
          const filelist = e.currentTarget.files;
          if (filelist) {
            const [file] = filelist;
            updateFile(file);
          }
        }}
        type="file"
        accept={"image/png, image/jpg, image/jpeg"}
      />
    </div>
  );
}
