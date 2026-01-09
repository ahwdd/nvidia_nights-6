"use client"
import React from "react";
import Image from "next/image.js";
import Link from "next/link.js";
import { MoveLeft } from "lucide-react";

function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-10 h-screen">
        <div className="flex flex-col gap-10 items-center">

          <h1 className="flex flex-col gap-10 text-3xl text-center font-bold justify-center items-center">
            This page is not found !
            <Image src={`/not-found.png`} width={500} height={500} alt="not found" />
          </h1>

          <Link className="bg-mainGreen rounded w-fit p-2 flex items-center gap-3 justify-center"
            href={"/nights/sn6"}>
            Back home <MoveLeft />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
