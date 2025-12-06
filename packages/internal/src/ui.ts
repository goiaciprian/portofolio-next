import { Environment, Project, Skills } from "./types";
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
  const skillsRaw = await prisma.skill.findMany({
    where: {
      environment: {
        name: Environment.PRODUCTION,
      },
    },
  });
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
    where: {
      environment: {
        name: Environment.PRODUCTION,
      },
    },
    select: {
      left: true,
      right: true,
    },
  });
  return data as Project[];
};

export * from "./types";
