"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { renderDateWithSuperscript } from "@/services/renderDateWithSuperscript";

function NewHero() {
  const t = useTranslations("Hero");

  return (
    <div id="hero" className="w-screen overflow-hidden text-white px-4 md:px-32 md:h-[580px] h-[75vh] bg-black relative">
      <div className="new-hero absolute inset-0 size-full max-md:top-auto max-md:h-2/3 object-cover rtl:-scale-x-100 z-10" />

      <div className="relative z-10 size-full flex flex-col justify-center items-center gap-5 text-center">
        {/* <Image src={`/nights-6/general/NV-Studio.png`} alt="Nvidia Studio" width={100} height={80}
        className="w-24 object-contain -mt-10 mb-10 max-md:pt-24" /> */}
        <div role="img" aria-label="Nvidia Studio" className="nv-studio-bg w-24 h-[80px] -mt-10 mb-10 max-md:pt-24"/>
        <h1 className="heading-medium font-bold">
          {t("headerMedium")} 
        </h1>
        <h2 className="heading-large font-bold">
          {t("headerLarge")}
        </h2>
        <p className="text-large text-gray-200">
          <span>{t("location")} </span>
          <span>| </span>
          <span>{renderDateWithSuperscript(t("date"))}</span>
        </p>
      </div>
    </div>
  );
}

export default NewHero;
