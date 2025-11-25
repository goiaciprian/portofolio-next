import { Project, Skills } from "./ui.types";
import { prisma } from "./client";
import { getFileUrl } from "./utils";

export const getCVUrl = async () => {
  const cv = await getFileUrl("Ciprian_Goia_Fullstack_Engineer_CV.pdf");
  if (!cv) {
    return "";
  }
  return cv.url;
};

export const getSkills = async (): Promise<Skills> => {
  const skillsRaw = await prisma.skill.findMany();
  return skillsRaw.reduce(
    (final, current) => {
      if (current.type === "MAIN") {
        final.main.push(current.name);
      } else {
        final.other.push(current.name);
      }
      return final;
    },
    {
      main: [] as string[],
      other: [] as string[],
    }
  );
};

export const getProjects = async (): Promise<Project[]> => {
  const data = await prisma.project.findMany({
    select: {
      left: true,
      right: true,
    },
  });
  return data as Project[];
};

export * from "./ui.types";
