// components/Categories.jsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import VideoModal from "./VideoModal";
import Link from "next/link";

export default function Categories() {
  const t = useTranslations("Categories");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalPoster, setModalPoster] = useState("");
  const modalSources= [
      // { label: "480", src: `https://arabhardware.net/events/nvidia-studio-6.mp4` },
      // { label: "720", src: `https://arabhardware.net/events/nvidia-studio-6.mp4` },
      { label: "1080", src: `https://arabhardware.net/events/read_1080.mp4` },
      // { label: "2048", src: `https://arabhardware.net/events/nvidia-studio-6.mp4` },
    ].filter(Boolean)

  const openVideo = ({ poster }) => {
    setModalPoster(poster);
    setModalOpen(true);
  };

  const theCategories = [
    {
      title: t("cgi"),
      desc: t("cgiDesc"),
      winner: t("cgiWinner"),
      imgClass: "cat-cgi-bg",
      playIcon: false,
    },
    {
      title: t("photography"),
      desc: t("photographyDesc"),
      winner: t("photographyWinner"),
      imgClass: "cat-photography-bg",
      playIcon: false,
    },
    {
      title: t("fashion"),
      desc: t("fashionDesc"),
      winner: t("fashionWinner"),
      imgClass: "cat-fashion-bg",
      playIcon: false,
    },
    {
      title: t("interior"),
      desc: t("interiorDesc"),
      winner: t("interiorWinner"),
      imgClass: "cat-interior-bg",
      playIcon: false,
    },
    {
      title: t("videography"),
      desc: t("videographyDesc"),
      winner: t("videographyWinner"),
      imgClass: "cat-videography-bg",
      playIcon: true,
      videoBase: "winner-vid",
    },
  ];

  return (
    <div id="categories" className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[1290px] mx-auto max-md:px-8 text-center gap-10 relative">
        <h4 className="heading-medium font-bold">{t("title")}</h4>

        <div className="flex flex-wrap justify-center items-start gap-x-6 gap-y-10 w-full">
          {theCategories.map((cat, i) => (
            <div key={i} id={`category-${cat.title}`}
              className="w-full lg:w-[calc(33%-.8rem)] sm:w-[calc(33%-.9rem)] flex flex-col items-center justify-center gap-5">
              <div className="relative w-full group">
                {/* <Image src={cat.img} alt={cat.title || "category title"} priority={i < 3} width={300} height={300}
                  className="w-1/3 aspect-square mx-auto object-contain invert"/> */}
                  <div role="img" aria-label={cat.title || "category title"}
                    className={`${cat.imgClass} w-1/3 aspect-square mx-auto invert`} />
                {/* <p className="absolute rtl:left-3 ltr:right-3 bottom-2 text-gray-200 text-xxs">
                  {cat.winner}
                </p> */}

                {cat.playIcon && (
                  <button aria-label={`Play ${cat.title} winner video`}
                    onClick={() =>
                      openVideo({
                        poster: `/icons/${cat.videoBase || "film"}.png`,
                        baseName: cat.videoBase || "winner-vid",
                      })
                    }
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-transparent transition-transform"
                  >
                    <IoPlay className="w-16 h-16 opacity-90 drop-shadow-lg" />
                  </button>
                )}
              </div>

              <h5 className="font-bold heading-small">{cat.title}</h5>
              <p className="text-gray-200 text-medium">{cat.desc}</p>
            </div>
          ))}
        </div>

        <Link href="#submit" target="_self" rel="noopener noreferrer"
          className="button-large font-bold bg-mainGreen hover:bg-mainGreenHover transition text-black p-space mt-10 w-fit flex items-center justify-center gap-2"
        >
          <span>{t("submit")}</span>
        </Link>
      </div>

      <VideoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        poster={modalPoster?.src || modalPoster}
        sources={modalSources}
      />
    </div>
  );
}