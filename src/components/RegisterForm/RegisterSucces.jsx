"use client";

import { useTranslations } from "next-intl";
import { MdCheck } from "react-icons/md";
import { useEffect, useRef } from "react";

function RegisterSucces({ isOpen, setIsOpen }) {
  const t = useTranslations("Register");
  const trackedRef = useRef(false);

  useEffect(() => {
    if (isOpen && !trackedRef.current) {
      trackedRef.current = true;

      if (typeof window !== "undefined") {
        try {
          if (typeof window.fbq === "function" || typeof window.fbq === "object") {
            window.fbq("track", "CompleteRegistration");
            console.log("FB pixel: CompleteRegistration tracked");
          } else {
            window.fbq = window.fbq || function() {
              (window.fbq.q = window.fbq.q || []).push(arguments);
            };
            window.fbq("track", "CompleteRegistration");
          }
        } catch (e) {
        }
      }
    }

    if (!isOpen) { trackedRef.current = false; }
  }, [isOpen]);

  return (
    <div
      style={{ background: "#000000a8" }}
      className={`h-screen footer-popup fixed transition-all duration-300 ease-linear ${
        isOpen ? "opacity-100 z-50" : "opacity-0 -z-10"
      } items-center justify-center flex left-0 right-0 top-0 w-full `}
    >
      <div className={`bg-white rounded-[30px] px-5 py-10 flex flex-col items-center justify-center gap-4 max-w-[400px] ${
          isOpen
            ? " opacity-100 translate-y-[0px]"
            : " opacity-10 translate-y-[250px]"
        } transition-all duration-300 ease-linear`}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <MdCheck />
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