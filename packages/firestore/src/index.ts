import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export type SkillsDB = {
  main: string[];
  other: string[];
};

const app = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
});

const storage = getStorage(app, process.env.FIREBASE_BUCKET ?? "");
const db = getFirestore(app);

export const getSkills = async (): Promise<SkillsDB> => {
  const collectionRef = collection(db, "skills");
  const snapshot = await getDocs(query(collectionRef, limit(1)));

  const doc = snapshot.docs[0]!.data();

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return {
    main: doc.main,
    other: doc.other,
  };
};


export const getDownloadLink = async () => {
  const refStorage = ref(storage, "Goia_Ciprian_Software_Engineer_CV.pdf");
  return await getDownloadURL(refStorage)
}