import { useTranslations } from "next-intl";

function AboutCompetition() {
  const t = useTranslations("AboutCompetition");

  const rich = {
    b: (chunks) => <strong>{chunks}</strong>,
    i: (chunks) => <em>{chunks}</em>,
  };

  return (
    <div id="about-competition" className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[954px] mx-auto text-center gap-6 relative max-md:px-8 max-md:pb-8">
        <h3 className="heading-medium font-bold">{t("title")}</h3>

        <div className="text-medium text-gray-200 space-y-2">
          <p>{t.rich("desc", rich)}</p>
          <p>{t.rich("desc1", rich)}</p>
          <p>{t.rich("desc2", rich)}</p>
          <p>{t.rich("desc3", rich)}</p>
          <p className="rtl:hidden">{t.rich("desc4", rich)}</p>
          <p className="rtl:hidden">{t.rich("desc5", rich)}</p>
        </div>

        {/* <a href="#submit" target="_self" rel="noopener noreferrer"
        className="font-bold flex items-center justify-center md:gap-2 gap-1 w-fit button-large md:hover:gap-4 transition-all group p-space">
          <span>
            {t("submit")}
          </span>
          <ChevronRight className="rtl:-scale-100 text-mainGreen group-hover:text-mainGreenHover transition max-md:size-6 max-sm:size-4" />
        </a> */}
      </div>
    </div>
  );
}

export default AboutCompetition;
