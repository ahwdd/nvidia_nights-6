"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

function RegisterSucces({ isOpen, setIsOpen }) {
  const t = useTranslations("Register");
  return (
    <div
      style={{ background: "#000000a8" }}
      className={`h-screen footer-popup fixed transition-all duration-300 ease-linear ${
        isOpen ? "opacity-100 z-50" : "opacity-0 -z-10"
      } items-center justify-center flex left-0 right-0 top-0 w-full `}
    >
      <div
        className={`bg-white rounded-[30px] px-5 py-10 flex flex-col items-center justify-center gap-4 max-w-[400px] ${
          isOpen
            ? " opacity-100 translate-y-[0px]"
            : " opacity-10 translate-y-[250px]"
        } transition-all duration-300 ease-linear`}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.4201 38.3864C62.9662 50.6559 53.715 62.2088 40.7339 64.7903C34.4028 66.0512 27.8353 65.2824 21.9665 62.5936C16.0978 59.9047 11.2269 55.4328 8.04751 49.8146C4.86811 44.1964 3.54227 37.7184 4.25877 31.3029C4.97526 24.8873 7.69757 18.8614 12.0381 14.083C20.9408 4.27724 35.9734 1.57796 48.2428 6.48575"
              stroke="#74B800"
              strokeWidth="7.36169"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.704 33.4783L35.9735 45.7478L65.4202 13.8471"
              stroke="#74B800"
              strokeWidth="7.36169"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h3 className="text-mainGreen font-bold text-2xl">{t("success")}</h3>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center text-center">
          <h4 className="text-xl text-black text-medium">
            {t("thank_you_registration")}
          </h4>
          <p className="font-light text-[#4A4A4A]">{t("email_details")}</p>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-mainGreen text-white w-[250px] py-3 rounded-md"
          >
            {t("done")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterSucces;
