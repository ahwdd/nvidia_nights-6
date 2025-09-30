import Link from "next/link";
import Image from "next/image";
import AHWLogo from "@/../public/ahw-logo.png";
import { BsNvidia } from "react-icons/bs";
import NvidiaTextLogo from '@/../public/nvidia-text.png'
import FooterSocialLinks from "./FooterSocialLinks";

export default function FooterLogos({ t }) {
  return (
    <div className="w-screen h-28 absolute left-0 bottom-0 bg-white text-black flex justify-center px-8">
      <div className="w-full flex flex-col justify-center gap-2">

        <div className="flex items-center justify-center gap-2 w-fit">
          <BsNvidia className="size-6" />
          <Image src={NvidiaTextLogo} alt="nvidia" className="w-16" />
        </div>
        <p className="text-zinc-500 text-xs">
          <span className="">{t("copyright")} </span>
          <span>©{new Date().getFullYear()} </span>
          <span>NVIDIA Corporation</span>
        </p>
        <div className="flex lg:flex-row gap-3 items-center">
          <Image src={AHWLogo} alt="arabhardware logo" className="w-4 invert" />
          <p className="text-xs">
            {t("managedBy")}
            <br className="lg:block hidden" /> by <br className="lg:hidden" />
            <a target="_blank" href="https://arabhardware.net/"
              className="font-semibold">
              Arabhardware
            </a>
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center gap-2">
        <a href="https://www.nvidia.com/en-me/studio/"
          className="text-gray-500">
          {t("follow")}
        </a>

        <FooterSocialLinks />
      </div>
    </div>
  );
}
