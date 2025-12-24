"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from 'next-intl';
import React, { useMemo, useEffect, useState } from "react";

import { CiGlobe } from "react-icons/ci";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const targetLocale = currentLocale=='ar'?'en':'ar'

  const switchLanguage = (newLocale) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPath);
  };
  const isWhiteRoute = pathname.includes('/success')

  return (
    <div className="absolute w-screen top-4 left-0 z-50 bg-transparent max-md:px-8">
        <div className="max-w-7xl mx-auto flex flex-row-reverse px-4">
            <button onClick={()=>switchLanguage(targetLocale)} aria-label={`Switch language to ${targetLocale}`}
                className={`${isWhiteRoute?'bg-white text-gray-800':'bg-black text-gray-200'} 
                font-bold button-small relative block w-fit`}>
                <span className={`${isWhiteRoute?'bg-white':'bg-black'} absolute bottom-0 left-1/2 sm:px-1 px-px`}>
                    {currentLocale!="ar" ? "Ar" : "En"}
                </span>
                <CiGlobe className="sm:size-8 size-6"/>
            </button>
        </div>
    </div>
  );
}
