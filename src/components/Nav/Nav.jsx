"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import SmNav from "./SmNav";
import { useState } from "react";
import { useTranslations } from "next-intl";

function Nav({ locale }) {
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [isDisplayed, setIsDisplayed] = useState(false);
  // replace pathname with a function detects that

  return (
    <>
      {/* navbar sticky must have top-0 */}
      <nav className="dir-ltr  bg-white  h-fit z-20 px-10 lg:px-32 flex items-center justify-between">
        {/* <h1> {pathname}</h1>
        <Link href={`${locale === "en" ? "/ar" : "/en"}`}>
          Switch to {locale === "en" ? "/Arabic" : "/English"}\

          
        </Link> */}

        <Link href={"/"}>
          {/* <Image
            alt="geforce-logo"
            src={logo}
            className="w-[100px] lg:w-[100px]"
          /> */}
          <svg
            enableBackground="new 0 0 974.7 179.7"
            version="1.1"
            viewBox="0 0 974.7 179.7"
            // xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="44"
          >
            <title>
              Artificial Intelligence Computing Leadership from NVIDIA
            </title>
            <path d="m962.1 144.1v-2.7h1.7c0.9 0 2.2 0.1 2.2 1.2s-0.7 1.5-1.8 1.5h-2.1m0 1.9h1.2l2.7 4.7h2.9l-3-4.9c1.5 0.1 2.7-1 2.8-2.5v-0.4c0-2.6-1.8-3.4-4.8-3.4h-4.3v11.2h2.5v-4.7m12.6-0.9c0-6.6-5.1-10.4-10.8-10.4s-10.8 3.8-10.8 10.4 5.1 10.4 10.8 10.4 10.8-3.8 10.8-10.4m-3.2 0c0.2 4.2-3.1 7.8-7.3 8h-0.3c-4.4 0.2-8.1-3.3-8.3-7.7s3.3-8.1 7.7-8.3 8.1 3.3 8.3 7.7c-0.1 0.1-0.1 0.2-0.1 0.3z"></path>
            <path d="m578.2 34v118h33.3v-118h-33.3zm-262-0.2v118.1h33.6v-91.7l26.2 0.1c8.6 0 14.6 2.1 18.7 6.5 5.3 5.6 7.4 14.7 7.4 31.2v53.9h32.6v-65.2c0-46.6-29.7-52.9-58.7-52.9h-59.8zm315.7 0.2v118h54c28.8 0 38.2-4.8 48.3-15.5 7.2-7.5 11.8-24.1 11.8-42.2 0-16.6-3.9-31.4-10.8-40.6-12.2-16.5-30-19.7-56.6-19.7h-46.7zm33 25.6h14.3c20.8 0 34.2 9.3 34.2 33.5s-13.4 33.6-34.2 33.6h-14.3v-67.1zm-134.7-25.6l-27.8 93.5-26.6-93.5h-36l38 118h48l38.4-118h-34zm231.4 118h33.3v-118h-33.3v118zm93.4-118l-46.5 117.9h32.8l7.4-20.9h55l7 20.8h35.7l-46.9-117.8h-44.5zm21.6 21.5l20.2 55.2h-41l20.8-55.2z"></path>
            <path
              fill="#76B900"
              d="m101.3 53.6v-16.2c1.6-0.1 3.2-0.2 4.8-0.2 44.4-1.4 73.5 38.2 73.5 38.2s-31.4 43.6-65.1 43.6c-4.5 0-8.9-0.7-13.1-2.1v-49.2c17.3 2.1 20.8 9.7 31.1 27l23.1-19.4s-16.9-22.1-45.3-22.1c-3-0.1-6 0.1-9 0.4m0-53.6v24.2l4.8-0.3c61.7-2.1 102 50.6 102 50.6s-46.2 56.2-94.3 56.2c-4.2 0-8.3-0.4-12.4-1.1v15c3.4 0.4 6.9 0.7 10.3 0.7 44.8 0 77.2-22.9 108.6-49.9 5.2 4.2 26.5 14.3 30.9 18.7-29.8 25-99.3 45.1-138.7 45.1-3.8 0-7.4-0.2-11-0.6v21.1h170.2v-179.7h-170.4zm0 116.9v12.8c-41.4-7.4-52.9-50.5-52.9-50.5s19.9-22 52.9-25.6v14h-0.1c-17.3-2.1-30.9 14.1-30.9 14.1s7.7 27.3 31 35.2m-73.5-39.5s24.5-36.2 73.6-40v-13.2c-54.4 4.4-101.4 50.4-101.4 50.4s26.6 77 101.3 84v-14c-54.8-6.8-73.5-67.2-73.5-67.2z"
            ></path>
          </svg>
        </Link>

        <div className=" flex items-center justify-center">
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

          <SmNav
            locale={locale}
            isDisplayed={isDisplayed}
            setIsDisplayed={setIsDisplayed}
          />
        </div>
      </nav>

      <div className="secondNav sticky -mb-1 top-0 py-2 flex gap-10 justify-between lg:justify-start  bg-black z-20 px-10 lg:px-32">
        <Link className="text-white text-3xl font-bold" href={"#"}>
          Studio
        </Link>
        <div className="lg:flex justify-between w-full text-white hidden items-center">
          {/* <Link href={"#"}>{t("previousWinners")}</Link> */}

          <div className="flex gap-5 [&>*]:text-mainlyGrey transition ease-in-out duration-200">
            <Link className="hover:text-mainGreen" href="#categories">
              {t("categories")}
            </Link>

            <Link className="hover:text-mainGreen" href={"#prizes"}>
              {t("prizes")}
            </Link>
          </div>

          {/* <Link href={"#register"}
            className="  py-2 bg-mainGreen -mr-9 px-2 text-black font-bold">
            {t("competitionRegister")}
          </Link> */}
        </div>
        <button onClick={() => setIsDisplayed(true)}>
          <Menu className="block lg:hidden text-white self-end" />
        </button>
      </div>
    </>
  );
}

export default Nav;
