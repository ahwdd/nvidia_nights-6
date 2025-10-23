"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function TermsButton() {
  const t = useTranslations("Register");
  const { locale } = useParams();

  const handleTermsClick = () => {
    const currentLocale = locale ?? "en";
    const pdfPath = currentLocale === "ar" ? "/pdfs/arabic-terms.pdf" : "/pdfs/english-terms.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <button onClick={handleTermsClick} className="underline">
      {`${t("terms")} ${t("and")} ${t("conditions")}`}
    </button>
  );
}
