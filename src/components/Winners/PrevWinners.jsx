import Image from "next/image";
import { useTranslations } from "next-intl";

import photographyWinner from '@/../public/nights-6/winners/abdallah-photography.jpg'
import fashionWinner from '@/../public/nights-6/winners/omnia-fashion.jpg'
import cgiWinner from '@/../public/nights-6/winners/shady-cgi.jpg'
import architectWinner from '@/../public/nights-6/winners/moatasem-architect.jpg'

import NvidiaStudio from '@/../public/nights-6/NV-Studio.png'


function PrevCard({img, title, name}) {
  return (<div className="w-full">
    <Image src={img} alt={title} className="w-full aspect-square object-cover" />
    <div className="pt-2 px-4 flex max-md:flex-col md:items-end justify-between gap-2">
      <div className="text-start">
        <p className="font-bold ">{name}</p>
        <p className="">{title}</p>
      </div>
    </div>
  </div>)
}

function PrevWinners() {
  const t = useTranslations("Categories");
  
  const winnersData = [
    {
      name: t("photographyWinner"), title: t("photography"), winnerImg: photographyWinner
    },
    {
      name: t("fashionWinner"), title: t("fashion"), winnerImg: fashionWinner
    },
    {
      name: t("cgiWinner"), title: t("cgi"), winnerImg: cgiWinner
    },
    {
      name: t("architectWinner"), title: t("architect"), winnerImg: architectWinner
    },
  ]

  return (
      <div className="flex flex-col gap-5 justify-around w-full relative max-w-[954px] mx-auto max-md:px-8">
        <h4 className="heading-medium font-bold text-center">
          {t("prevWinners")}
        </h4>
        <p className="heading-smallest font-bold text-gray-300 text-center -mt-3">
          {t("nvidiaNights")}
        </p>

        <div className="grid grid-cols-2 justify-between w-full lg:gap-8 gap-4">
          {winnersData.map((item, i)=>{
            return <div key={i} className="w-full flex items-center justify-between lg:gap-8 gap-4 text-xl">
              <PrevCard img={item.winnerImg} title={item.title} name={item.name} />
            </div>
          })}
        </div>
      </div>
  );
}

export default PrevWinners;
