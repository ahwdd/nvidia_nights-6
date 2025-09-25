import { useTranslations } from "next-intl";

import Hero from "@/components/Hero/Hero";
import AboutEvent from "@/components/AboutEvent/AboutEvent";

import StudioBoxes from "@/components/StudioBoxes/StudioBoxes";
import AboutCompetition from "@/components/AboutCompetition/AboutCompetition";
import Categories from "@/components/Categories/Categories";
import Prizes from "@/components/Prizes/Prizes";
import NewHero from "@/components/NewHero/NewHero.jsx";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      {/* <h1>{t("title")}</h1> */}
      <div className="flex flex-col gap-28">
        {/* <Hero /> */}
        <NewHero />
        <div className="flex flex-col gap-28 px-5">
          <AboutEvent />
          <StudioBoxes />
          <AboutCompetition />
          <Categories />
          <Prizes />
        </div>
      </div>
    </>
  );
}
