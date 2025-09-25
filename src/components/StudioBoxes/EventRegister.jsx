"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import axios from "axios";
import RegisterError from "../RegisterForm/RegisterError";
import { useState } from "react";
import Spinner from "../RegisterForm/Spinner";
import RegisterSucces from "../RegisterForm/RegisterSucces";
import { Check, X } from "lucide-react";

function EventRegister({ isOpen, setIsOpen, isSuccess, setIsSuccess }) {
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  const handlePopupClick = (event) => event.stopPropagation();

  const t = useTranslations("Register");
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  // Define the schema using zod
  const formSchema = z.object({
    name: z.string().min(1, t("formErrors.name.required")),
    phone: z
      .string()
      .min(1, t("formErrors.phone.required"))
      .regex(/^\+?\d{8,15}$/, t("formErrors.phone.invalid")),
    email: z.string().email(t("formErrors.email.invalid")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://arabhardware.net/9675d4a085a5b1725357814392/api/v1/event-registeration",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setFormError("");
        // setIsOpen(false);
        setIsSuccess(true);
        setFormSuccess(t("eventSuccess"));
      }

      //   console.log(response.data); //   alert("Registration successful!");
    } catch (error) {
      setFormError(String(error.response.data.errors.email[0]));
      setFormSuccess("");
      //   console.error(
      //     "Error:",
      //     error.response.data.errors.email[0] || "Something went wrong!"
      //   );
      //   console.log(data);
      //   console.log(response.data || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /*

    */
    <>
      <div
        onClick={handleOverlayClick}
        style={{ background: "#000000a8" }}
        className={`fixed h-screen  z-50 ${
          isOpen ? "flex" : "hidden"
        }  items-center justify-center inset-0`}
      >
        <div
          onClick={handlePopupClick}
          className={`bg-white rounded-[30px] px-24 py-10 flex flex-col items-center justify-center gap-4 max-w-[600px] `}
        >
          <button
            onClick={handleOverlayClick}
            className="absolute p-2 top-5 left-5 bg-mainGreen"
          >
            <X className="text-black" />
          </button>
          <div className="flex flex-col items-center justify-center gap-3">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.4202 38.3864C62.9663 50.6559 53.7151 62.2088 40.734 64.7903C34.4029 66.0512 27.8354 65.2824 21.9666 62.5936C16.0978 59.9047 11.2269 55.4328 8.04754 49.8146C4.86814 44.1964 3.5423 37.7184 4.2588 31.3029C4.97529 24.8873 7.6976 18.8614 12.0381 14.083C20.9408 4.27724 35.9734 1.57796 48.2429 6.48575"
                stroke="#74B800"
                strokeWidth="7.36169"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.4256 32.9505C26.1726 32.9505 25.9262 32.8201 25.7464 32.5767L22.2706 27.934C21.9043 27.4384 21.911 26.656 22.2839 26.1691C22.6634 25.6909 23.2627 25.6996 23.6356 26.1865L26.379 29.8467L32.4118 20.4483C32.7514 19.918 33.3507 19.8484 33.7569 20.2918C34.1631 20.7352 34.2164 21.5177 33.8768 22.048L27.1581 32.5071C26.985 32.7767 26.7319 32.9418 26.4656 32.9505C26.4456 32.9505 26.4389 32.9505 26.4256 32.9505ZM47.0478 29.7424H35.0754C34.5493 29.7424 34.1232 29.186 34.1232 28.4991C34.1232 27.8123 34.5493 27.2559 35.0754 27.2559H47.0478C47.5738 27.2559 48 27.8123 48 28.4991C48 29.186 47.5738 29.7424 47.0478 29.7424ZM26.4256 49C26.1726 49 25.9262 48.8696 25.7464 48.6262L22.2706 43.9835C21.9043 43.4879 21.911 42.7054 22.2839 42.2185C22.6634 41.7404 23.2627 41.7491 23.6356 42.2359L26.379 45.8962L32.4118 36.4978C32.7514 35.9761 33.3507 35.8979 33.7569 36.3413C34.1631 36.7847 34.2164 37.5672 33.8768 38.0975L27.1581 48.5566C26.985 48.8261 26.7319 48.9913 26.4656 49C26.4456 49 26.4389 49 26.4256 49ZM47.0478 45.7919H35.0754C34.5493 45.7919 34.1232 45.2354 34.1232 44.5486C34.1232 43.8617 34.5493 43.3053 35.0754 43.3053H47.0478C47.5738 43.3053 48 43.8617 48 44.5486C48 45.2354 47.5738 45.7919 47.0478 45.7919Z"
                fill="#74B800"
              />
            </svg>

            <h3 className="text-mainGreen font-bold text-2xl">
              {t("titleEvent")}
            </h3>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center text-center">
            <h4 className="text-xl text-medium">{t("descEvent")}</h4>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col items-center gap-2"
            >
              <div className="flex-col w-full flex gap-1">
                <label className="text-start">{t("name")} *</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder={t("name")}
                  {...register("name")}
                />
                {errors.name && (
                  <RegisterError
                    error={errors.name.message}
                    className="text-red-500"
                  />
                )}
              </div>

              <div className="flex-col w-full flex gap-1">
                <label className="text-start">{t("phone")} *</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder={t("phone")}
                  {...register("phone")}
                />
                {errors.phone && (
                  <RegisterError
                    error={errors.phone.message}
                    className="text-red-500"
                  />
                )}
              </div>

              <div className="flex-col w-full flex gap-1">
                <label className="text-start">{t("email")} *</label>
                <input
                  className="w-full p-2 border rounded"
                  type="email"
                  placeholder="example@gmail.com"
                  {...register("email")}
                />
                {errors.email && (
                  <RegisterError
                    error={errors.email.message}
                    className="text-red-500"
                  />
                )}
              </div>

              <button
                type="submit"
                className="bg-mainGreen mt-3 flex items-center justify-center text-black font-semibold w-full py-3 rounded-md"
              >
                {isLoading ? <Spinner /> : t("submit")}
              </button>

              {formError && <RegisterError error={formError} />}
              {formSuccess && (
                <p className="text-mainGreen flex">
                  <Check />
                  {formSuccess}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventRegister;
