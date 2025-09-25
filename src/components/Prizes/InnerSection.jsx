import Image from "next/image";

export default function InnerSection({ title, title1='', subTitle='', description, bgImage, img }) {
  return (
    <div
      className="relative lg:h-[400px] py-4 overflow-hidden w-screen bg-gradient-to-r from-black lg:to-black/50 to-black/70 flex items-center justify-center"
    >
        <div className="w-full lg:h-full flex items-center lg:justify-between justify-center max-w-5xl mx-auto max-lg:flex-wrap max-sm:px-4">
            <div className="relative z-10 flex flex-col justify-center max-sm:items-center h-full p-6 w-full text-white lg:max-w-xl">
                <div className="text-4xl font-medium mb-4 flex flex-col max-w-fit items-center justify-center gap-2">
                {img && <Image priority src={img} alt="prize icon"
                  className="object-contain object-center size-24 invert"/>}
                  <span className="">{title1}</span>
                  <span className="">{subTitle}</span>
                  <span className="-mt-2">{title}</span>
                </div>
                {/* <p className="text-xl">{description}</p> */}
            </div>
            {bgImage && <Image priority src={bgImage} alt={title} 
            className="object-contain object-center lg:w-1/2 w-96 max-lg:-mt-20"/>}
        </div>

    </div>
  );
}
