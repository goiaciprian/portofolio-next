import { PrismaClient } from "../generated/prisma/client";

export const prisma = new PrismaClient();

export {
  type Project,
  type ProjectSide,
  type Skill,
  SkillType,
} from "../generated/prisma/client";
