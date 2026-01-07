import Image from "next/image";
import { useTranslations } from "next-intl";

function PrevCard({ imgClass, title, name }) {
  return (
    <div className="w-full">
      <div role="img" aria-label={title} className={`${imgClass} w-full aspect-square`} />
      <div className="pt-2 flex max-md:flex-col md:items-end justify-between gap-2">
        <div className="text-start">
          <p className="font-bold">{name}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}


function PrevWinners() {
  const t = useTranslations("Categories");
  
  const winnersData = [
    { name: t("photographyWinner"), title: t("photography"), winnerImgClass: "winner-photography-bg", },
    { name: t("fashionWinner"), title: t("fashion"), winnerImgClass: "winner-fashion-bg", },
    { name: t("cgiWinner"), title: t("cgi"), winnerImgClass: "winner-cgi-bg", },
    { name: t("architectWinner"), title: t("architect"), winnerImgClass: "winner-architect-bg", },
  ];

  return (
      <div className="flex flex-col gap-5 justify-around w-full relative max-w-7xl mx-auto max-md:px-8">
        <h4 className="heading-medium font-bold text-center">
          {t("prevWinners")}
        </h4>
        <p className="heading-smallest font-bold text-white text-center -mt-3">
          {t("nvidiaNights")}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 justify-between w-full lg:gap-8 gap-4">
          {winnersData.map((item, i)=>{
            return <div key={i} className="w-full flex items-center justify-between lg:gap-8 gap-4 text-xl">
              <PrevCard imgClass={item.winnerImgClass} title={item.title} name={item.name} />
            </div>
          })}
        </div>
      </div>
  );
}

export default PrevWinners;
