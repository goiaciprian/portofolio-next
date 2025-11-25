import { Project as DBProject } from "./prisma.service";

export type Skills = {
  main: string[];
  other: string[];
};

export type Project = Pick<DBProject, "left" | "right">;
