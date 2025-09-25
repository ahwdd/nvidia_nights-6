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
  title: "NVIDIA Studio Nights 5",
  description:
    "Studio Nights, an exciting event for photographers, videographers, digital artists, 3D designers, and CGI specialists. Building on the success of our previous edition, this event is a celebration of innovation and digital artistry, offering a unique opportunity to network, explore, and gain inspiration. Experience the latest in NVIDIA Studio technologies and connect with the UAE's thriving creative community. Whether youre an expert or just starting out, Studio Nights is crafted to ignite creativity and highlight the best in digital arts. Participation in our contests is voluntary, allowing everyone to enjoy a variety of experiences without any prerequisites. Get ready to be inspired, learn, and celebrate the remarkable world of digital creativity",
  charset: "utf-8",
  // viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.svg", // Favicon
  },
  // openGraph: {
  //   title: "Default Open Graph Title",
  //   description: "Default Open Graph Description",
  //   images: "https://www.yourwebsite.com/default-image.jpg",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Default Twitter Title",
  //   description: "Default Twitter Description",
  //   images: "https://www.yourwebsite.com/default-image.jpg",
  // },
};

// Comments

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
