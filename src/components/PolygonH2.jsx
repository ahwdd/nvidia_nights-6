"use client";

import Image from "next/image";
import intersectImg from "/public/intersect.png";
import { usePathname } from "next/navigation";
import { pathNameGetter } from "@/services/services";

function PolygonH2({
  text = "About",
  src1 = intersectImg,
  src2 = "Intersect-shadow.png",
}) {
  const pathname = usePathname();

  const usedPath = pathNameGetter(pathname);

  return (
    <div className="text-xl w-fit">
      <div className="hidden">
        <img alt="octagon-shape" src={src2}
          className={`lg:w-fit w-10 ${usedPath === "en" ? "-mr-8" : "-ml-8"}`}/>
        <Image alt="octagon-shadow" className=" w-10" src={src1} />
      </div>
      <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold">{text}</h3>
    </div>
  );
}

// Add comment

export default PolygonH2;
