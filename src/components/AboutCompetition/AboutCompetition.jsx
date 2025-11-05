import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";

function AboutCompetition() {
  const t = useTranslations("AboutCompetition");
  return (
    <div id="about-competition" className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[954px] mx-auto text-center gap-6 relative">
        <h3 className="heading-medium font-bold">
          {t("title")}
        </h3>
        <p className="text-medium text-gray-200">
          {t("desc")}
        </p>
        <p className="text-medium text-gray-200">
          {t("desc1")}
        </p>
        <a href="#submit" target="_self" rel="noopener noreferrer"
        className="font-bold flex items-center justify-center md:gap-2 gap-1 w-fit button-large md:hover:gap-4 transition-all group p-space">
          <span>
            {t("submit")}
          </span>
          <ChevronRight className="rtl:-scale-100 text-mainGreen group-hover:text-mainGreenHover transition max-md:size-6 max-sm:size-4" />
        </a>
      </div>
    </div>
  );
}

export default AboutCompetition;
