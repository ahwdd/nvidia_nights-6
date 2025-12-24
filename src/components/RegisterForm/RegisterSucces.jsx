"use client";

import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { MdCheck } from "react-icons/md";

function RegisterSucces() {
  const t = useTranslations("Register");
  const { locale } = useParams();
  const router = useRouter();

  const handleDone = () => {
    const currentLocale = locale ?? "en";
    router.push(`/${currentLocale}/`);
  };

  return (
    <div className="w-full max-w-[954px] mx-auto px-5 md:px-3 py-12">
      <div className="w-full bg-white flex flex-col items-center justify-center gap-8 py-16">
        
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-mainGreen/10">
          <MdCheck className="text-mainGreen text-5xl" />
        </div>

        <div className="text-center">
          <h1 className="heading-medium font-bold text-mainGreen mb-2">
            {t("success") || "Success!"}
          </h1>
        </div>

        <div className="flex flex-col gap-6 justify-center items-center text-center max-w-[600px]">
          <h2 className="text-2xl md:text-3xl text-black font-bold">
            {t("thank_you_registration") || "Thank you for your registration!"}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("email_details") || "You will receive an email with further details shortly."}
          </p>

          <button onClick={handleDone}
            className="bg-mainGreen hover:bg-mainGreenHover text-white font-bold px-12 py-4 rounded-sm transition-colors mt-4 button-large"
          >
            {t("done") || "Done"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default RegisterSucces;