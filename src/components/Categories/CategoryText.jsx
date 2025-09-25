import { useTranslations } from "next-intl";
import Link from "next/link";

function CategoryText({ text = "", url = "/" }) {
  const t = useTranslations("Categories");
  return (
    <p className="category-text text-center flex items-center flex-col justify-center px-2 max-w-3xl">
      {text}
      <Link className="block font-bold text-lg" href={`/`}>
        {t("learnMore")}
      </Link>
    </p>
  );
}

export default CategoryText;
