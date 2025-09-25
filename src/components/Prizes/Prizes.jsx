import Image from "next/image";
import PolygonH2 from "../PolygonH2";
import prizesMask from "/public/prizes-mask.png";
import nvidiaLap from "/public/nvidia-lap.png";
import { useTranslations } from "next-intl";
import InnerSection from "./InnerSection";
import PrizeIcon from '@/../public/icons/prize1.png'
import CreatorsHero from "./CreatorHero";
import Creators from "./Creators";

function Prizes() {
  const t = useTranslations("Prizes");
  return (
    <div id="prizes" className="lg:mx-10">
      <Image alt="mask" src={prizesMask} className="absolute hidden right-0" />
      <div className="flex items-center flex-col">
        <PolygonH2 text={t("title")} />
        <p className="text-center max-w-[52rem] text-xl rtl:text-lg text-[1.1rem] w-full my-7">{t("mainDesc")}</p>

        {/* <InnerSection
          img={PrizeIcon}
          title1={t("title1")}
          subTitle={"NVIDIA RTX"}
          title={t("title2")}
          description={t("desc2")}
          bgImage={nvidiaLap}
        /> */}
        <CreatorsHero />
        <Creators />
        {/* <div style={{ boxShadow: "0px 0px 8px 0px #00000014" }}
          className="bg-white overflow-hidden flex flex-col lg:flex-row items-center gap-10"
        >
          <div className="flex flex-col w-full gap-5  px-7 py-2 lg:px-10 ">
            <h3 className="text-4xl font-medium">{t("title2")} </h3>
            <p className="text-xl tracking-[5%] leading-10 font-normal max-w-3xl">
              {t("desc2")}
            </p>
          </div>

          <Image
            alt="laptop"
            src={nvidiaLap}
            className="self-start -mx-8 lg:w-[45%] lg:-ml-24"
          />
        </div> */}
      </div>

      {/* <svg
        width="58"
        height="177"
        viewBox="0 0 58 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 hidden lg:w-fit w-12 -mt-80"
      >
        <path
          d="M-93.7627 1.39003C-93.4975 0.56188 -92.7275 0 -91.858 0H1.96625C2.49759 0 3.00708 0.211433 3.38231 0.587639L57.4161 54.7631C57.79 55.138 58 55.6459 58 56.1754V119.113C58 119.632 57.7983 120.13 57.4376 120.503L3.38577 176.39C3.00897 176.78 2.49016 177 1.94815 177H-147.259C-148.615 177 -149.577 175.681 -149.164 174.39L-93.7627 1.39003Z"
          fill="url(#paint0_linear_8_227)"
        />

        <defs>
          <linearGradient
            id="paint0_linear_8_227"
            x1="-46"
            y1="0"
            x2="-46"
            y2="177"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#74B800" />
            <stop offset="1" stopColor="#83EC87" />
          </linearGradient>
        </defs>
      </svg> */}
    </div>
  );
}

export default Prizes;
