import Image from "next/image";
import maskStudioNight from "/public/studio-box-mask.png";
import StudioBox from "../StudioBox";
import PolygonH2 from "../PolygonH2";
import { useTranslations } from "next-intl";
import MobileBoxesSlider from "./MobileBoxesSlider";

function StudioBoxes() {
  const t = useTranslations("PrevEvents");

  const previousEventsData = [
    {
      city: t("AbuDhabi"),
      date: t("dateAbuDhabi"),
      url: "https://www.youtube.com/watch?v=_VIFlIWutwc",
      img: "AbuDhabi.jpg",
    },

    {
      city: t("Riydah"),
      date: t("dateRiydah"),
      url: "https://nvidiasn3.com/",
      img: "Riyadh.jpg",
    },

    {
      city: t("Istanbul"),
      date: t("istanbulDate"),
      url: "https://nvidiasn4.com/",
      img: "Istanbul.jpg",
    },

    {
      city: t("Cairo"),
      date: t("cairoDate"),
      url: "https://nvidiasn5.com/",
      img: "Cairo.jpg",
    },
  ];
  return (
    <div className="">
      <Image alt="mask" className="w-[150px] hidden absolute left-0 -z-10" src={maskStudioNight}/>

      <div className=" max-w-7xl mx-auto px-4">
        <div className="flex my-5">
          <PolygonH2 text={t("title")} />
        </div>
        {/* desktop grid */}
        <div className="sm:grid hidden grid-cols-3 lg:grid-cols-4 items-center justify-between gap-5">
          {previousEventsData.map((element, i) => (
            <StudioBox
              url={element.url}
              t={t}
              key={i}
              img={element.img}
              index={i + 2}
              city={element.city}
              date={element.date}
            />
          ))}
        </div>

        <div className="flex sm:hidden flex-wrap items-center justify-center gap-5">
          <MobileBoxesSlider boxes={previousEventsData} />
        </div>
      </div>
    </div>
  );
}

export default StudioBoxes;
