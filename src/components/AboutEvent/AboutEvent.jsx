import { useTranslations } from "next-intl";
import { ExternalLinkIcon } from "lucide-react";

function AboutEvent() {
  const t = useTranslations("AboutEvent");
  return (
    <div id="about-event" className="py-8 xl:py-10 flex items-center justify-center w-screen overflow-hidden">
      <div className="flex flex-col max-md:gap-3 items-center w-full max-w-[66rem] mx-auto md:px-4 px-8 text-center text-large">
          <p className="">{t("title1")}</p>
          <p className="">{t("title2")} </p>
          <p className="">{t("title3")} </p>
          <p className="">{t("title4")} </p>
          <p className="">{t("title5")} </p>

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
