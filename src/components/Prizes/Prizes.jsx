import Image from "next/image";
import { useTranslations } from "next-intl";
import NVLaptop from '@/../public/nights-6/nv-labtop.jpg'
import PrevWinners from "../Winners/PrevWinners";

function Prizes() {
  const t = useTranslations("Prizes");
  return (
    <div id="prizes" className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[954px] mx-auto max-md:px-8 text-center gap-10 relative">
        <h4 className="heading-medium font-bold">
          {t("title")}
        </h4>
        <p className="text-medium text-gray-200">
          {t("desc")}
        </p>
        {/* <Image src={NVLaptop} alt="nvidia rtx laptop" className="w-full max-w-[645px] aspect-video object-fill" /> */}
        <PrevWinners />
      </div>
    </div>
  );
}

export default Prizes;
