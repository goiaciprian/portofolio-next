import { InfoIcon, X } from "lucide-react";
import { getSkills } from "@portofolio/internal/client";

export const Skills = async () => {
  const skills = await getSkills();

  return (
    <div>
      <h3 className="text-2xl lg:text-4xl font-bold">
        Skills
        <button
          popoverTarget="details-popover"
          className="cursor-pointer ml-2 align-middle"
          aria-label="skills informations"
        >
          <InfoIcon className="text-business-moonstone size-5 lg:size-6" />
        </button>
      </h3>
      <div className="py-4 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        {skills.main.map((item) => {
          return (
            <div
              key={item}
              className="px-4 py-2 rounded-2xl bg-business-moonstone/20 flex justify-center shadow hover:shadow-moonstone select-none"
            >
              <h4 className="lg:text-xl font-semibold">{item}</h4>
            </div>
          );
        })}
      </div>
      <div className="relative list-outside">
        <details className="details-skills">
          <summary className="select-none lg:text-xl cursor-pointer">
            <span className="align-middle">More</span>
          </summary>

          <div className="pt-5 pb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
              {skills.other.map((item) => {
                return (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-2xl bg-business-moonstone/20 flex justify-center shadow hover:shadow-moonstone select-none"
                  >
                    <h4 className="lg:text-xl font-semibold">{item}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </details>
        <div
          popover="auto"
          id="details-popover"
          className="h-full w-full bg-transparent animate-appear relative overflow-hidden backdrop:bg-black/50"
        >
          <button
            className="cursor-pointer h-full w-full relative"
            popoverTarget="details-popover"
            popoverTargetAction="hide"
          >
            <div className="absolute top-10 right-10">
              <X className="text-white" size="25" />
            </div>
          </button>
          <div className="m-4 top-[30vh] lg:top-[40vh] right-8 text-white bg-business-black-100 absolute h-60 rounded-2xl px-10">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-xl lg:text-3xl font-semibold block">
                Informations
              </h3>
              <p className="leading-8 lg:leading-10 lg:text-2xl mt-2 max-w-dvw block lg:max-w-5xl">
                The skills shown above are ones I use daily in my current role
                <br />
                Those under{" "}
                <span className="text-business-moonstone font-bold italic">
                  More
                </span>{" "}
                are skills I&apos;ve worked with in previous positions or
                personal projects.are skills that I&apos;ve worked with on
                previous jobs or on my personal projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
