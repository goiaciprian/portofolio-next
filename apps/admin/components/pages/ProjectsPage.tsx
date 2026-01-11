import {
  deleteProjectById,
  Environment,
  getProjects,
} from "@portofolio/internal/cms";
import { ProjectSide } from "../ProjectPreview";
import { Fragment } from "react";
import { ProjectForm } from "../ProjectForm";
import { revalidatePath } from "next/cache";

export async function ProjectsPage({ env }: { env: Environment }) {
  const projects = await getProjects(env);
  return (
    <>
      <div>
        <h2 className="font-bold text-4xl">Manage projects</h2>
      </div>
      <div className="grid grid-cols-2 max-w-[75dvw]">
        <div>
          <h2 className="font-bold text-4xl">Preview</h2>
          <div>
            {projects.length === 0 && <p className="text-3xl p-5">Empty</p>}
            {projects.map((project) => (
              <Fragment key={project.id}>
                <h1 className="pt-8 font-semibold text-2xl">
                  <button
                    className="pr-4 font-bold cursor-pointer"
                    onClick={async () => {
                      "use server";
                      await deleteProjectById(project.id);
                      revalidatePath("/app", "page");
                    }}
                  >
                    X
                  </button>
                  Delete project row
                </h1>
                {project.left && (
                  <ProjectSide
                    side="left"
                    description={project.left.description}
                    image={project.left.image}
                    imageURL={project.left.imageURL}
                  />
                )}
                {project.right && (
                  <ProjectSide
                    side="right"
                    description={project.right.description}
                    image={project.right.image}
                    imageURL={project.right.imageURL}
                  />
                )}
                <div className="border-b-2 border-white py-3 max-w-[90%] mx-auto last:hidden" />
              </Fragment>
            ))}
          </div>
        </div>
        <div>
          <ProjectForm disable={env !== "STAGING"} />
        </div>
      </div>
    </>
  );
}
