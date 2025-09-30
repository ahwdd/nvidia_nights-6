import Image from "next/image";
import PolygonH2 from "../PolygonH2";
import maskAbout from "/public/mask-about.png";
import { useTranslations } from "next-intl";
// import video from "/video.mp4";
import Video from "next-video";

function AboutEvent() {
  const t = useTranslations("AboutEvent");
  return (
    <div className="">
      <svg className="absolute hidden right-0 w-[35px] lg:w-[62px]"
        width="62" height="177" viewBox="0 0 62 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M151.763 1.39003C151.497 0.56188 150.728 0 149.858 0H56.0338C55.5024 0 54.9929 0.211433 54.6177 0.587639L0.583939 54.7631C0.210007 55.138 0 55.6459 0 56.1754V119.113C0 119.632 0.20166 120.13 0.562378 120.503L54.6142 176.39C54.991 176.78 55.5098 177 56.0518 177H205.259C206.615 177 207.577 175.681 207.164 174.39L151.763 1.39003Z"
          fill="url(#paint0_linear_4_9)"/>
        <defs>
          <linearGradient id="paint0_linear_4_9" x1="104" y1="0" x2="104" y2="177" gradientUnits="userSpaceOnUse">
            <stop stopColor="#83EC87" />
            <stop offset="1" stopColor="#74B800" />
          </linearGradient>
        </defs>
      </svg>
      {/*   background: "url('../mask-about.png') center center no-repeat",
            backgroundSize: "cover", */}
      <div className="flex flex-col gap-5 justify-around w-full max-w-7xl mx-auto px-4">
        <PolygonH2 text={t("mainTitle")} />
        {/* <p className="w-full text-center max-w-3xl font-normal relative text-xl">
          {t("title1")}
          <span className="bg-mainGreen font-bold mx-1 px-1 text-xl tracking-[5%]">
            {t("span")}
          </span>
          {t("title2")}
        </p> */}
        <div className="w-full font-normal relative text-lg space-y-4">
          <p>
            <span dangerouslySetInnerHTML={{__html: t("title1")}} />
            <a href="https://www.nvidia.com/" class="w-fit relative mx-1">
              <span dangerouslySetInnerHTML={{__html: t("brand")}} />
              <span class="w-4/5 h-0.5 bg-mainGreen absolute bottom-0 left-1/2 -translate-x-1/2"/>
            </a>
            <span dangerouslySetInnerHTML={{__html: t("title2")}}></span>
          </p>
          <p dangerouslySetInnerHTML={{__html: t("title3")}} />
        </div>

        <Image alt="mask" src={maskAbout}
          className="absolute hidden -z-10 mx-14 w-[310px] h-[200px]  lg:w-[510px] lg:h-[250px]"/>
      </div>
    </div>
  );
}

export default AboutEvent;
