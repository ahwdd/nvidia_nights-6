import { useTranslations } from "next-intl";

import AboutEvent from "@/components/AboutEvent/AboutEvent";
import AboutCompetition from "@/components/AboutCompetition/AboutCompetition";
import Categories from "@/components/Categories/Categories";
import Prizes from "@/components/Prizes/Prizes";
import Hero from "@/components/Hero/Hero.jsx";
import Deadline from "@/components/RegisterForm/footer/Deadline";
import PrevWinners from "@/components/Winners/PrevWinners";
import AboutEventCompelete from "@/components/AboutEvent/AboutEventCompelete";
import WhereToBuy from "@/components/WhereToBuy/WhereToBuy";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="w-screen overflow-hidden">
        <Hero />
        <AboutEvent />
        <Deadline />
        <AboutEventCompelete />
        <div className="flex flex-col gap-8 sm:gap-14 xl:gap-28 px-2 py-10 sm:py-14 xl:py-20 bg-black text-white">
          <AboutCompetition />
          <Categories />
          <div className="w-full max-w-[1290px] mx-auto h-0.5 bg-gray-600" />
          {/* <Prizes /> */}
          <PrevWinners />
          <WhereToBuy />
        </div>
      </div>
    </>
  );
}
