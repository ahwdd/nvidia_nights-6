"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useMemo, useEffect, useState } from "react";

import { CiGlobe } from "react-icons/ci";

export default function LanguageSwitcher({lang="en"}) {
  const searchParams = useSearchParams();
  const pathname = usePathname()

  const targetLocale = lang === "ar" ? "en" : "ar";
  const label = targetLocale === "ar" ? "Ar" : "En";

  const query = useMemo(() => {
    if (!searchParams) return "";
    const str = searchParams.toString();
    return str ? `?${str}` : "";
  }, [searchParams]);

  const positionClass = lang === "ar" ? "left-4" : "right-4";
  const runtimePrefix = (pathname.contains("/nights/sn6"))
    ? "/nights/sn6": "";
  const href = `/${targetLocale}/${runtimePrefix}${query}`
  console.log('href :>> ', href);
  console.log('pathname :>> ', pathname);
  console.log('pathname.contains() :>> ', pathname.contains('nights/sn6'));
  console.log('query :>> ', query);

  return (
    <div className="absolute w-screen top-4 left-0 z-50 bg-transparent max-md:px-8">
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
