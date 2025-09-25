"use client";
import Image from "next/image";
import hero from "/public/hero-img.png";
// import hero from "/public/hero-img.png";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Popup from "../Popup";
import EventRegister from "../StudioBoxes/EventRegister";
import { useEffect, useRef, useState } from "react";
import RegisterSucces from "../RegisterForm/RegisterSucces";
import { X } from "lucide-react";

function Hero() {
  const t = useTranslations("Hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const videoRef = useRef(null);
  {
    /* <h1>{t("title")}</h1> */
  }

  useEffect(() => {
    if (!isVideoOpen && videoRef.current) {
      videoRef.current.pause(); // Pause the video when the popup is closed
    }
  }, [isVideoOpen]);

  return (
    <div className="mt-20 lg:mt-10 flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center items-center lg:justify-between ">
      <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-5 w-full lg:w-1/2">
        <h1 className=" text-5xl lg:text-7xl font-medium">
          <span>{t("titleSpan1")} </span> <br className="lg:block hidden" />
          <span>{t("titleSpan2")}</span>
          <br />
          <span>{t("titleSpan3")} </span>
          <span
            style={{
              background:
                "linear-gradient(179.87deg, #74B800 70.8%, #83EC87 99.89%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            {t("titleSpan4")}
          </span>
        </h1>

        <div className="flex flex-col gap-3 [&>*]:text-lg ">
          <p className="flex gap-2 text-mainGrey">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.63974 15.9144C0.63974 17.4344 1.80208 18.5967 3.32207 18.5967H15.8396C17.3596 18.5967 18.522 17.4344 18.522 15.9144V8.76151H0.63974V15.9144ZM15.8396 2.50273H14.0514V1.60862C14.0514 1.07215 13.6938 0.714508 13.1573 0.714508C12.6208 0.714508 12.2632 1.07215 12.2632 1.60862V2.50273H6.89852V1.60862C6.89852 1.07215 6.54087 0.714508 6.00441 0.714508C5.46794 0.714508 5.11029 1.07215 5.11029 1.60862V2.50273H3.32207C1.80208 2.50273 0.63974 3.66507 0.63974 5.18506V6.97328H18.522V5.18506C18.522 3.66507 17.3596 2.50273 15.8396 2.50273Z"
                fill="#74B800"
              />
            </svg>
            {t("date")}
          </p>

          <p className="flex gap-2 text-mainGrey">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.11386 17.2471C9.5846 18.6622 10.4775 18.7121 11.1074 17.3631L18.2684 2.0186C18.8983 0.666939 18.3142 0.0841848 16.9641 0.714152L1.61976 7.87447C0.269576 8.50444 0.320832 9.39745 1.73441 9.86959L7.26866 11.7136L9.11386 17.2471Z"
                fill="#74B800"
              />
            </svg>
            {t("location")}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            className="rounded-lg bg-mainGreen px-6 py-2 text-[1.4rem] font-medium"
            onClick={() => setIsOpen(true)}
          >
            {t("registiration")}
          </button>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="bg-[#D1D1D187] flex  items-center justify-center gap-2 font-medium px-5 rounded-lg text-xl py-2"
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
                fill="black"
              />
            </svg>
            {t("video")}
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Image alt="desktop" src={hero} className="object-cover" />
      </div>
      {/* 
      <Popup>
        <EventRegister />
      </Popup> */}
      <div
        style={{ background: "#000000a8" }}
        className={`video-popup  inset-0 z-50  fixed h-screen ${
          isVideoOpen ? "flex" : "hidden"
        } items-center justify-center`}
      >
        <video
          ref={videoRef}
          className={`w-2/3 transition-all duration-300 ease-linear`}
          controls
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={() => setIsVideoOpen(false)}
          className="bg-mainGreen p-3 text-white absolute top-5 left-5"
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

export default Hero;
