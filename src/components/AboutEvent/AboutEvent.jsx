import Image from "next/image";
import { useTranslations } from "next-intl";
import { ExternalLinkIcon } from "lucide-react";

function AboutEvent() {
  const t = useTranslations("AboutEvent");
  return (
    <div id="about-event" className="py-8 xl:py-10 flex items-center justify-center w-screen overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-5xl mx-auto px-4 text-center">
          <p className="text-large">
            {t("title1")}
          </p>
          <p className="text-large">
            {t("title2")} 
          </p>

          <a href="https://luma.com/8mrbuqpn" target="_blank" rel="noopener noreferrer"
          className="button-large font-bold bg-mainGreen hover:bg-mainGreenHover transition text-black p-space mt-10 w-fit flex items-center justify-center gap-2">
            <span>{t("register")}</span>
            <ExternalLinkIcon className="size-5 stroke-2" />
          </a>
      </div>
    </div>
  );
}

export default AboutEvent;
