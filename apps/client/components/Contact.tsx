import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";

export const Contact = () => {
  return (
    <div className="pt-8">
      <h3 className="text-2xl lg:text-4xl font-bold">Socials</h3>
      <div className="flex flex-col md:flex-row w-full items-center gap-5 mt-5">
        <a
          href="https://github.com/goiaciprian"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer hover:text-business-moonstone hover:drop-shadow-moonstone"
          aria-label="go to github"
        >
          <BiLogoGithub className="size-10 lg:size-14" />
        </a>
        <a
          href="https://www.linkedin.com/in/ciprian-goia-951537197/"
          rel="noreferrer"
          target="_blank"
          className="cursor-pointer hover:text-business-moonstone hover:drop-shadow-moonstone"
          aria-label="go to linkedin"
        >
          <BiLogoLinkedinSquare className="size-10 lg:size-14" />
        </a>
      </div>
    </div>
  );
};
