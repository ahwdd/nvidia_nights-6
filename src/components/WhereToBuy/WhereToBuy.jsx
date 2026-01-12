"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function WhereToBuy() {
  const t = useTranslations("WhereToBuy");
  const [activeCountry, setActiveCountry] = useState("kuwait");

  const countries = [
    { id: "kuwait", name: t("kuwait") || "Kuwait" },
    { id: "uae", name: t("uae") || "United Arab Emirates" },
    { id: "saudi", name: t("saudi") || "Saudi Arabia" },
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
        <div className="flex items-center justify-center gap-10">
          <a href="https://www.virginmegastore.ae/en/nvidia-studio"
            target="_blank" rel="noopener noreferrer" aria-label="Virgin Megastore Nvidia Studio Nights"
            className="virgin-buy-bg size-28 sm:size-40"/>

          <a href="https://www.geekay.com/en/nvidia-studio-nights-6"
            target="_blank" rel="noopener noreferrer" aria-label="Geekay Nvidia Studio Nights"
            className="geekay-buy-bg h-20 w-36 sm:min-w-48"/>

             <a href="https://www.infiniarc.com/en/landing/Nvidiastudio"
            target="_blank" rel="noopener noreferrer" aria-label="Infiniarc Nvidia Studio Nights"
            className="infiniarc-buy-bg h-12 w-44 sm:min-w-52"/>
        </div>

      </div>
    </div>
  );
}