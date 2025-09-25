"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import EventRegister from "../StudioBoxes/EventRegister.jsx";
import { X } from "lucide-react";
import { LuSend } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";

import Image from "next/image.js";

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
    <div
      className="new-hero text-white px-10 lg:px-32 h-[calc(100dvh-84px)] max-md:bg-opacity-50"
      style={{
        backround: 'url("/hero-img") center center no-repeat',
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          direction: "ltr",
        }}
        className="hero-text h-full flex flex-col justify-center gap-5 max-md:justify-between max-md:mx-auto max-md:py-8"
      >
        <div className="flex flex-col justify-center gap-5 max-md:backdrop-blur">
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
        <div className="flex gap-3 sm:flex-row flex-col">
          <a  href="https://lu.ma/30bfj43s" target="_blank" rel="noopener noreferrer"
            className="bg-mainGreen px-6 py-2 text-black text-[1.4rem] font-medium"
            // onClick={() => setIsOpen(true)}
          >
            {t("registiration")}
          </a>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="bg-mainGreen flex text-black  items-center justify-center gap-2 font-medium px-5 text-xl py-2"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.2065 18.1913C1.8845 18.1913 1.56427 18.1033 1.28098 17.9292C1.02616 17.771 0.815846 17.5506 0.669916 17.2886C0.523985 17.0266 0.447251 16.7317 0.44696 16.4318V2.3557C0.44696 1.74514 0.763677 1.17858 1.28098 0.858349C1.53637 0.701332 1.82749 0.611845 2.12699 0.598302C2.42648 0.584758 2.72449 0.647604 2.99301 0.78093L17.0693 7.81899C17.3616 7.96538 17.6073 8.19022 17.7791 8.46833C17.9508 8.74645 18.0418 9.06688 18.0418 9.39375C18.0418 9.72063 17.9508 10.0411 17.7791 10.3192C17.6073 10.5973 17.3616 10.8221 17.0693 10.9685L2.99301 18.0066C2.74667 18.1297 2.47395 18.1913 2.2065 18.1913Z"
                fill="#000"
              />
            </svg>
            {t("video")}
          </button>
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

      <div
        onClick={handleOverlayClick}
        style={{ background: "#000000a8" }}
        className={`video-popup  inset-0 z-50  fixed h-screen ${
          isVideoOpen ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <video
          onClick={handlePopupClick}
          ref={videoRef}
          className={`w-2/3 transition-all duration-300 ease-linear`}
          controls
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={handleOverlayClick}
          className="bg-mainGreen p-3 text-black absolute top-5 left-5"
        >
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
  );
}

export default NewHero;
