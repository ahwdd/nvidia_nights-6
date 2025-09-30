import Image from "next/image";
import rectangle from "/public/rectangle-left.png";
import PolygonH2 from "../PolygonH2";
import maskCompetition from "/public/mask-competition.png";
import { useTranslations } from "next-intl";

function AboutCompetition() {
  const t = useTranslations("AboutCompetition");
  return (
    <div className="">
      {/* <Image src={rectangle} /> */}
      <div className="flex flex-col gap-5 relative max-w-7xl mx-auto px-4">
        <PolygonH2 text={t("title")} />
        <div className="w-full font-normal relative text-lg space-y-4">
          <p>
            <a href="https://www.nvidia.com/" class="w-fit relative mx-1">
              <span dangerouslySetInnerHTML={{__html: t("brand")}} />
              <span class="w-4/5 h-0.5 bg-mainGreen absolute bottom-0 left-1/2 -translate-x-1/2"/>
            </a>
            <span dangerouslySetInnerHTML={{__html: t("desc")}} />
          </p>
          <p dangerouslySetInnerHTML={{__html: t("desc1")}} />
        </div>

        {/* <Image
          alt="mask"
          src={maskCompetition}
          className="absolute hidden w-[300px] lg:w-[30%] -z-10 lg:right-20 right-14"
        />
        <Image
          alt="mask"
          src={maskCompetition}
          className="absolute  hidden w-full lg:w-[30%] -z-10 left-20  top-40"
        /> */}
      </div>

      {/* <svg
        width="58"
        height="177"
        viewBox="0 0 58 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute hidden left-0 lg:w-fit w-12 -mt-56 -z-10"
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

export default AboutCompetition;
