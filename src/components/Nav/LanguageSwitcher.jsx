"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

import { CiGlobe } from "react-icons/ci";

export default function LanguageSwitcher({lang="en"}) {
  const searchParams = useSearchParams();
 const query = useMemo(() => {
    if (!searchParams) return "";
    const str = searchParams.toString();
    return str ? `?${str}` : "";
  }, [searchParams]);

  const targetLocale = lang === "ar" ? "en" : "ar";

  const label = targetLocale === "ar" ? "Ar" : "En";

  const positionClass = lang === "ar" ? "left-4" : "right-4";

  const href = `/${targetLocale}/${query}`;

  return (
    <div className="absolute w-full top-4 left-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-row-reverse px-4">
            <Link href={href} locale={targetLocale} aria-label={`Switch language to ${targetLocale}`}
                className="font-bold button-small relative block text-gray-200 w-fit">
                <span className="bg-black absolute bottom-0 left-1/2 sm:px-1 px-px">
                    {label}
                </span>
                <CiGlobe className="sm:size-8 size-6"/>
            </Link>
        </div>
    </div>
  );
}
