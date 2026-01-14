import { useTranslations } from "next-intl";
import { ExternalLinkIcon } from "lucide-react";

function AboutEvent() {
  const t = useTranslations("AboutEvent");
  return (
    <div id="about-event" className="py-8 xl:py-10 flex items-center justify-center w-full overflow-hidden">
      <div className="flex flex-col gap-3 items-center w-full max-w-[66rem] mx-auto md:px-4 px-8 text-center text-large">
          <p className="">{t("title1")}</p>
      </div>
    </div>
  );
}

export default AboutEvent;
