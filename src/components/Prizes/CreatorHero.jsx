"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CreatorsHero() {
  const t = useTranslations("creatorsHero")

  return (
    <div className="text-white w-screen flex items-center justify-start h-[34rem] relative overflow-hidden">
      <div className="max-w-xl mx-[5%] flex flex-col md:justify-center justify-between h-[90%]">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 backdrop-blur">
          {t("title")}
        </h3>
        <p className="text-lg lg:text-xl leading-relaxed backdrop-blur">
          {t("desc")}
        </p>
      </div>
      <Image src={'/higher-hero-img.jpg'} alt="creator hero" width={2000} height={2000} priority
        className="absolute size-full top-0 object-cover object-[60%] scale-105 -z-10 rtl:-scale-x-105" />
    </div>
  );
}
