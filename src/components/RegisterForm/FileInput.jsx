import { useState } from "react";

const FileInput = ({ register, setValue, errors }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setValue("file", file); // Update form state with the file
    }
  };

  return (
    <div className="flex-col flex gap-1">
      <label>File Link*</label>
      <div className="flex w-full gap-2">
        <input
          className="w-1/2 hidden p-2"
          type="text"
          placeholder="Link"
          //   value={fileName}
          //   disabled={!!fileName}
          {...register("file")}
        />
        <label className="bg-black w-1/2 text-white py-2 px-4 rounded-[4px] cursor-pointer">
          Upload File
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>
      </div>
      {/* {errors.file && <RegisterError error={errors.file.message} />} */}
    </div>
  );
};

export default FileInput;
