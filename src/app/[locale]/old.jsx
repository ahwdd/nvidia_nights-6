import { useTranslations } from "next-intl";

import AboutEvent from "@/components/AboutEvent/AboutEvent";
import StudioBoxes from "@/components/StudioBoxes/StudioBoxes";
import AboutCompetition from "@/components/AboutCompetition/AboutCompetition";
import Categories from "@/components/Categories/Categories";
import Prizes from "@/components/Prizes/Prizes";
import NewHero from "@/components/Hero/Hero.jsx";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="flex flex-col gap-28">
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
