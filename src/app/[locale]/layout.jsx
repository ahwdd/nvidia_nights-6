// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import LanguageSwitcher from "@/components/Nav/LanguageSwitcher";

import { Jost } from "next/font/google";
import { Almarai } from "next/font/google";
import localFont from "next/font/local";
import FacebookPixel from "@/components/FacebookPixel";
import Footer from "@/components/RegisterForm/footer/Footer";

const jost = Jost({ subsets: ["latin"], display: "swap" });
const almarai = Almarai({ subsets: ["arabic"], weight: ["300","400","700","800"] });

const nvsans = localFont({
  src: [
    { path: "../fonts/nvsans/NVIDIASans_W_Rg.woff", weight: "400", style: "normal" },
    { path: "../fonts/nvsans/NVIDIASans_W_Bd.woff", weight: "700", style: "normal" },
    { path: "../fonts/nvsans/NVIDIASans_W_It.woff", weight: "400", style: "italic" },
    { path: "../fonts/nvsans/NVIDIASans_W_Lt.woff", weight: "300", style: "normal" },
    { path: "../fonts/nvsans/NVIDIASans_W_LtIt.woff", weight: "300", style: "italic" },
    { path: "../fonts/nvsans/NVIDIASans_W_Md.woff", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-nvsans",
});

const nvidiaNala = localFont({
  src: [
    { path: "../fonts/NVIDIA-NALA/HandelNormal.ttf", weight: "300", style: "normal" },
    { path: "../fonts/NVIDIA-NALA/HandelGothic.ttf", weight: "400", style: "normal" },
    { path: "../fonts/NVIDIA-NALA/HandelGotDBol.ttf", weight: "400", style: "bold" },
    { path: "../fonts/NVIDIA-NALA/HandelGothicEx.ttf", weight: "500", style: "normal" },
    { path: "../fonts/NVIDIA-NALA/HandelGothicWd.ttf", weight: "600", style: "normal" },
    { path: "../fonts/NVIDIA-NALA/HandelGothicBT.ttf", weight: "700", style: "normal" },
    { path: "../fonts/NVIDIA-NALA/HandelGothicDBold.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-nvidia-nala",
  display: "swap",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <main lang={locale} dir={locale === "en" ? "ltr" : "rtl"} 
    className={`overflow-x-hidden w-full bg-white text-black relative
    ${locale === "ar" ? almarai.className : `${nvidiaNala.variable} ${nvsans.className}`}`}>
      <NextIntlClientProvider messages={messages}>
        <FacebookPixel />
        {/* <Nav locale={locale} /> */}
        <LanguageSwitcher lang={locale} />
        <div className="min-h-screen">
          {children}
          <Footer />
        </div>
      </NextIntlClientProvider>
    </main>
  );
}
