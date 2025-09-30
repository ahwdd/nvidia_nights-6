import { useTranslations } from "next-intl";
import CategorySmall from "./CategorySmall";
import cgi from "/public/icons/rocket.png";
import photography from "/public/icons/camera.png";
import archi from "/public/icons/cityscape.png";
import fashion from "/public/icons/tshirt.png";
import PolygonH2 from "../PolygonH2";
import interior from "/public/icons/interior.png";
import videography from "/public/icons/videography.png";
import CategoryBig from "./CategoryBig";
import canvas from "/public/icons/tablet.png";
import games from "/public/icons/game.png";
import cgiBig from "/public/icons/big/rocket.png";
import photographyBig from "/public/icons/big/camera.png";
import canvasBig from "/public/icons/big/tablet.png";
import archiBig from "/public/icons/big/cityscape.png";
import fashionBig from "/public/icons/big/tshirt.png";
import gamesBig from "/public/icons/big/game.png";

function Categories() {
  const t = useTranslations("Categories");

  
  const theCategories = [
    {
      grid: "col-span-10 sm:col-span-5 lg:col-span-2",
      text: "3D/CGI",
      secondText: t("cgiDesc"),
      img: cgi,
    },
    {
      grid: "col-span-10 sm:col-span-5 lg:col-span-2",
      text: "Photography",
      secondText: t("photographyDesc"),
      img: photography,
    },
    {
      grid: "col-span-10 sm:col-span-5 lg:col-span-2",
      text: "Interior Design",
      secondText: t("interiorDesc"),
      img: interior,
    },
    {
      grid: "col-span-10 sm:col-span-5 lg:col-span-2",
      text: "Digital Fashion Design",
      secondText: t("fashionDesc"),
      img: fashion,
    },
    {
      grid: "col-span-10 sm:col-span-5 lg:col-span-2",
      text: "Videography - Short Films",
      secondText: t("videographyDesc"),
      img: videography,
    },
    // {
    //   grid: "col-span-10 lg:col-span-8",
    //   text: "Digital Art Canvas",
    //   secondText: t("digitalArtDesc"),
    //   img: canvasBig,
    // },
    // {
    //   grid: "col-span-10 sm:col-span-5 lg:col-span-2",
    //   text: "Games Development",
    //   secondText: t("gameDevDesc"),
    //   img: games,
    // },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto px-4" id="categories">
      <PolygonH2 text={t("title")} />
      <div className="grid grid-cols-10 gap-4 mt-10 max-sm:max-w-xs mx-auto">
        {theCategories.map((cat, i)=>{
          return <CategorySmall key={i}
          grid={cat.grid}
          text={cat.text}
          SecondText={cat.secondText}
          img={cat.img}
        />
        })}

      </div>
    </div>
  );
}

export default Categories;
