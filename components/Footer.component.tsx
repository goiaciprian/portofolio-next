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
          className="flex justify-evenly m-[5vh]"
        >
          {linksNavigation}
        </div>
        <div className="flex flex-row gap-[5vh]">
          <a
            href="https://www.linkedin.com/in/ciprian-goia-951537197/"
            target="_blank"
          >
            <BiLogoLinkedinSquare size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/ciprian-goia-951537197/"
            target="_blank"
          >
            <BiLogoGithub size={40} />
          </a>
        </div>
        <div
          className="flex flex-row gap-[2px] p-[1rem] items-center"
        >
          <p>Powered by</p>
          <a href="https://vercel.com" target="_blank">
            <TbBrandVercel size={25} />
          </a>
        </div>
        <div>
          <p>Disclaimer: Work in progress</p>
        </div>
      </div>
    </SnapSection>
  );
}
