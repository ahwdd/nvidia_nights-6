"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import EventRegister from "../StudioBoxes/EventRegister.jsx";
import { X } from "lucide-react";
import { LuSend } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import Link from "next/link.js";

function NewHero() {
  const t = useTranslations("Hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isVideoOpen && videoRef.current) {
      videoRef.current.pause(); // Pause the video when the popup is closed
    }
  }, [isVideoOpen]);

  const handleOverlayClick = () => {
    setIsVideoOpen(false);
  };

  const handlePopupClick = (event) => event.stopPropagation();

  return (
    <div className="text-white px-10 lg:px-32 md:h-[calc(100dvh-84px)] bg-black relative">
      <div className="new-hero absolute inset-0 md:size-full w-[40rem] rtl:-scale-x-100 max-md:bg-opacity-50 z-10" />
      <div className="absolute inset-0 md:size-full w-[40rem] z-10 max-md:bg-gradient-to-b from-black to-transparent" />

      <div className="relative z-10 size-full">
        <div className="hero-text h-full flex flex-col justify-center gap-5 max-md:justify-between max-md:mx-auto max-md:py-8">
          <div className="flex flex-col justify-center gap-5 max-md:mt-8">
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span>{t("titleSpan1")} </span>
              <span>{t("titleSpan2")}</span>
              <br />
              <span>{t("titleSpan3")} </span>
              <span
                // style={{
                //   background: "linear-gradient(179.87deg, #74B800 70.8%, #83EC87 99.89%)",
                //   WebkitBackgroundClip: "text",
                //   WebkitTextFillColor: "transparent",
                //   backgroundClip: "text",
                //   textFillColor: "transparent",
                //   fontWeight: "bold",
                // }}
              >
                {t("titleSpan4")}
              </span>
            </h1>
            <p className="flex gap-2 items-center">
              <CiCalendar className="size-6 text-white stroke-1" />
              {t("date")}
            </p>
            <p className="flex gap-2">
              <LuSend className="size-6 text-white"/>
              {t("location")}
            </p>
          </div>

          <button onClick={() => setIsVideoOpen(true)}
              className="bg-mainGrey flex text-white items-center justify-center gap-2 font-medium px-4 text-lg py-2 w-fit
              hover:bg-mainGreen transition">
              <FaPlay className="size-4" />
              {t("video")}
          </button>
          <div className="flex md:gap-3 gap-2 w-full max-md:mt-8">
            <div className="space-y-3">
              <a href="https://lu.ma/30bfj43s" target="_blank" rel="noopener noreferrer"// onClick={() => setIsOpen(true)}
                className="bg-mainGreen px-4 py-3 text-black md:text-lg text-sm font-bold hover:brightness-150 transition">
                {t("registiration")}
              </a>
              <p className="text-mainGrey text-xxs">
                {t("competitionRegisterExplain")}
              </p>
            </div>
            
            <div className="space-y-3">
              <Link href={"#register"}
                className="border-mainGreen border-solid border-2 px-4 py-3 text-white md:text-lg text-sm font-bold
                transition hover:border-white">
                {t("competitionRegister")}
              </Link>
              <p className="text-mainGrey text-xxs">
                {t("competitionRegisterExplain")}
              </p>
            </div>
          </div>
          {/* <a
            className="w-28 -mt-5"
            href="https://www.asus.com/sa-en/microsite/proart-creator-products/"
            target="_blank"
          >
            {" "}
            <Image src={asus} alt="asus logo" />
          </a> */}
        </div>

        <div onClick={handleOverlayClick}
          style={{ background: "#000000a8" }}
          className={`video-popup  inset-0 z-50  fixed h-screen ${
            isVideoOpen ? "flex" : "hidden"
          } items-center justify-center`}
        >
          <video onClick={handlePopupClick}
            ref={videoRef}
            className={`w-2/3 transition-all duration-300 ease-linear`}
            controls>
            <source src="video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <button onClick={handleOverlayClick}
            className="bg-mainGreen p-3 text-black absolute top-5 left-5">
            <X />
          </button>
        </div>

        <EventRegister
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
}

export default NewHero;
