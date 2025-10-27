import Image from "next/image";
import PolygonH2 from "../PolygonH2";
import maskAbout from "/public/mask-about.png";
import { useTranslations } from "next-intl";
import { ExternalLinkIcon } from "lucide-react";

function AboutEvent() {
  const t = useTranslations("AboutEvent");
  return (
    <div id="about-event" className="py-8 xl:py-10 flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-2 text-center">
          <p className="text-large">
            {t("title1")}
          </p>
          <p className="text-large">
            {t("title2")} 
          </p>

          <a href="https://luma.com/8mrbuqpn" target="_blank" rel="noopener noreferrer"
          className="button-large font-bold bg-mainGreen text-black px-3 py-2 mt-10 w-fit flex items-center justify-center gap-2">
            <span>{t("register")}</span>
            <ExternalLinkIcon className="size-5 stroke-2" />
          </a>
      </div>
    </div>
  );
}

export default AboutEvent;
