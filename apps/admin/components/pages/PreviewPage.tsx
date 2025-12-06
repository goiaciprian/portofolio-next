import { getSkills } from "@portofolio/internal/client";
import { Environment, getProjects } from "@portofolio/internal/cms";
import Image from "next/image";
import { Fragment } from "react";

function ProjectSide({
  description,
  image,
}: {
  description: string;
  image: string;
}) {
  return (
    <div className="pt-5">
      <div>
        <label htmlFor="description" className="text-2xl font-semibold">
          Description
        </label>
        <p id="description" className="text-xl pt-3">
          {description}
        </p>
      </div>
      <div className="pt-5">
        <label htmlFor="image" className="text-2xl font-semibold">
          Image
        </label>
        <Image
          width="150"
          height="150"
          src={image}
          id="image"
          alt="project image"
        />
      </div>
    </div>
  );
}

export async function PreviewPage() {
  const [projects, skills] = await Promise.all([getProjects(Environment.PRODUCTION), getSkills()]);

  return (
    <>
      <div>
        <div>
          <h2 className="text-3xl font-bold">Current projects displayed</h2>
        </div>
        <div className="grid grid-cols-2 gap-10">
          {projects.map((project) => (
            <Fragment key={project.id}>
              <ProjectSide
                description={project.left.description}
                image={project.left.image}
              />
              <ProjectSide
                description={project.right.description}
                image={project.right.image}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <hr className="my-5 h-px border-t-0 bg-transparent bg-linear-to-r from-transparent to-transparent opacity-55 via-neutral-400" />
      <div className="">
        <div>
          <h2 className="text-3xl font-bold">Current skills displayed</h2>
        </div>
        <div>
          <div className="pt-4">
            <label htmlFor="main" className="text-2xl font-semibold">
              Main
            </label>
            <p id="main" className="text-xl pt-2">
              {skills.main.join(", ")}
            </p>
          </div>
          <div className="pt-3">
            <label htmlFor="other" className="font-semibold text-2xl">
              Other
            </label>
            <p id="other" className="text-xl pt-2">
              {skills.other.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
