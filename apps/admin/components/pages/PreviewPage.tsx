import { getSkills } from "@portofolio/internal/client";
import { Environment, getProjects } from "@portofolio/internal/cms";
import { Fragment } from "react";
import { ProjectSide } from "../ProjectPreview";


export async function PreviewPage() {
  const [projects, skills] = await Promise.all([
    getProjects(Environment.PRODUCTION),
    getSkills(),
  ]);

  return (
    <div>
      <div>
        <div>
          <h2 className="text-3xl font-bold">Current projects displayed</h2>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <Fragment key={project.id}>
              <ProjectSide
                description={project.left.description}
                image={project.left.image}
                imageURL={project.left.imageURL}
              />
              <ProjectSide
                description={project.right.description}
                image={project.right.image}
                imageURL={project.right.imageURL}
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
    </div>
  );
}
