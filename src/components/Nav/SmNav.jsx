"use client";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

function SmNav({ locale, isDisplayed, setIsDisplayed }) {
  const handleOverlayClick = () => {
    setIsDisplayed(false);
  };

  const handlePopupClick = (event) => event.stopPropagation();

  const t = useTranslations("Nav");
  return (
    <div
      onClick={handleOverlayClick}
      style={{
        background: "rgba(0, 0, 0, 0.6)", // Wrap rgba in quotes
      }}
      className={`${
        isDisplayed ? "block" : "hidden"
      } w-full z-50 fixed left-0 h-screen top-0`}
    >
      <div
        onClick={handlePopupClick}
        style={{
          transition: "all .3s linear",
        }}
        className={`bg-white text-black pt-5 [&>*]:text-xl [&>*]:w-fit flex flex-col w-[300px] gap-5 px-2 h-screen fixed`}
      >
        <button onClick={handleOverlayClick} className="self-end font-bold">
          <X />
        </button>

        {/* <Link onClick={() => setIsDisplayed(false)} href={"#"}>
          {t("previousWinners")}
        </Link> */}

        <Link onClick={() => setIsDisplayed(false)} href="#categories">
          {t("categories")}
        </Link>

        <Link onClick={() => setIsDisplayed(false)} href={"#prizes"}>
          {t("prizes")}
        </Link>

        <Link
          onClick={() => setIsDisplayed(false)}
          href={"#register"}
          className="bg-mainGreen text- rounded-md py-2 px-5 font-bold text-black"
        >
          {t("competitionRegister")}
        </Link>

        {/* <Link
          className="bg-mainGreen rounded-xl py-2 px-4 font-bold"
          href={`/${locale === "en" ? "ar" : "en"}`}
        >
          {locale === "en" ? "ع" : "EN"}
        </Link> */}

        {/* <Link href={"#"}>Previous Winners</Link>

        <Link href={"#"}>Categories</Link>

        <Link href={"#"}>Prizes</Link>

        <Link href={"/"} className=" rounded-md ">
          Competition Registration
        </Link> */}

        <Link
          className=" py-2 px-3 font-bold flex"
          href={`/${locale === "en" ? "ar" : "en"}`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.65003 10.5C4.55165 10.9847 4.5 11.4863 4.5 12C4.5 12.5137 4.55165 13.0153 4.65003 13.5H7.55935C7.52023 13.0113 7.5 12.51 7.5 12C7.5 11.49 7.52023 10.9887 7.55935 10.5H4.65003ZM5.12407 9H7.74448C7.94369 7.82124 8.25841 6.75177 8.66557 5.85602C8.78395 5.5956 8.9143 5.34175 9.05649 5.09966C7.3001 5.84986 5.88822 7.25105 5.12407 9ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM12 4.5C11.4394 4.5 10.6869 5.03412 10.0311 6.47672C9.7109 7.18121 9.44812 8.03723 9.26799 9H14.732C14.5519 8.03723 14.2891 7.18121 13.9689 6.47672C13.3131 5.03412 12.5606 4.5 12 4.5ZM16.2555 9C16.0563 7.82124 15.7416 6.75177 15.3344 5.85602C15.2161 5.5956 15.0857 5.34175 14.9435 5.09966C16.6999 5.84986 18.1118 7.25105 18.8759 9H16.2555ZM14.9355 10.5H9.06454C9.02232 10.9837 9 11.4851 9 12C9 12.5149 9.02232 13.0163 9.06454 13.5H14.9355C14.9777 13.0163 15 12.5149 15 12C15 11.4851 14.9777 10.9837 14.9355 10.5ZM16.4407 13.5C16.4798 13.0113 16.5 12.51 16.5 12C16.5 11.49 16.4798 10.9887 16.4407 10.5H19.35C19.4484 10.9847 19.5 11.4863 19.5 12C19.5 12.5137 19.4484 13.0153 19.35 13.5H16.4407ZM14.732 15H9.26799C9.44812 15.9628 9.7109 16.8188 10.0311 17.5233C10.6869 18.9659 11.4394 19.5 12 19.5C12.5606 19.5 13.3131 18.9659 13.9689 17.5233C14.2891 16.8188 14.5519 15.9628 14.732 15ZM14.9435 18.9003C15.0857 18.6583 15.2161 18.4044 15.3344 18.144C15.7416 17.2482 16.0563 16.1788 16.2555 15H18.8759C18.1118 16.749 16.6999 18.1501 14.9435 18.9003ZM9.05648 18.9003C8.9143 18.6583 8.78395 18.4044 8.66557 18.144C8.25841 17.2482 7.94369 16.1788 7.74448 15H5.12407C5.88822 16.749 7.3001 18.1501 9.05648 18.9003Z"
              fill="#000"
              stroke="white"
              strokeWidth="0.2"
            ></path>
          </svg>
          <span className="bg-white ">{locale === "en" ? "AR" : "EN"}</span>
        </Link>
      </div>
    </div>
  );
}

export default SmNav;
