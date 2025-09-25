import Image from "next/image";
import maskStudioNight from "/public/studio-box-mask.png";
import StudioBox from "../StudioBox";
import PolygonH2 from "../PolygonH2";
import { useTranslations } from "next-intl";

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
  ];
  return (
    <div>
      <Image
        alt="mask"
        className="w-[150px] hidden absolute left-0 -z-10"
        src={maskStudioNight}
      />

      <div className="flex justify-center my-5">
        <PolygonH2 text={t("title")} />
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-5">
        {previousEventsData.map((e, i) => (
          <StudioBox
            url={e.url}
            t={t}
            key={i}
            img={e.img}
            index={i + 2}
            city={e.city}
            date={e.date}
          />
        ))}
      </div>
    </div>
  );
}

export default StudioBoxes;
