import { BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

export default function FooterSocialLinks() {
  return (
    <div className="flex gap-2">
      <a href="https://www.facebook.com/NVIDIAStudio"
        target="_blank"
        aria-label="facebook"
        className="text-zinc-500 w-[30px] rounded-full h-[30px] flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg"
          width="100" height="100" viewBox="0,0,256,256" 
          className="w-[30px] h-[30px]">
          <g fill="#71717a" fillRule="nonzero">
            <g transform="scale(10.66667,10.66667)">
              <path d="M16.403,9h-2.403v-2c0,-1.032 0.084,-1.682 1.563,-1.682h0.868c0.552,0 1,-0.448 1,-1v-1.254c0,-0.523 -0.401,-0.97 -0.923,-1.005c-0.604,-0.041 -1.209,-0.06 -1.815,-0.059c-2.713,0 -4.693,1.657 -4.693,4.699v2.301h-2c-0.552,0 -1,0.448 -1,1v2c0,0.552 0.448,1 1,1l2,-0.001v8.001c0,0.552 0.448,1 1,1h2c0.552,0 1,-0.448 1,-1v-8.003l2.174,-0.001c0.508,0 0.935,-0.381 0.993,-0.886l0.229,-1.996c0.069,-0.593 -0.395,-1.114 -0.993,-1.114z"></path>
            </g>
          </g>
        </svg>
      </a>

      <a href="https://www.instagram.com/nvidiastudio"
        target="_blank" aria-label="instagram"
        className="text-zinc-500 w-[30px] rounded-full h-[30px] flex items-center justify-center"
      >
        <BsInstagram className="size-8" />
      </a>

      <a href="https://x.com/NVIDIASTudio"
        target="_blank" aria-label="X"
        className="text-zinc-500 w-[30px] rounded-full h-[30px] flex items-center justify-center">
        <BsTwitterX className="size-8" />
      </a>

      <a href="https://www.youtube.com/channel/UCDeQdW6Lt6nhq3mLM4oLGWw"
        target="_blank" aria-label="youtube"
        className="text-zinc-500 w-[30px] rounded-full h-[30px] flex items-center justify-center">
        <BsYoutube className="size-10" />
      </a>
    </div>
  );
}
