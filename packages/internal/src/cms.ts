import "server-only";

import { PrismaClientKnownRequestError } from "@prisma/client-runtime-utils";
import { prisma, SkillType } from "./client";
import { CmsProject, CmsSkill, Environment } from "./types";
import { getFiles, uploadImage } from "./utils";
import { Prisma } from "../generated/prisma";

export const getEnvironments = async () => {
  return (await prisma.environment.findMany()) as {
    id: string;
    name: Environment;
  }[];
};

export const getProjects = async (
  environment: Environment,
): Promise<CmsProject[]> => {
  return (await prisma.project.findMany({
    where: {
      environment: {
        name: environment,
      },
    },
    omit: {
      environmentId: true,
    },
  })) as CmsProject[];
};

export const getSkills = async (
  environment: Environment,
): Promise<CmsSkill[]> => {
  return await prisma.skill.findMany({
    where: {
      environment: {
        name: environment,
      },
    },
  });
};

export const getProjectById = async (
  id: string,
): Promise<CmsProject | null> => {
  return (await prisma.project.findFirst({
    where: { id },
  })) as CmsProject | null;
};

export const createProject = async (
  input: Omit<CmsProject, "id">,
  environment: Environment,
): Promise<CmsProject> => {
  try {
    return (await prisma.project.create({
      omit: {
        environmentId: true,
      },
      data: {
        environment: {
          connect: {
            name: environment,
          },
        },
        left: input.left
          ? {
              description: input.left.description,
              image: input.left.image,
              imageURL: input.left.imageURL,
            }
          : undefined,
        right: input.right
          ? {
              description: input.right.description,
              image: input.right.image,
              imageURL: input.right.imageURL,
            }
          : undefined,
      },
    })) as CmsProject;
  } catch (e) {
    throw new Error(
      (e as PrismaClientKnownRequestError).message.replace(
        /^Invalid (.*) invocation:(\s)/gm,
        "",
      ),
    );
  }
};

export const createSkill = async (
  input: Omit<CmsSkill, "id">,
  environment: Environment,
): Promise<CmsSkill> => {
  try {
    return await prisma.skill.create({
      omit: {
        environmentId: true,
      },
      data: {
        name: input.name,
        type: input.type,
        environment: {
          connect: {
            name: environment,
          },
        },
      },
    });
  } catch (e) {
    throw new Error(
      (e as PrismaClientKnownRequestError).message.replace(
        /^Invalid (.*) invocation:(\s)/gm,
        "",
      ),
    );
  }
};

export const deleteProjectById = async (id: string) => {
  await prisma.project.delete({ where: { id } });
};

export const deleteSkillById = async (id: string) => {
  await prisma.skill.delete({ where: { id } });
};

export const getImages = async () => {
  return await getFiles("images/");
};

export const cloneEnvironment = async (from: Environment, to: Environment) => {
  try {
    await prisma.$transaction(async (tx) => {
      const envMap = await tx.environment.findMany().then((data) =>
        data.reduce(
          (final, current) => {
            final[current.name] = current.id;
            return final;
          },
          {} as Record<string, string>,
        ),
      );

      const sourceProjects = await tx.project.findMany({
        where: { environment: { name: from } },
      });
      const sourceSkills = await tx.skill.findMany({
        where: { environment: { name: from } },
      });

      await tx.project.deleteMany({ where: { environment: { name: to } } });
      await tx.skill.deleteMany({ where: { environment: { name: to } } });

      await tx.project.createMany({
        data: sourceProjects.map(
          (p) =>
            ({
              environmentId: envMap[to],
              left: p.left,
              right: p.right,
            }) as Prisma.ProjectCreateManyInput,
        ),
      });
      await tx.skill.createMany({
        data: sourceSkills.map(
          (s) =>
            ({
              environmentId: envMap[to],
              name: s.name,
              type: s.type,
            }) as Prisma.SkillCreateManyInput,
        ),
      });

      if (
        to === Environment.PRODUCTION &&
        from !== Environment.BACKUP_PRODUCTION
      ) {
        await tx.project.deleteMany({
          where: { environment: { name: Environment.BACKUP_PRODUCTION } },
        });
        await tx.skill.deleteMany({
          where: { environment: { name: Environment.BACKUP_PRODUCTION } },
        });

        await tx.project.createMany({
          data: sourceProjects.map(
            (p) =>
              ({
                environmentId: envMap[Environment.BACKUP_PRODUCTION],
                left: p.left,
                right: p.right,
              }) as Prisma.ProjectCreateManyInput,
          ),
        });
        await tx.skill.createMany({
          data: sourceSkills.map(
            (s) =>
              ({
                environmentId: envMap[Environment.BACKUP_PRODUCTION],
                name: s.name,
                type: s.type,
              }) as Prisma.SkillCreateManyInput,
          ),
        });
      }
    });
  } catch (e) {
    console.log(e as PrismaClientKnownRequestError);
  }
};

export {
  type CmsProject,
  type CmsSkill,
  type SkillType,
  Environment,
  uploadImage,
};
