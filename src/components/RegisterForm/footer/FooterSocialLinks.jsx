import { BsInstagram, BsTwitterX, BsYoutube, BsFillThreadsFill } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

export default function FooterSocialLinks() {
  return (
    <div className="flex gap-2">
      <a
        href="https://www.facebook.com/NVIDIAStudio"
        target="_blank"
        aria-label="facebook"
        className="text-zinc-500 bg-transparent w-[30px] rounded-full h-[30px] flex items-center justify-center"
      >
        <ImFacebook className="size-8" />
      </a>

      <a
        href="https://x.com/NVIDIASTudio"
        target="_blank"
        aria-label="X"
        className="text-zinc-500 bg-transparent w-[30px] rounded-full h-[30px] flex items-center justify-center"
      >
        <BsTwitterX className="size-8" />
      </a>

      <a
        href="https://www.instagram.com/nvidiastudio"
        target="_blank"
        aria-label="instagram"
        className="text-zinc-500 bg-transparent w-[30px] rounded-full h-[30px] flex items-center justify-center"
      >
        <BsInstagram className="size-8" />
      </a>

      <a
        href="https://www.youtube.com/channel/UCDeQdW6Lt6nhq3mLM4oLGWw"
        target="_blank"
        aria-label="youtube"
        className="text-zinc-500 bg-transparent w-[30px] rounded-full h-[30px] flex items-center justify-center"
      >
        <BsYoutube className="size-10" />
      </a>
      
      <a
        href="https://www.threads.net/@nvidiastudio"
        target="_blank"
        aria-label="youtube"
        className="text-zinc-500 bg-transparent w-[30px] rounded-full h-[30px] flex items-center justify-center"
      >
        <BsFillThreadsFill className="size-10" />
      </a>
    </div>
  );
}
