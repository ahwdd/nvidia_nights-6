"use client"
import Link from "next/link";
import { footerLinks } from "./data.js";
import { useParams } from "next/navigation.js";

export default function FooterSections({ t }) {
  const { locale } = useParams()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-white">
      <FooterSection locale={locale} title={t("companyInformation")} links={footerLinks.companyInformation} />
      <FooterSection locale={locale} title={t("newsAndEvents")} links={footerLinks.newsAndEvents} />
      <FooterSection locale={locale} title={t("popularLinks")} links={footerLinks.popularLinks} />
    </div>
  )
}

function FooterSection({locale='en', title='', links=[], }) {
  return (
    <div >
        <h3 className="font-bold mb-3 text-2xl border-b border-solid pb-2">{title}</h3>
        <ul className="flex flex-col gap-2">
          {links.map((item, idx) => (
            <li key={idx}>
              <Link href={item.href} target="_blank" className="text-mainGreen">
                {locale === "ar" ? item.arTitle : item.title}
              </Link>
            </li>
          ))}
        </ul>
    </div>
  )
}
