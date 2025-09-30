// src/components/StudioBoxes/MobileBoxesSlider.jsx
"use client";
import "swiper/css";
import "swiper/css/free-mode";
import StudioBox from "../StudioBox";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MobileBoxesSlider({ boxes }) {
  const t = useTranslations("PrevEvents");

  return (
    <div className="block sm:hidden">
      <Swiper
      modules={[]}
      slidesPerView="auto"
      loop
      >
        {boxes.map((element, i) => (
          <SwiperSlide key={i} style={{ width: "80%" }} className="py-2 px-2">
            <StudioBox
              url={element.url}
              t={t}
              key={i}
              img={element.img}
              index={i + 2}
              city={element.city}
              date={element.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
