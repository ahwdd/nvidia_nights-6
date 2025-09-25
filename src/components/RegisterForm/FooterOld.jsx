import Link from "next/link";
import logo from "/public/logo.svg";
import footerMask from "/public/footer-mask.png";
import Image from "next/image";
import { BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { useTranslations } from "next-intl";
import AHWLogo from '@/../public/ahw-logo.png'

function Footer() {
  const t = useTranslations("Register");
  return (
    <footer className="w-full h-full  px-5 flex flex-col justify-center mt-20 lg:mt-0 items-center lg:items-start lg:justify-start gap-8 overflow-hidden z-20">
      <a href="https://www.nvidia.com/en-me/studio/" className="underline  font-bold text-xl ">
        {t("learnMore")}
      </a>

      <div className="flex gap-0">
        <a href="https://www.facebook.com/NVIDIAStudio" target="_blank" aria-label="facebook"
          className=" text-white bg-black w-[40px] rounded-full h-[40px] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
            className="w-[30px] h-[30px]"
          >
            <g
              fill="#fdfdfd"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              //   style="mix-blend-mode: normal"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M16.403,9h-2.403v-2c0,-1.032 0.084,-1.682 1.563,-1.682h0.868c0.552,0 1,-0.448 1,-1v-1.254c0,-0.523 -0.401,-0.97 -0.923,-1.005c-0.604,-0.041 -1.209,-0.06 -1.815,-0.059c-2.713,0 -4.693,1.657 -4.693,4.699v2.301h-2c-0.552,0 -1,0.448 -1,1v2c0,0.552 0.448,1 1,1l2,-0.001v8.001c0,0.552 0.448,1 1,1h2c0.552,0 1,-0.448 1,-1v-8.003l2.174,-0.001c0.508,0 0.935,-0.381 0.993,-0.886l0.229,-1.996c0.069,-0.593 -0.395,-1.114 -0.993,-1.114z"></path>
              </g>
            </g>
          </svg>
        </a>

        <a href="https://www.instagram.com/nvidiastudio" target="_blank" aria-label="instagram"
          className=" text-white bg-black w-[40px] rounded-full h-[40px] flex items-center justify-center"
        >
          <BsInstagram className="size-8" />
        </a>

        <a href="https://x.com/NVIDIASTudio" target="_blank" aria-label="X"
          className=" text-white bg-black w-[40px] rounded-full h-[40px] flex items-center justify-center"
        >
          <BsTwitterX className="size-8" />
        </a>

        <a href="https://www.youtube.com/channel/UCDeQdW6Lt6nhq3mLM4oLGWw" target="_blank" aria-label="youtube"
          className=" text-white bg-black w-[40px] rounded-full h-[40px] flex items-center justify-center"
        >
          <BsYoutube className="size-10" />
        </a>
      </div>

      <div className="flex flex-col gap-0 lg:gap-10 lg:flex-row items-center">
        <Link className="flex items-center" href={"/"}>
          <svg
            enableBackground="new 0 0 974.7 179.7"
            version="1.1"
            viewBox="0 0 974.7 179.7"
            // xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="44"
          >
            <title>
              Artificial Intelligence Computing Leadership from NVIDIA
            </title>
            <path
              d="m962.1 144.1v-2.7h1.7c0.9 0 2.2 0.1 2.2 1.2s-0.7 1.5-1.8 1.5h-2.1m0 1.9h1.2l2.7 4.7h2.9l-3-4.9c1.5 0.1 2.7-1 2.8-2.5v-0.4c0-2.6-1.8-3.4-4.8-3.4h-4.3v11.2h2.5v-4.7m12.6-0.9c0-6.6-5.1-10.4-10.8-10.4s-10.8 3.8-10.8 10.4 5.1 10.4 10.8 10.4 10.8-3.8 10.8-10.4m-3.2 0c0.2 4.2-3.1 7.8-7.3 8h-0.3c-4.4 0.2-8.1-3.3-8.3-7.7s3.3-8.1 7.7-8.3 8.1 3.3 8.3 7.7c-0.1 0.1-0.1 0.2-0.1 0.3z"
              fill="#FFF"
            ></path>
            <path
              d="m578.2 34v118h33.3v-118h-33.3zm-262-0.2v118.1h33.6v-91.7l26.2 0.1c8.6 0 14.6 2.1 18.7 6.5 5.3 5.6 7.4 14.7 7.4 31.2v53.9h32.6v-65.2c0-46.6-29.7-52.9-58.7-52.9h-59.8zm315.7 0.2v118h54c28.8 0 38.2-4.8 48.3-15.5 7.2-7.5 11.8-24.1 11.8-42.2 0-16.6-3.9-31.4-10.8-40.6-12.2-16.5-30-19.7-56.6-19.7h-46.7zm33 25.6h14.3c20.8 0 34.2 9.3 34.2 33.5s-13.4 33.6-34.2 33.6h-14.3v-67.1zm-134.7-25.6l-27.8 93.5-26.6-93.5h-36l38 118h48l38.4-118h-34zm231.4 118h33.3v-118h-33.3v118zm93.4-118l-46.5 117.9h32.8l7.4-20.9h55l7 20.8h35.7l-46.9-117.8h-44.5zm21.6 21.5l20.2 55.2h-41l20.8-55.2z"
              fill="#FFF"
            ></path>
            <path
              fill="#76B900"
              d="m101.3 53.6v-16.2c1.6-0.1 3.2-0.2 4.8-0.2 44.4-1.4 73.5 38.2 73.5 38.2s-31.4 43.6-65.1 43.6c-4.5 0-8.9-0.7-13.1-2.1v-49.2c17.3 2.1 20.8 9.7 31.1 27l23.1-19.4s-16.9-22.1-45.3-22.1c-3-0.1-6 0.1-9 0.4m0-53.6v24.2l4.8-0.3c61.7-2.1 102 50.6 102 50.6s-46.2 56.2-94.3 56.2c-4.2 0-8.3-0.4-12.4-1.1v15c3.4 0.4 6.9 0.7 10.3 0.7 44.8 0 77.2-22.9 108.6-49.9 5.2 4.2 26.5 14.3 30.9 18.7-29.8 25-99.3 45.1-138.7 45.1-3.8 0-7.4-0.2-11-0.6v21.1h170.2v-179.7h-170.4zm0 116.9v12.8c-41.4-7.4-52.9-50.5-52.9-50.5s19.9-22 52.9-25.6v14h-0.1c-17.3-2.1-30.9 14.1-30.9 14.1s7.7 27.3 31 35.2m-73.5-39.5s24.5-36.2 73.6-40v-13.2c-54.4 4.4-101.4 50.4-101.4 50.4s26.6 77 101.3 84v-14c-54.8-6.8-73.5-67.2-73.5-67.2z"
            ></path>
          </svg>
        </Link>

        <div className="flex lg:flex-row  gap-3 items-center">
          <Image src={AHWLogo} alt="arabhardware logo" className="w-10" />

          <p className="lg:leading-[21px]">
            {t("managedBy")} <br className="lg:block hidden" /> by{" "}
            <br className="lg:hidden" />
            <a
              target="_blank"
              href="https://arabhardware.net/"
              className="font-semibold"
            >
              Arabhardware
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
