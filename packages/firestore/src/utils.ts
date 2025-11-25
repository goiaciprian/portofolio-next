import { InternalProject, SkillsDB } from "./types";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";

export const skillsDBConvertor = {
  toFirestore(skill: SkillsDB): DocumentData {
    return { main: skill.main, other: skill.other };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): SkillsDB {
    const data = snapshot.data();
    return data as SkillsDB;
  },
};

export const projectsConvertor = {
  toFirestore(project: InternalProject): DocumentData {
    return { description: project.description, image: project.image };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): InternalProject {
    const data = snapshot.data();
    return data as InternalProject;
  },
};
