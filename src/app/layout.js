import localFont from "next/font/local";
import "./globals.css";
import { Jost } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// If loading a variable font, you don't need to specify the font weight

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

const helv = localFont({
  src: [
    {
      path: "./fonts/helvetica/HelveticaNeuelroman.ttf",
      weight: "400",
    },
    {
      path: "./fonts/helvetica/HelveticaNeuellight.ttf",
      weight: "500",
    },
    {
      path: "./fonts/helvetica/HekveticaNeuelbold.ttf",
      weight: "600",
    },
  ],
  display: "swap",
  variable: "--font-helv",
});

export const metadata = {
  title: "NVIDIA Studio Nights 6",
  description:
    "Unleash your creativity at NVIDIA Studio Night 6, the premier event celebrating the creative industry and the region's most inspiring artists. After five successful Studio Night events across Abu Dhabi, KSA, Egypt, and Turkey, the sixth edition arrives at Dubai's iconic Museum of the Future on 13 February.",
  charset: "utf-8",
  icons: {
    icon: "/favicon.svg",
  },
};

// Comments

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
        {children}
      </body>
    </html>
  );
}
