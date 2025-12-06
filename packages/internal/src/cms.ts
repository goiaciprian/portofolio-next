import "server-only";

import { PrismaClientKnownRequestError } from "@prisma/client-runtime-utils";
import { prisma, SkillType } from "./client";
import { CmsProject, CmsSkill, Environment } from "./types";
import { getFiles } from "./utils";
import { Prisma } from "../generated/prisma";

export const getEnvironments = async () => {
  return (await prisma.environment.findMany()) as {
    id: string;
    name: Environment;
  }[];
};

export const getProjects = async (
  environment: Environment
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
  environment: Environment
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
  id: string
): Promise<CmsProject | null> => {
  return (await prisma.project.findFirst({
    where: { id },
  })) as CmsProject | null;
};

export const createProject = async (
  input: Omit<CmsProject, "id">,
  environment: Environment
): Promise<CmsProject> => {
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
      left: {
        description: input.left.description,
        image: input.left.image,
        imageURL: input.left.imageURL,
      },
      right: {
        description: input.right.description,
        image: input.right.image,
        imageURL: input.right.imageURL,
      },
    },
  })) as CmsProject;
};

export const createSkill = async (
  input: Omit<CmsSkill, "id">,
  environment: Environment
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
        ""
      )
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
      const envMap = await prisma.environment
        .findMany({
          where: {
            name: {
              in: [from, to],
            },
          },
        })
        .then((data) =>
          data.reduce(
            (final, current) => {
              final[current.name] = current.id;
              return final;
            },
            {} as Record<string, string>
          )
        );

      const sourceData = await prisma.environment.findFirstOrThrow({
        where: {
          name: from,
        },
        select: {
          project: true,
          skill: true,
        },
      });

      if (
        to === Environment.PRODUCTION &&
        from !== Environment.BACKUP_PRODUCTION
      ) {
        await tx.project.deleteMany({
          where: {
            environment: {
              name: Environment.BACKUP_PRODUCTION,
            },
          },
        });

        await tx.skill.deleteMany({
          where: {
            environment: {
              name: Environment.BACKUP_PRODUCTION,
            },
          },
        });

        await tx.project.updateMany({
          where: {
            environment: {
              name: to,
            },
          },
          data: {
            environmentId: Environment.BACKUP_PRODUCTION,
          },
        });

        await tx.project.updateMany({
          where: {
            environment: {
              name: to,
            },
          },
          data: {
            environmentId: Environment.BACKUP_PRODUCTION,
          },
        });
      } else {
        await tx.project.deleteMany({
          where: {
            environment: {
              name: to,
            },
          },
        });

        await tx.project.deleteMany({
          where: {
            environment: {
              name: to,
            },
          },
        });
      }

      await tx.project.createMany({
        data: sourceData.project.map(
          (project) =>
            ({
              environmentId: envMap[to],
              left: project.left,
              right: project.right,
            }) as Prisma.ProjectCreateManyInput
        ),
      });

      await tx.skill.createMany({
        data: sourceData.skill.map(
          (skill) =>
            ({
              environmentId: envMap[to],
              name: skill.name,
              type: skill.type,
            }) as Prisma.SkillCreateManyInput
        ),
      });
    });
  } catch (e) {
    console.log(e as PrismaClientKnownRequestError);
  }
};

export { type CmsProject, type CmsSkill, type SkillType, Environment };
