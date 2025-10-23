"use client";
import { useTranslations } from "next-intl";
import NVStudioLogo from '@/../public/nights-6/NV-Studio.png'
import Image from "next/image";

function NewHero() {
  const t = useTranslations("Hero");

  return (
    <div id="hero" className="w-screen overflow-hidden text-white px-10 lg:px-32 lg:h-[580px] h-[440px] bg-black relative">
      <div className="new-hero absolute inset-0 size-full max-lg:w-[40rem] object-cover rtl:-scale-x-100 z-10" />

      <div className="relative z-10 size-full flex flex-col justify-center items-center gap-5">
        <Image src={NVStudioLogo} alt="Nvidia Studio" className="w-24 h-18 object-contain -mt-10 mb-10" />
        <h1 className="heading-medium font-bold">
          {t("headerMedium")} 
        </h1>
        <h2 className="heading-large font-bold">
          {t("headerLarge")}
        </h2>
        <p className="text-large text-gray-200">
          <span>{t("location")} </span>
          <span>| </span>
          <span>{t("date")}</span>
        </p>
      </div>
    </div>
  );
}

export default NewHero;
