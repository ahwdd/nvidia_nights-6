"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Creators() {
  const t = useTranslations("creatorsHero");

  const creatorsList = [
    { name: "Creator 1", title: t("title1"), desc: t("desc1"),image: "/creators1.jpg" },
    { name: "Creator 2", title: t("title2"), desc: t("desc2"),image: "/creators2.jpg" },
    { name: "Creator 3", title: t("title3"), desc: t("desc3"),image: "/creators3.jpg" },
  ];

  return (
    <div className="w-screen bg-black overflow-hidden" >
        <div className="text-white w-screen grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto relative py-4 max-w-6xl">
            {creatorsList.map((creator, index) => (
                <div key={index} className="max-w-xl mx-[5%] flex flex-col justify-between p-2">
                        <Image src={creator.image} alt={creator.name} width={2000} height={2000}
                        className="w-full object-cover" />
                        <h3 className="text-xl lg:text-2xl font-bold mb-4 backdrop-blur">
                        {creator.title}
                        </h3>
                        <p className="max-lg:text-sm leading-relaxed backdrop-blur">
                        {creator.desc}
                        </p>
                </div>
            ))}
        </div>
    </div>

  );
}
