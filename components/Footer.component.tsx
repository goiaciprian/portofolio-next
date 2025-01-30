import linksNavigation from "@/components/utils/links.navigation";
import { SnapSection } from "@/components/SnapSection.component";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { TbBrandVercel } from "react-icons/tb";

export function Footer() {
  return (
    <SnapSection height="25vh">
      <div
        className="flex flex-col w-full items-center"
      >
        <div
          className="flex flex-wrap justify-center gap-4 sm:justify-evenly m-[2vh] sm:m-[5vh]"
        >
          {linksNavigation}
        </div>
        <div className="flex flex-row gap-[3vh] sm:gap-[5vh] my-4">
          <a
            href="https://www.linkedin.com/in/ciprian-goia-951537197/"
            target="_blank"
            className='hover:text-moonstone hover:drop-shadow-moonstone'
          >
            <BiLogoLinkedinSquare className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
          <a
            href="https://github.com/goiaciprian"
            target="_blank"
            className='hover:text-moonstone hover:drop-shadow-moonstone'
          >
            <BiLogoGithub className="w-8 h-8 sm:w-10 sm:h-10" />
          </a>
        </div>
        <div
          className="flex flex-row gap-[2px] p-2 sm:p-[1rem] items-center text-sm sm:text-base"
        >
          <p>Powered by</p>
          <a href="https://vercel.com" className='hover:text-moonstone hover:drop-shadow-moonstone' target="_blank">
            <TbBrandVercel className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </SnapSection>
  );
}
