import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@portofolio/internal/client";

export default async function Experience() {
  "use server";
  const projects = await getProjects();

  return (
    <>
      {projects.map((project, index) => (
        <section
          key={index}
          className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 mt-10"
        >
          <div className="max-w-fit lg:place-self-end">
            <div className="flex flex-col gap-5">
              <div className="place-items-center lg:place-items-end">
                <Link
                  href="https://www.ensemblesoftware.ro/"
                  rel="noreferrer"
                  target="_blank"
                  className="block hover:drop-shadow-moonstone"
                >
                  <Image
                    src={project.left.image}
                    width="155"
                    height="200"
                    alt="ensemble"
                  />
                </Link>
              </div>
              <p className="font-semibold lg:text-xl max-w-100">
                {project.left.description}
              </p>
            </div>
          </div>
          <div className="max-w-fit lg:place-self-start">
            <div className="flex flex-col gap-5">
              <div className="place-items-center lg:place-items-start">
                <Link
                  href="https://www.trimble.com/en"
                  rel="noreferrer"
                  target="_blank"
                  className="block hover:drop-shadow-moonstone"
                >
                  <Image
                    src={project.right.image}
                    width="135"
                    height="200"
                    alt="ensemble"
                  />
                </Link>
              </div>
              <p className="font-semibold lg:text-xl max-w-100">
                {project.right.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
