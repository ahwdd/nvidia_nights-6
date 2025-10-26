
import { useTranslations } from "next-intl";
import Image from "next/image";

import NVStudioLogo from '@/../public/nights-6/NV-Studio-dark.png'
import MuseumOfTheFuture from '@/../public/nights-6/museum-of-the-future.png'
import FooterSocialLinks from "./FooterSocialLinks";

function Rights() {
  const t = useTranslations("footer");

  return (
    <div className="w-full max-w-[954px] mx-auto px-2 bg-white text-black pt-10 pb-14 space-y-8 relative">
        <div className="flex items-center justify-center gap-14">
            <Image src={NVStudioLogo} alt="Nvidia Studio" className="h-14 object-contain" />
            <Image src={MuseumOfTheFuture} alt="Museum of the future" className="h-16 object-contain" />
        </div>
        <p className="text-medium text-center">
            {t("copyrights")}
        </p>

        <FooterSocialLinks />
    </div>
  )
}

export default Rights