import { useTranslations } from "next-intl";
import Image from "next/image";
import cgiWinningImg from '@/../public/nights-6/categories/cgi.jpg'
import photographyWinningImg from '@/../public/nights-6/categories/photography.jpg'
import interiorWinningImg from '@/../public/nights-6/categories/interior.jpg'
import videographyWinningImg from '@/../public/nights-6/categories/videography.jpg'
import fashionWinningImg from '@/../public/nights-6/categories/fashion.jpg'
import { IoPlayCircleOutline } from "react-icons/io5";


function Categories() {
  const t = useTranslations("Categories");
  
  const theCategories = [
    {
      title: t('cgi'), desc: t('cgiDesc'), winner: t("cgiWinner"), img: cgiWinningImg, playIcon: false,
    },
    {
      title: t('photography'), desc: t('photographyDesc'), winner: t("photographyWinner"), img: photographyWinningImg, playIcon: false,
    },
    {
      title: t('fashion'), desc: t('fashionDesc'), winner: t("fashionWinner"), img: fashionWinningImg, playIcon: false,
    },
    {
      title: t('interior'), desc: t('interiorDesc'), winner: t("interiorWinner"), img: interiorWinningImg, playIcon: false,
    },
    {
      title: t('videography'), desc: t('videographyDesc'), winner: t("videographyWinner"), img: videographyWinningImg, playIcon: true,
    },
  ];

  return (
    <div id="categories" className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-[1290px] mx-auto text-center gap-10 relative">
        <h4 className="heading-small font-bold">
          {t("title")}
        </h4>
        <div className="flex flex-wrap justify-center items-start gap-x-6 gap-y-10 w-full">
          {theCategories.map((cat, i) => (
            <div key={i} id={`category-${cat.title}`} 
            className="w-full sm:w-[calc(33%-.8rem)] flex flex-col items-center justify-center gap-5">
              <div className="relative w-full">
                <Image src={cat.img} alt={cat.title || "category title"}
                className="w-full aspect-video object-cover" />
                <p className="absolute rtl:left-3 ltr:right-3 bottom-2 text-gray-200 text-xxs">
                  {cat.winner}
                </p>
                {cat.playIcon && <IoPlayCircleOutline className="absolute h-1/4 w-full block text-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />}
              </div>
              <h5 className="font-bold heading-small">{cat.title}</h5>
              <p className="text-gray-200 text-medium">{cat.desc}</p>
            </div>
          ))}
        </div>

        <a href="#submit" target="_self" rel="noopener noreferrer"
        className="button-large font-bold bg-mainGreen text-black px-3 py-2 mt-10 w-fit flex items-center justify-center gap-2">
          <span>
            {t("submit")}
          </span>
        </a>
      </div>
    </div>
  );
}

export default Categories;
