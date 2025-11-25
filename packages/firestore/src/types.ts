export type SkillsDB = {
  main: string[];
  other: string[];
};

export type InternalProject = {
  description: string;
  image: string;
};

export type Project = Pick<InternalProject, "description"> & {
  imageLink: string;
};
