export type Skills = {
  main: string[];
  other: string[];
};

export type Project = Record<
  "left" | "right",
  {
    description: string;
    image: string;
  }
>;
