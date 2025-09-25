"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import RegisterError from "../RegisterError"; // Adjust path according to your structure
import { usePathname } from "next/navigation";
import { pathNameGetter } from "@/services/services";
import { useTranslations } from "next-intl";

const FileInput = ({ register, setValue, errors }) => {
  const pathname = usePathname();
  const path = pathNameGetter(pathname);
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

  return (
    <div className="flex-col flex gap-1">
      <label>{t("link")} *</label>
      <div className="flex gap-2 relative">
        <input
          className="w-full p-2 relative"
          type="text"
          placeholder={t("linkPlaceholder")}
          value={inputValue}
          disabled={fileName.length > 0}
          {...register("fileLink", {
            onChange: handleInputChange,
          })}
        />

        {/* Render the Upload File label if no value is entered */}
        {!inputValue && (
          <label
            className={`underline absolute ${path === "en" ? "mx-28" : "mx-[125px]"} mt-2 font-bold text-[#B2B2B2] rounded-[4px] cursor-pointer`}
          >
            <span className="flex gap-1 items-center">
              {t("uploadFile")}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 9V11.6667C13 12.0203 12.8595 12.3594 12.6095 12.6095C12.3594 12.8595 12.0203 13 11.6667 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V9M10.3333 4.33333L7 1M7 1L3.66667 4.33333M7 1V9"
                  stroke="#B2B2B2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
        )}
      </div>
      {fileName && (
        <div className="flex gap-1">
          <span>Selected file: {fileName}</span>
          <p className="cursor-pointer" onClick={() => setFileName("")}>
            <X className="text-red-700" />
          </p>
        </div>
      )}
      {errors.file && <RegisterError error={errors.file.message} />}
    </div>
  );
};

export default FileInput;
