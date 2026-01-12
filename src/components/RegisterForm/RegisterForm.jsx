"use client";

import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import RegisterError from "./RegisterError";
import Spinner from "./Spinner";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import TermsButton from "./components/TermsButton";
import FileInput from "./components/FileInput";
import { renderDateWithSuperscript } from "@/services/renderDateWithSuperscript";

function RegisterForm({ onBookingCreated }) {
  const t = useTranslations("Register");
  const { locale } = useParams();
  const pathname = usePathname()
  const router = useRouter();

  const formSchema = z.object({
    first_name: z
      .string()
      .min(1, t("formErrors.first_name.required"))
      .min(3, t("formErrors.first_name.min")),
    last_name: z
      .string()
      .min(1, t("formErrors.last_name.required"))
      .min(3, t("formErrors.last_name.min")),
    email: z.string().email(t("formErrors.email.invalid")),
    country: z
      .string()
      .min(1, t("formErrors.country.required"))
      .min(3, t("formErrors.country.min")),
    city: z
      .string()
      .min(1, t("formErrors.city.required"))
      .min(3, t("formErrors.city.min")),
    contest_type: z
      .string()
      .min(1, t("formErrors.contest_type.required"))
      .min(3, t("formErrors.contest_type.min")),
    hardware_used: z
      .string()
      .min(1, t("formErrors.hardware_used.required"))
      .min(3, t("formErrors.hardware_used.min")),
    software_used: z
      .string()
      .min(1, t("formErrors.software_used.required"))
      .min(3, t("formErrors.software_used.min")),
    brief: z.string().optional(),
    socialLink: z.string().optional(),
    file: z.union([
      z.string().url({ message: t("formErrors.file.invalid_url") }),
      z.instanceof(File, { message: t("formErrors.file.invalid_url") }),
    ]),
  });

  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  const currentDate = new Date();
  const submissionDeadline = new Date("2026-01-25T23:59:59"); // Jan 25, 2026

  useEffect(() => {
    if (currentDate > submissionDeadline) {
      setIsDeadlinePassed(true);
      setFormError(
        t("submission_deadline_passed") ||
          "Submission deadline has passed. The contest is now closed."
      );
    }
  }, [t]);

  useEffect(()=>{
    if(window && window.innerWidth < 600) setIsMobile(true)
    else setIsMobile(false)
  }, [])

  const {register, handleSubmit, setValue, reset, control, formState: { errors }} 
    = useForm({ resolver: zodResolver(formSchema) });

  const country = useWatch({ control, name: "country", defaultValue: "" });
  const city = useWatch({ control, name: "city", defaultValue: "" });
  const contest = useWatch({ control, name: "contest_type", defaultValue: "" });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setFormError("");

    if (currentDate > submissionDeadline) {
      setFormError(
        t("submission_deadline_passed") ||
          "Submission deadline has passed. The contest is now closed."
      );
      setIsLoading(false);
      return;
    }

    try {
      // Build social_media string from individual fields
      const socialMediaLinks = [ data.socialLink ].filter(link => link && link.trim() !== "").join(", ");

      let response;

      // Check if file is a File object or a URL string
      if (data.file instanceof File) {
        // If it's a file, send as FormData
        const formData = new FormData();
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("email", data.email);
        formData.append("country", data.country);
        formData.append("city", data.city);
        formData.append("contest_type", data.contest_type);
        formData.append("hardware_used", data.hardware_used);
        formData.append("software_used", data.software_used);
        formData.append("brief", data.brief || "");
        formData.append("social_media", socialMediaLinks);
        formData.append("file", data.file);

        response = await axios.post(
          "https://arabhardware.net/9675d4a085a5b1725357814392/api/v1/competitions",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        // If it's a URL string, send as JSON
        const payload = {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          country: data.country,
          city: data.city,
          contest_type: data.contest_type,
          hardware_used: data.hardware_used,
          software_used: data.software_used,
          brief: data.brief || "",
          social_media: socialMediaLinks,
          file: data.file,
        };

        response = await axios.post(
          "https://arabhardware.net/9675d4a085a5b1725357814392/api/v1/competitions",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (response.status === 200) {
        // Track Facebook pixel event
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
            console.error("FB pixel error:", e);
          }
        }

        setTimeout(() => {
          location.href = `${pathname}/success`
        }, 750);
      }
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data?.errors?.email?.[0] ||
          error.response.data?.message ||
          "An error occurred during registration";
        setFormError(String(errorMessage));
      } else {
        setFormError("Network error. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data.data.map((c) => c.country)));
  }, []);

  const handleCountryChange = async (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setValue("country", country);

    const res = await fetch(
      "https://countriesnow.space/api/v0.1/countries/cities",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country }),
      }
    );
    const data = await res.json();
    setCities(data.data || []);
    setValue("city", "");
  };

  return (
    <div id="submit" className="w-full max-w-[954px] mx-auto px-5 md:px-3 py-12">

      <div className="text-center mb-8">
        <h1 className="heading-medium font-bold text-black mb-2">
          {t("title") || "Submit Your Artwork"}
        </h1>
        <p className="heading-smallest font-bold text-gray-700">
          {renderDateWithSuperscript(t("subTitle") || "Deadline 25Th of Jan, 2026")}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5 max-md:text-sm">

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <div className="flex flex-col gap-2">
            <input type="text" placeholder={t("first_name") || "First Name"}
              className="w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              {...register("first_name")}/>
            {errors.first_name && (
              <RegisterError error={errors.first_name.message} />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              type="text"
              placeholder={t("last_name") || "Last Name"}
              {...register("last_name")}
            />
            {errors.last_name && (
              <RegisterError error={errors.last_name.message} />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <div className="flex flex-col gap-2">
            <input
              className="w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              type="email"
              placeholder={t("email") || "Email Address"}
              {...register("email")}
            />
            {errors.email && <RegisterError error={errors.email.message} />}
          </div>
          <div className="flex flex-col gap-2">
            <select defaultValue=""
              className={`w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white
                ${(country && country!='')?'':'text-gray-400'}`}
              {...register("country")}
              onChange={handleCountryChange}
            >
              <option value="" disabled>
                {t("country") || "Country"}
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country === "Israel" ? "Palestine" : country}
                </option>
              ))}
            </select>
            {errors.country && <RegisterError error={errors.country.message} />}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <div className="flex flex-col gap-2">
            <select defaultValue=""
              className={`w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white
                ${(city && city != '')? '': 'text-gray-400'}`}
              {...register("city")}
              disabled={!selectedCountry}
            >
              <option value="" disabled>
                {t("choose_city") || "City"}
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <RegisterError error={errors.city.message} />}
          </div>
          <div className="flex flex-col gap-2">
            <select
              defaultValue=""
              className={`w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white
                ${(contest && contest != '')? '': 'text-gray-400'}`}
              {...register("contest_type")}
            >
              <option value="" disabled>
                {isMobile? t("choose_contest_mobile"): t("choose_contest") || "Contest Type"}
              </option>
              <option value="3D/CGI">3D/CGI</option>
              <option value="Photography">
                {locale === "ar" ? "التصوير الفوتوغرافي" : "Photography"}
              </option>
              <option value="Digital Fashion Design">
                {locale === "ar"
                  ? "تصميم الأزياء الرقمي"
                  : "Digital Fashion Design"}
              </option>
              <option value="Interior Design">
                {locale === "ar" ? "التصميم الداخلي" : "Interior Design"}
              </option>
              <option value="Videography">
                {locale === "ar" ? "التصوير السينمائي (الأفلام القصيرة)" : "Videography - Short Films"}
              </option>
            </select>
            {errors.contest_type && (
              <RegisterError error={errors.contest_type.message} />
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <div className="flex flex-col gap-2">
            {/* Hardware you created your content on i.e. RTX Desktop PC, RTX laptop, etc. */}
            <textarea rows={1} className="w-full p-3 border border-gray-300 rounded-sm
                focus:outline-none focus:border-gray-500 resize-none leading-tight 
                placeholder:text-sm max-md:placeholder:text-xs max-md:min-h-[3rem] max-xs:min-h-[3.7rem] max-sm:placeholder:leading-3"
              placeholder={t("hardware_used") || "Hardware Used"}
              {...register("hardware_used")}
            />
            {errors.hardware_used && (
              <RegisterError error={errors.hardware_used.message} />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <textarea rows={1} className="w-full p-3 border border-gray-300 rounded-sm
                focus:outline-none focus:border-gray-500 resize-none leading-tight 
                placeholder:text-sm max-md:placeholder:text-xs max-md:min-h-[3rem] max-xs:min-h-[3.7rem] max-sm:placeholder:leading-3"
              placeholder={t("software_used") || "Software Used"}
              {...register("software_used")}
            />
            {errors.software_used && (
              <RegisterError error={errors.software_used.message} />
            )}
          </div>
        </div>

        {/* Brief About Your Project */}
        <div className="flex flex-col gap-2">
          <textarea
            className="w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 h-[150px] resize-none"
            placeholder={t("brief_about_your_project") || "Brief About Your Project"}
            {...register("brief")}
          ></textarea>
          {errors.brief && <RegisterError error={errors.brief.message} />}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <div className="flex flex-col gap-2">
            <FileInput register={register} setValue={setValue} errors={errors} />
          </div>
          <div className="flex flex-col gap-2">
            <input type="url" placeholder={isMobile? t("socialLinkMobile") :t("socialLink") || "socialLink URL"}
              className="w-full p-3 max-sm:px-1 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              {...register("socialLink")}/>
            {errors.socialLink && (
              <RegisterError error={errors.socialLink.message} />
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-bold text-medium text-black">
            {t("nvidia_requirement") || "You need to be using NVIDIA products to participate."}
          </p>
          
          <button type="submit" disabled={isLoading || isDeadlinePassed}
            className={`w-fit button-large flex justify-center items-center text-black font-bold p-space transition-colors
              ${isDeadlinePassed ? "bg-gray-400 cursor-not-allowed" : "bg-[#74B800]  hover:bg-mainGreenHover transition"} `}>
            {isLoading ? (
              <Spinner />
            ) : isDeadlinePassed ? (
              t("deadline_passed") || "Deadline Passed"
            ) : (
              t("submit") || "Submit"
            )}
          </button>
        </div>

        <div className="flex items-start gap-2 text-sm">
          <input type="checkbox" required checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mt-1 size-4"/>
          <div className="text-black flex items-center gap-1 flex-wrap text-[15px]">
            <span>{t("agree") || "I agree to all"}</span>
            <TermsButton />
          </div>
        </div>

        {formError && (
          <div className="bg-red-50 border border-red-200 rounded-sm p-4">
            <RegisterError error={formError} />
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;