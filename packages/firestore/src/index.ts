import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { Project, SkillsDB } from "./types";
import { projectsConvertor, skillsDBConvertor } from "./utils";

const app = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

const target = process.env.TARGET;

const storage = getStorage(app, process.env.FIREBASE_BUCKET ?? "");
const db = getFirestore(app);

const _downloadUrl = async (filename: string) => {
  const refStorage = ref(storage, filename);
  return await getDownloadURL(refStorage);
};

export const getSkills = async (): Promise<SkillsDB> => {
  const collectionRef = collection(db, "skills").withConverter(
    skillsDBConvertor
  );
  const snapshot = await getDocs(
    query(collectionRef, where(documentId(), "==", target), limit(1))
  );

  const doc = snapshot.docs[0]!.data();

  return {
    main: doc.main,
    other: doc.other,
  };
};

export const getDownloadLink = async () => {
  return await _downloadUrl("Goia_Ciprian_Software_Engineer_CV.pdf");
};

export const getExperience = async (): Promise<[Project, Project]> => {
  const colletionRef = collection(db, "projects").withConverter(
    projectsConvertor
  );
  const snapshot = await getDocs(
    query(colletionRef, orderBy("order", "asc"), limit(2))
  );

  const docs = await Promise.all(
    snapshot.docs.map(async (doc) => {
      const data = doc.data();
      const imageLink: string = await _downloadUrl(data.image);
      return {
        description: data.description as string,
        imageLink: imageLink as string,
      };
    })
  );
  return [
    { description: docs[0]!.description, imageLink: docs[0]!.imageLink },
    { description: docs[1]!.description, imageLink: docs[1]!.imageLink },
  ];
};

export type { SkillsDB, Project };
