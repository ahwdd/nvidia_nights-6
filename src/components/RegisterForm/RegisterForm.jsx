"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import PolygonH2 from "../PolygonH2";
import intersectFooter from "/public/Intersect-footer.png";
import Footer from "./Footer";
import RegisterSucces from "./RegisterSucces";
import RegisterError from "./RegisterError";
import Spinner from "./Spinner";
import CountryCitySelect from "./CountryCitySelect";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { pathNameGetter } from "@/services/services";
import Link from "next/link";
import { useParams } from "next/navigation";
import TermsButton from './TermsButton'
import FileInput from './components/FileInput'

function RegisterForm({ onBookingCreated }) {
  const t = useTranslations("Register");
  const { locale } = useParams();
  const pathname = usePathname();

  const formSchema = z.object({
    first_name: z
      .string()
      .min(3, t("formErrors.first_name.min"))
      .min(1, t("formErrors.first_name.required")),
    last_name: z
      .string()
      .min(3, t("formErrors.last_name.min"))
      .min(1, t("formErrors.last_name.required")),
    email: z.string().email(t("formErrors.email.invalid")),
    country: z
      .string()
      .min(3, t("formErrors.country.min"))
      .min(1, t("formErrors.country.required")),
    city: z
      .string()
      .min(3, t("formErrors.city.min"))
      .min(1, t("formErrors.city.required")),
    contest_type: z
      .string()
      .min(3, t("formErrors.contest_type.min"))
      .min(1, t("formErrors.contest_type.required")),
    hardware_used: z
      .string()
      .min(3, t("formErrors.hardware_used.min"))
      .min(1, t("formErrors.hardware_used.required")),
    software_used: z
      .string()
      .min(3, t("formErrors.software_used.min"))
      .min(1, t("formErrors.software_used.required")),
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
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

  const currentDate = new Date();
  const submissionDeadline = new Date('2025-05-20T23:59:59');

  useEffect(() => {
    if (currentDate > submissionDeadline) {
      setIsDeadlinePassed(true);
      setFormError(t("submission_deadline_passed") || "Submission deadline has passed. The contest is now closed.");
    }
  }, [t]);

  // State for registration success popup
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // State for the booking form
  const [booking, setBooking] = useState({
    workplace_id: 1,
    user_id: 1,
    status: 0,
    name: "",
    email: "",
    slug: "",
    birth_date: null,
    job_title: "",
    date: null,
    start_time: null,
    end_time: null,
  });

  const { register, handleSubmit, setValue, reset, formState: { errors },
        } = useForm({ resolver: zodResolver(formSchema) });

  const updateBookingWithProfile = useCallback((profile) => {
    setBooking((prev) => ({
      ...prev, ...profile, birth_date: new Date(profile.birth_date ? profile.birth_date : "1911-1-11"),
    }));
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setFormError("");
    
    if (currentDate > submissionDeadline) {
      setFormError(t("submission_deadline_passed") || "Submission deadline has passed. The contest is now closed.");
      setIsLoading(false);
      return;
    }
    
    const formData = new FormData();
    for (const key in data) {
      if (key === "file" && data[key] instanceof File) {
        formData.append(key, data[key]);
      } else if (key === "fileLink" && data[key]) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await axios.post("https://arabhardware.net/9675d4a085a5b1725357814392/api/v1/competitions", formData,
        { headers: { "Content-Type": "multipart/form-data" } } );
      if (response.status === 200) {
        setIsOpen(true);
        reset();
      }
    } catch (error) {
      if (error.response) {
        setFormError(String(error.response.data.errors.email[0]));
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

    const res = await fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country }),
    });
    const data = await res.json();
    setCities(data.data || []);
    setValue("city", "");
  };

  return (
    <>
      <div id="register"
        className="px-10 bg-black text-white lg:px-20 py-5 relative">
        <img alt="mask" src="/footer-mask.png" className="absolute hidden w-[200px] lg:w-[350px] bottom-0 z-0" />
        <div className="flex flex-col gap-8">
          <div className="w-full justify-between lg:mt-20 flex flex-col items-center lg:items-start">
            <div className="flex flex-col mb-10">
              <PolygonH2 text={t("title")} src1={intersectFooter} src2="/intersect-footer-shadow.png" />
              <p className="text-normal text-[1.4rem] mx-10">{t("win")}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full register-form flex flex-col gap-5">
            <div className="flex flex-col md:flex-row lg:justify-between gap-5 lg:gap-10">
              <div className="flex-col w-full flex gap-1">
                <label>{t("first_name")}*</label>
                <input className="w-full p-2" type="text" placeholder={t("first_name")} {...register("first_name")} />
                {errors.first_name && <RegisterError error={errors.first_name.message} />}
              </div>
              <div className="flex-col w-full flex gap-1">
                <label>{t("last_name")}*</label>
                <input className="w-full p-2" type="text" placeholder={t("last_name")} {...register("last_name")} />
                {errors.last_name && <RegisterError error={errors.last_name.message} />}
              </div>
            </div>
            <div className="flex-col flex gap-1">
              <label>{t("email")}*</label>
              <input className="w-full p-2" type="text" placeholder="example@gmail.com" {...register("email")} />
              {errors.email && <RegisterError error={errors.email.message} />}
            </div>
            <div className="flex flex-col md:flex-row lg:justify-between gap-5 lg:gap-10">
              <div className="w-full flex flex-col gap-1">
                <label>{t("country")}*</label>
                <select defaultValue="" id="countries" className="w-full p-2" {...register("country")} onChange={handleCountryChange}>
                  <option value="" disabled>{t("choose_country")}</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country === "Israel" ? "Palestine" : country}</option>
                  ))}
                </select>
                {errors.country && <RegisterError error={errors.country.message} />}
              </div>
              <div className="w-full flex flex-col gap-1">
                <label>{t("city")}*</label>
                <select defaultValue="" id="cities" className="w-full p-2" {...register("city")} disabled={!selectedCountry}>
                  <option value="" disabled>{t("choose_city")}</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && <RegisterError error={errors.city.message} />}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="contest">{t("contest_type")}*</label>
              <select defaultValue="" name="contest" className="w-full p-2" {...register("contest_type")}>
                <option value="" disabled>{t("choose_contest")}</option>
                <option value="3D/CGI">3D/CGI</option>
                <option value="Photography">{locale === "ar" ? "التصوير الفوتوغرافي" : "Photography"}</option>
                <option value="Digital Fashion Design">{locale === "ar" ? "تصميم الأزياء الرقمي" : "Digital Fashion Design"}</option>
                <option value="Architectural Design">{locale === "ar" ? "التصميم المعماري" : "Architectural Design"}</option>
              </select>
              {errors.contest_type && <RegisterError error={errors.contest_type.message} />}
            </div>
            <div className="flex flex-col md:flex-row lg:justify-between gap-5 lg:gap-10">
              <div className="w-full flex-col flex gap-1">
                <label>{t("hardware_used")}*</label>
                <input className="w-full p-2" type="text" placeholder={t("hardware_used_placeholder")} {...register("hardware_used")} />
                {errors.hardware_used && <RegisterError error={errors.hardware_used.message} />}
              </div>
              <div className="w-full flex-col flex gap-1">
                <label>{t("software_used")}*</label>
                <input className="w-full p-2" type="text" placeholder={t("software_used_placeholder")} {...register("software_used")} />
                {errors.software_used && <RegisterError error={errors.software_used.message} />}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1">
              <label>{t("brief_about_your_project")}</label>
              <textarea className="h-[150px] lg:h-[250px] p-2" {...register("brief")}></textarea>
              {errors.brief && <RegisterError error={errors.brief.message} />}
            </div>
            <FileInput register={register} setValue={setValue} errors={errors} />
            <p className="font-bold text-sm mb-5 text-white">{t("nvidia_requirement")}</p>
            <div className="-mt-8">
              <div className="flex items-center gap-2 text-white">
                <input type="checkbox" required checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                <p className="text-white flex items-center justify-center gap-2">
                  {t("agree")}
                  <TermsButton />
                </p>
              </div>
            </div>
            <button type="submit" disabled={isLoading || isDeadlinePassed} 
              className={`w-full flex justify-center items-center ${isDeadlinePassed ? 'bg-gray-500' : 'bg-mainGreen'} 
              text-black font-bold py-3 rounded-[4px]`} >
              {isLoading ? <Spinner /> : isDeadlinePassed ? t("deadline_passed") || "Deadline Passed" : t("submit")}
            </button>
            
            {formError && (
              <span className="text-xl -mt-3 text-red-700 flex items-center gap-1 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
                {formError}
              </span>
            )}
          </form>
        </div>
        <div className="z-10">
          <Footer />
        </div>
        <RegisterSucces isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default RegisterForm;
