"use client";

import Image from "next/image";
import intersectImg from "/public/intersect.png";
import { usePathname } from "next/navigation";

function PolygonH2({
  text = "About",
  src1 = intersectImg,
  src2 = "Intersect-shadow.png",
}) {
  
  return (
    <div className="text-xl w-fit">
      <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold">{text}</h3>
    </div>
  );
}

// Add comment

export default PolygonH2;
