"use client";

import React, { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import RegisterSucces from "./RegisterSucces";
import RegisterError from "./RegisterError";
import Spinner from "./Spinner";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import TermsButton from "./components/TermsButton";
import FileInput from "./components/FileInput";

function RegisterForm({ onBookingCreated }) {
  const t = useTranslations("Register");
  const { locale } = useParams();

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
    file: z.union([
      z.string().url({ message: t("formErrors.file.invalid_url") }),
      z.instanceof(File, { message: t("formErrors.file.invalid_url") }),
    ]),
  });

  const [formError, setFormError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

  const currentDate = new Date();
  const submissionDeadline = new Date("2026-11-15T23:59:59"); // November 15, 2026

  useEffect(() => {
    if (currentDate > submissionDeadline) {
      setIsDeadlinePassed(true);
      setFormError(
        t("submission_deadline_passed") ||
          "Submission deadline has passed. The contest is now closed."
      );
    }
  }, [t]);

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
        setIsOpen(true);
        reset();
        setSelectedCountry("");
        setCities([]);
        setIsChecked(false);
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
    <div id="submit" className="w-full max-w-[954px] mx-auto px-2 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="heading-medium font-bold text-black mb-2">
          {t("title") || "Submit Your Artwork"}
        </h1>
        <p className="heading-smallest font-bold text-gray-700">
          {t("subTitle") || "Deadline November 15, 2025"}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-5"
      >
        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <input
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              type="text"
              placeholder={t("first_name") || "First Name"}
              {...register("first_name")}
            />
            {errors.first_name && (
              <RegisterError error={errors.first_name.message} />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              type="text"
              placeholder={t("last_name") || "Last Name"}
              {...register("last_name")}
            />
            {errors.last_name && (
              <RegisterError error={errors.last_name.message} />
            )}
          </div>
        </div>

        {/* Email & Country */}
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <input
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              type="email"
              placeholder={t("email") || "Email Address"}
              {...register("email")}
            />
            {errors.email && <RegisterError error={errors.email.message} />}
          </div>
          <div className="flex flex-col gap-2">
            <select
              defaultValue=""
              className={`w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white
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

        {/* City & Contest Type */}
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <select defaultValue=""
              className={`w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white
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
              className={`w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 bg-white
                ${(contest && contest != '')? '': 'text-gray-400'}`}
              {...register("contest_type")}
            >
              <option value="" disabled>
                {t("choose_contest") || "Contest Type"}
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
              <option value="Architectural Design">
                {locale === "ar" ? "التصميم المعماري" : "Architectural Design"}
              </option>
            </select>
            {errors.contest_type && (
              <RegisterError error={errors.contest_type.message} />
            )}
          </div>
        </div>

        {/* Hardware Used & Software Used */}
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <input
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              type="text"
              placeholder={t("hardware_used") || "Hardware Used"}
              {...register("hardware_used")}
            />
            {errors.hardware_used && (
              <RegisterError error={errors.hardware_used.message} />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500"
              type="text"
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
            className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-500 h-[150px] resize-none"
            placeholder={t("brief_about_your_project") || "Brief About Your Project"}
            {...register("brief")}
          ></textarea>
          {errors.brief && <RegisterError error={errors.brief.message} />}
        </div>

        {/* File Input */}
        <div className="grid grid-cols-2 gap-5">
          <FileInput register={register} setValue={setValue} errors={errors} />
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between">
          <p className="font-bold text-medium text-black">
            {t("nvidia_requirement") || "You need to be using NVIDIA products to participate."}
          </p>
          
          <button type="submit" disabled={isLoading || isDeadlinePassed}
            className={`w-fit button-large flex justify-center items-center text-black font-bold py-2 px-3 transition-colors
              ${isDeadlinePassed ? "bg-gray-400 cursor-not-allowed" : "bg-[#74B800] hover:bg-[#5f9600]"} `}>
            {isLoading ? (
              <Spinner />
            ) : isDeadlinePassed ? (
              t("deadline_passed") || "Deadline Passed"
            ) : (
              t("submit") || "Submit"
            )}
          </button>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2 text-sm">
          <input type="checkbox"
            required
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mt-1 size-4"
          />
          <div className="text-black flex items-center gap-1 flex-wrap text-[15px]">
            <span>{t("agree") || "I agree to all"}</span>
            <TermsButton />
          </div>
        </div>

        {/* Error Message */}
        {formError && (
          <div className="bg-red-50 border border-red-200 rounded-sm p-4">
            <RegisterError error={formError} />
          </div>
        )}
      </form>

      {/* Success Modal */}
      <RegisterSucces isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default RegisterForm;