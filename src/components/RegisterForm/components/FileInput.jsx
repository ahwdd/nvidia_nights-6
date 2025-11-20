"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import RegisterError from "../RegisterError";
import { useTranslations } from "next-intl";

const FileInput = ({ register, setValue, errors }) => {
  const t = useTranslations("Register");
  const [fileName, setFileName] = useState(""); // For file name state
  const [inputValue, setInputValue] = useState(""); // For text input value

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setInputValue(""); // Clear the text input.
      setValue("file", file); // Set the file directly.
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setValue("file", value); // Use the string value directly.
    setFileName(""); // Clear any file name.
  };

  const handleClearFile = () => {
    setFileName("");
    setValue("file", "");
  };

  const textDisabled = fileName.length > 0;   // disable/fade text input when a file is selected
  const fileDisabled = inputValue.length > 0; // disable/fade file input when user types a link

  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full flex items-center justify-start border border-gray-300 rounded-sm overflow-hidden px-3">
        <input className={`bg-transparent py-3 focus:outline-none transition-opacity
            ${textDisabled ? "opacity-0 pointer-events-none" : "opacity-100"}
            ${fileDisabled ? "w-full" : "ltr:w-[6.25rem] rtl:w-[9.5rem]"}`}
          type="text"
          placeholder={t("linkPlaceholder") || "Insert Link or "}
          value={inputValue}
          disabled={textDisabled}
          {...register("file", {
            onChange: handleInputChange,
          })}
        />

        <label className={`text-gray-400 cursor-pointer transition-opacity flex items-center gap-1 text-sm
            ${fileDisabled ? "opacity-0 pointer-events-none" : "opacity-100 flex-1"}`}>
          <span className="flex gap-1 items-center text-sm font-bold">
            {` ${t("uploadFile") || "Upload File"} `}
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            disabled={fileDisabled}
            aria-disabled={fileDisabled}
          />
        </label>
      </div>

      {fileName && (
        <div className="flex gap-2 items-center text-sm text-gray-600">
          <span>Selected file: {fileName}</span>
          <button
            type="button"
            onClick={handleClearFile}
            className="cursor-pointer text-red-600 hover:text-red-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      {errors.file && <RegisterError error={errors.file.message} />}
    </div>
  );
};

export default FileInput;
