import { InfoIcon, X } from "lucide-react";

export const Skills = () => {
  return (
    <div>
      <h3 className="text-4xl font-bold">
        Skills
        <button
          popoverTarget="details-popover"
          className="cursor-pointer ml-2 align-middle"
        >
          <InfoIcon className="text-business-moonstone size-6" />
        </button>
      </h3>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        {arr.map((item) => {
          return (
            <div
              key={item}
              className="px-4 py-2 rounded-2xl bg-business-moonstone/20 flex justify-center shadow hover:shadow-moonstone select-none"
            >
              <h5 className="text-xl font-semibold">{item}</h5>
            </div>
          );
        })}
      </div>
      <div className="relative list-outside">
        <details className="details-skills">
          <summary className="select-none text-xl cursor-pointer">
            <span className="align-middle">More</span>
          </summary>

          <div className="pt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
              {arrLess.map((item) => {
                return (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-2xl bg-business-moonstone/20 flex justify-center shadow hover:shadow-moonstone select-none"
                  >
                    <h5 className="text-xl font-semibold">{item}</h5>
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
          <div className="m-4 top-[40vh] right-8 text-white bg-business-black-100 absolute h-60 rounded-2xl px-10">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-3xl font-semibold block">Informations</h3>
              <p className="leading-10 text-2xl mt-2 max-w-dvw block">
                The skills already displayed are the ones I use daily at my
                current position.
                <br />
                The ones under{" "}
                <span className="text-business-moonstone font-bold italic">
                  More
                </span>{" "}
                are skills that I&apos;ve worked on previous jobs or on my
                personal project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const arr = ["NextJS", "React", "NestJS", "PostgreSQL", "AWS"];

const arrLess = ["Angular", ".NET", "Java", "MongoDB"];
