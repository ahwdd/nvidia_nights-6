import { useTranslations } from "next-intl";
import Image from "next/image";

import { MdOpenInNew } from "react-icons/md";
import NVDubai from '@/../public/nights-6/nv-dubai.jpg'
import NVDubaiDesktop from '@/../public/nights-6/nv-dubai-desktop.jpg'
import { renderDateWithSuperscript } from "@/services/renderDateWithSuperscript";


export default function Deadline() {
  const t = useTranslations("footer");

  return (
    <div className="flex bg-black text-white w-screen overflow-hidden items-center justify-center relative md:h-80 h-60">
      <Image src={NVDubaiDesktop} alt="Museum of the futur in Dubai"
      className="size-full max-w-6xl ltr:ml-40 rtl:mr-40 object-fill md:block hidden" />
      <Image src={NVDubai} alt="Museum of the futur in Dubai"
      className="size-full max-w-6xl ltr:ml-10 rtl:mr-10 object-fill md:hidden block" />

      <div className="absolute inset-0 z-10 space-y-2 flex items-center justify-center">
        <div className="flex flex-col items-start justify-between w-full gap-4 max-w-[954px] px-2 font-bold">
          <span className="heading-smallest">
            {renderDateWithSuperscript(t("date"))}
          </span>
          <span className="heading-medium">
            {t('location')}
          </span>
          <a href="https://luma.com/8mrbuqpn" target="_blank" rel="noopener noreferrer" 
          className="button-large flex items-center justify-start gap-2 group p-space">
            <span>{t('register')}</span>
            <MdOpenInNew className="text-mainGreen group-hover:text-mainGreenHover transition max-md:size-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
