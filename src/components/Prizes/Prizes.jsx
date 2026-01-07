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
        <div role="img" aria-label="nvidia rtx laptop" className="nv-laptop-bg w-full max-w-[645px] aspect-video"/>
      </div>
    </div>
  );
}

export default Prizes;
