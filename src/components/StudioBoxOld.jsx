import { useTranslations } from "use-intl";
import { CiCalendar } from 'react-icons/ci'

function StudioBox({
  img,
  index,
  url,
  t,
  city = "Riyadh",
  date = "15 feb 2024",
}) {
  return (
    // bg-mainGreenOpacity
    <div
      style={{
        background: `url("/${img}") center center no-repeat`,
        backgroundSize: "cover",
      }}
      className="w-full lg:w-2/5"
    >
      <div className="overflow-hidden bg-gradient w-full  flex flex-col gap-2 justify-center p-10">
        <h2 className="text-2xl font-medium">
          {t("nvidia")} {index}
        </h2>
        <p className="text-3xl font-bold">{city}</p>
        <p className="flex gap-2 text-black font-normal text-lg">
          <span className="flex gap-1 items-center">
            {/* <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 15.9253C0 17.4453 1.16234 18.6077 2.68233 18.6077H15.1999C16.7199 18.6077 17.8822 17.4453 17.8822 15.9253V8.77246H0V15.9253ZM15.1999 2.51369H13.4117V1.61957C13.4117 1.08311 13.054 0.725464 12.5176 0.725464C11.9811 0.725464 11.6234 1.08311 11.6234 1.61957V2.51369H6.25878V1.61957C6.25878 1.08311 5.90113 0.725464 5.36467 0.725464C4.8282 0.725464 4.47055 1.08311 4.47055 1.61957V2.51369H2.68233C1.16234 2.51369 0 3.67603 0 5.19602V6.98424H17.8822V5.19602C17.8822 3.67603 16.7199 2.51369 15.1999 2.51369Z"
                fill="#74B800"
              />
            </svg> */}
            {date}
          </span>
        </p>

        <a
          target="_blank"
          href={url}
          className="self-end flex gap-1 items-center justify-center bg-white py-3 px-6 rounded-[4px]"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-link"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg> */}

          {t("video")}
        </a>
      </div>
    </div>
  );
}

export default StudioBox;
