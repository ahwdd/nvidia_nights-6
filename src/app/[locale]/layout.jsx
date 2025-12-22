// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";

import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Footer from "@/components/RegisterForm/footer/Footer";
import LanguageSwitcher from "@/components/Nav/LanguageSwitcher";

import { Jost } from "next/font/google";
import { Almarai } from "next/font/google";
import localFont from "next/font/local";

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
    className={`overflow-x-hidden w-screen bg-white text-black relative
    ${locale === "ar" ? almarai.className : `${nvidiaNala.variable} ${nvsans.className}`}`}>
      
      <Script id="meta-pixel" strategy="afterInteractive">
        {`(function () {
            if (typeof window === 'undefined') return;

            if (window.__FB_PIXEL_LOADED__) return;
            window.__FB_PIXEL_LOADED__ = true;

            !function(f,b,e,v,n,t,s){
              if(f.fbq) return;
              n=f.fbq=function(){
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq) f._fbq=n;
              n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[];
              t=b.createElement(e); t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);
            }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '2193762604480703');
            fbq('track', 'PageView');
          })();
        `}
      </Script>

      <noscript>
        <img height="1" width="1" style={{ display: "none" }} 
        src="https://www.facebook.com/tr?id=2193762604480703&ev=PageView&noscript=1" alt=""/>
      </noscript>
      <NextIntlClientProvider messages={messages}>
        {/* <Nav locale={locale} /> */}
        <LanguageSwitcher lang={locale} />
        <div className="min-h-screen">
          {children}
          <RegisterForm />
          <Footer />
        </div>
      </NextIntlClientProvider>
    </main>
  );
}
