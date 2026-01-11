import { SkillType } from "./client";

export type Skills = {
  main: string[];
  other: string[];
};

export type Project = Record<
  "left" | "right",
  | {
      description: string;
      image: string;
      imageURL: string;
    }
  | undefined
>;

export type CmsProject = {
  id: string;
} & Project;

export type CmsSkill = {
  id: string;
  name: string;
  type: SkillType;
};

export enum Environment {
  PRODUCTION = "PRODUCTION",
  STAGING = "STAGING",
  BACKUP_PRODUCTION = "BACKUP_PRODUCTION",
}
