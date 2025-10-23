"use client";
import { MdError } from "react-icons/md";

function RegisterError({ error }) {
  return (
    <span className="text-red-700 flex gap-1 items-center text-sm">
      <MdError className="w-4 h-4" />
      {error}
    </span>
  );
}

export default RegisterError;