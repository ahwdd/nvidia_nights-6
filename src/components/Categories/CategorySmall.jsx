import Image from "next/image";
import vectorCgi from "/public/vector-cgi.png";
import CategoryHeader from "./CategoryHeader";
import CategoryText from "./CategoryText";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";


function CategorySmall({
  text, SecondText = "Learn More", img, grid = "col-span-12 lg:col-span-4",
}) {
  const t = useTranslations("Categories");
  return (
    <>
      {/* <div className={`py-16 flex category-animation relative overflow-hidden ${
          grid === "col-span-12 lg:col-span-3" ? "!flex-col" : ""
        } items-center ${grid} justify-center lg:flex-row flex-col bg-mainGreenOpacity/10 hover:bg-mainGreenOpacity`}
      >
        <Image className="category-img w-16" src={img} alt={text} />
        <CategoryHeader text={text} />
        <CategoryText text={SecondText} url="/" />
      </div> */}
      <div className={`p-2 flex flex-col items-center justify-start ${grid} gap-4`}>
        <div className="w-full h-24 overflow-hidden">
          <Image className="size-full object-contain" src={img} alt={text}/>
        </div>
        <h4 className="font-bold text-2xl mb-1 text-center">{text}</h4>
        <div className="w-full flex flex-col items-center justify-center gap-1">
          <p className="text-center w-full max-w-3xl">
            {SecondText}
          </p>
          {/* <Link href='#' className="font-bold flex items-center justify-center">
            <span>{t("learnMore")}</span>
            <MdArrowForwardIos className="text-mainGreen rtl:-scale-100" />
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default CategorySmall;
