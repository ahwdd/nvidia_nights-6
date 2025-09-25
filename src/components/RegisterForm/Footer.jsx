"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import FooterSections from "./footer/FooterSections";
import FooterSocialLinks from "./footer/FooterSocialLinks";
import FooterLogos from "./footer/FooterLogos";

export default function Footer() {
  const t = useTranslations("Register");
  const { locale } = useRouter();

  return (
    <footer className="w-full px-5 flex flex-col gap-8 mt-20 pb-28 z-20">
      
      <FooterSections t={t} locale={locale} />

      <div className="flex items-center justify-center gap-8 ml-auto">
        <a href="https://www.nvidia.com/en-me/studio/"
          className="text-gray-500">
          {t("follow")}
        </a>

        <FooterSocialLinks />
      </div>

      <FooterLogos t={t} />
    </footer>
  );
}
