import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";

function StudioBox({ img, index, url, t, city = "Riyadh", date = "15 feb 2024" }) {
  return (
    <div className="bg-white shadow-default hover:shadow-default-hover overflow-hidden w-full max-w-sm">
      <Image src={`/${img}`} width={1500} height={1500} alt={city}
        className="w-full aspect-[16/7] object-cover" />

      <div className="py-2 px-4 flex flex-col gap-1">
        <div className="text-xs text-gray-400">
          {city}
        </div>

        <h3 className="text-lg font-bold">
          {t("nvidia")} {index}
        </h3>

        <p className="text-xs text-gray-500 flex items-center gap-1">
          <CiCalendar/>
          {date}
        </p>

        <a href={url} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-1 font-semibold mt-2 text-sm">
          {t("video")}
            <MdArrowForwardIos className="text-mainGreen rtl:-scale-100" />
        </a>
      </div>
    </div>
  );
}

export default StudioBox;
