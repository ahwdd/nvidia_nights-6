"use client";
import Deadline from "./Deadline";
import Rights from "./Rights";

export default function Footer() {

  return (
    <footer className="w-full relative">
      <Deadline />
      <Rights />
    </footer>
  );
}