import { useTranslations } from "next-intl";
import CategoryHeader from "./CategoryHeader";
import CategoryText from "./CategoryText";
import vectorCgi from "/public/vector-cgi.png";
import Image from "next/image.js";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

function CategoryBig({
  text, SecondText = "Learn More", img, grid = "col-span-12 lg:col-span-8",
}) {
  const t = useTranslations("Categories");

  // console.log(img);
  return (
    <>
      {/* <div
        className={`category-big ${grid} py-16 lg:flex-row category-animation overflow-hidden relative flex-col flex items-center gap-3 justify-center bg-mainGreenOpacity/10 hover:bg-mainGreenOpacity`}
      >
        <Image
          className={`${
            img.src === "/_next/static/media/games.5a4c85b1.png"
              ? "category-img-games w-96"
              : "category-img w-28"
          }`}
          src={img}
          alt={text}
        />

        <CategoryHeader text={text} />
        <CategoryText text={SecondText} url="/" />
      </div> */}

      <div className={`p-2 flex flex-col items-center justify-center ${grid} gap-2 shadow-default hover:shadow-default-hover`}>
        <div className="w-full h-24 overflow-hidden">
          <Image className="size-full object-contain" src={img} alt={text}/>
        </div>
        <h4 className="font-bold text-2xl mb-1">{text}</h4>
        <div className="w-full flex flex-col items-center justify-center gap-1">
          <p className="text-center w-full max-w-3xl">
            {SecondText}
          </p>
          <Link href='#' className="font-bold flex items-center justify-center">
            <span>{t("learnMore")}</span>
            <MdArrowForwardIos className="text-mainGreen rtl:-scale-100" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoryBig;
