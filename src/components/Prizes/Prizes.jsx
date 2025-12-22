import Image from "next/image";
import { useTranslations } from "next-intl";

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
        <Image src={`/nights-6/general/nv-labtop.jpg`} alt="nvidia rtx laptop" className="w-full max-w-[645px] aspect-video object-fill" />
      </div>
    </div>
  );
}

export default Prizes;
