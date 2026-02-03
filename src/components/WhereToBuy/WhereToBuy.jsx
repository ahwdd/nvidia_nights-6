"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

export default function WhereToBuy() {
  const t = useTranslations("WhereToBuy");
  const sliderRef = useRef(null);
  // const [activeCountry, setActiveCountry] = useState("kuwait");

  // const countries = [
  //   { id: "kuwait", name: t("kuwait") || "Kuwait" },
  //   { id: "uae", name: t("uae") || "United Arab Emirates" },
  //   { id: "saudi", name: t("saudi") || "Saudi Arabia" },
  // ];
  let isDown = false;
  let startX = 0;
  let startScroll = 0;

  const onPointerDown = (e) => {
    const el = sliderRef.current;
    if (!el) return;
    isDown = true;
    el.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startScroll = el.scrollLeft;
    el.classList.add("dragging");
  };

  const onPointerMove = (e) => {
    const el = sliderRef.current;
    if (!el || !isDown) return;
    const x = e.clientX;
    const walk = (x - startX) * 1; // multiplier for speed (1 is neutral)
    el.scrollLeft = startScroll - walk;
  };

  const endDrag = (e) => {
    const el = sliderRef.current;
    if (!el) return;
    isDown = false;
    try {
      if (e) el.releasePointerCapture(e.pointerId);
    } catch (err) {
    }
    el.classList.remove("dragging");
  };

  const links = [
    {
      href: "https://www.virginmegastore.ae/en/nvidia-studio",
      aria: "Virgin Megastore Nvidia Studio Nights",
      bgClass: "virgin-buy-bg",
      w: "size-20 sm:size-32",
      h: "",
    },
    {
      href: "https://www.geekay.com/en/nvidia-studio-nights-6",
      aria: "Geekay Nvidia Studio Nights",
      bgClass: "geekay-buy-bg",
      w: "w-32 sm:min-w-48",
      h: "h-20",
    },
    {
      href: "https://www.infiniarc.com/en/landing/Nvidiastudio",
      aria: "Infiniarc Nvidia Studio Nights",
      bgClass: "infiniarc-buy-bg",
      w: "w-40 sm:min-w-52",
      h: "h-12",
    },
    {
      href: "https://hyperpc.ae/company/news/studio-nights-6",
      aria: "Hyperpc Nvidia Studio Nights",
      bgClass: "hyperpc-buy-bg",
      w: "w-40 sm:min-w-52",
      h: "h-12",
    },
  ];

  return (
    <div className="flex items-center justify-center py-10 sm:py-14 xl:py-20">
      <div className="flex flex-col items-center w-full max-w-[1290px] mx-auto max-md:px-8 text-center gap-10">
        <h4 className="heading-medium font-bold text-white">
          {t("title") || "Where to Buy"}
        </h4>
        
        {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setActiveCountry(country.id)}
              className={`heading-smallest font-medium transition-all duration-300 relative pb-2 ${
                activeCountry === country.id
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {country.name}
              {activeCountry === country.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mainGreen"></span>
              )}
            </button>
          ))}
        </div> */}

        {/* <div className="mt-4">
          <p className="text-large text-gray-300">
            {t("comingSoon") || "Coming soon"}
          </p>
        </div> */}

        <div className="relative w-full">
          <div ref={sliderRef} role="list" aria-label={t("whereToBuyList") || "Where to buy list"} tabIndex={0}
            onPointerDown={onPointerDown} onPointerMove={onPointerMove}
            onPointerUp={endDrag} onPointerCancel={endDrag} onPointerLeave={endDrag}
            className="horizontal-slider no-scrollbar flex md:justify-center items-center gap-6 overflow-x-scroll px-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.aria} 
                role="listitem" draggable={false}
                className={`${link.bgClass} ${link.w} ${link.h}
                shrink-0 snap-center inline-flex items-center justify-center bg-center bg-contain bg-no-repeat`}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
