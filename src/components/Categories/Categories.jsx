import { useTranslations } from "next-intl";
import PolygonH2 from "../PolygonH2";
import CategoryBig from "./CategoryBig";
import CategorySmall from "./CategorySmall";
import cgi from "/public/icons/rocket.png";
import videography from "/public/icons/camera.png";
import canvas from "/public/icons/tablet.png";
import archi from "/public/icons/cityscape.png";
import fashion from "/public/icons/tshirt.png";
import games from "/public/icons/game.png";
import cgiBig from "/public/icons/big/rocket.png";
import videographyBig from "/public/icons/big/camera.png";
import canvasBig from "/public/icons/big/tablet.png";
import archiBig from "/public/icons/big/cityscape.png";
import fashionBig from "/public/icons/big/tshirt.png";
import gamesBig from "/public/icons/big/game.png";

function Categories() {
  const t = useTranslations("Categories");
  return (
    <div className=" lg:px-20" id="categories">
      <h3 className="text-2xl text-center font-bold">
        {t("title")}
      </h3>
      <div className="grid grid-cols-12 gap-4 mt-10">
        <CategorySmall
          grid="col-span-12 sm:col-span-6 lg:col-span-3"
          text="3D/CGI"
          SecondText={t("cgiDesc")}
          img={cgi}
        />
        <CategorySmall
          grid="col-span-12 sm:col-span-6 lg:col-span-3"
          SecondText={t("videographyDesc")}
          text={"Photography"}
          img={videography}
          alt={"Photography"}
        />
        <CategorySmall
          grid="col-span-12 sm:col-span-6 lg:col-span-3"
          text={"Architectural Design"}
          SecondText={t("architectDesc")}
          img={archi}
          alt={"Architectural Design"}
        />
        <CategorySmall
          grid="col-span-12 sm:col-span-6 lg:col-span-3"
          text="Digital Fashion Design"
          SecondText={t("fashionDesc")}
          img={fashion}
        />
        {/* <CategoryBig
          grid="col-span-12 lg:col-span-8"
          text="Digital Art Canvas"
          SecondText={t("digitalArtDesc")}
          img={canvasBig}
        /> */}

        {/* <CategorySmall
          grid="col-span-12 sm:col-span-6 lg:col-span-3"
          text="Games Development"
          SecondText={t("gameDevDesc")}
          img={games}
        /> */}

      </div>
    </div>
  );
}

export default Categories;
