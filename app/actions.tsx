"use server"

import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore, getDocs, DocumentData} from "firebase/firestore";
import {list, getStorage, ref, getDownloadURL} from 'firebase/storage'
import { Resend } from "resend";
import {z} from "zod";

import { ContactEmail } from "@/components/utils/ContactEmail";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app, process.env.FIREBASE_BUCKET ?? "")

const db = getFirestore(app);
const collectionName = process.env.COLLECTION_NAME ?? "contact";
const settingsCollectionName = process.env.SETTINGS_COLLECTION_NAME ?? "settings";

const schema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  content: z.string().min(5),
});

const resend = new Resend(process.env.RESEND_EMAIL);
const fromEmail = process.env.FROM_EMAIL ?? "portofolio+local@resend.dev";
const toEmail = process.env.TO_EMAIL;

type FormState = {
  name?: string,
  email?: string,
  message?: string,
  database?: string,
  email_send?: string,
  success?: boolean,
}
export async function sendEmail(state: FormState, data: FormData) {
  const issues: FormState = {};

  const contactParser = await schema.safeParseAsync({
    email: data.get("email"),
    content: data.get("message"),
    name: data.get("name"),
  });

  if (!contactParser.success) {
    const errs = contactParser.error.format();
    issues.name = errs.name?._errors[0] ?? undefined
    issues.email = errs.email?._errors[0] ?? undefined
    issues.message = errs.content?._errors[0] ?? undefined
    return issues;
  }

  const contact = contactParser.data;

  try {
    await addDoc(collection(db, collectionName), {
      email: contact.email,
      message: contact.content,
      name: contact.name,
    });
  } catch (e) {
    issues['database'] = "Failed to save to database"
  }

  await resend.emails
    .send({
      from: fromEmail!,
      to: toEmail!,
      subject: `[PORTOFOLIO CONTACT] Received from ${contact.name}`,
      react: (
        <ContactEmail
          from={contact.email}
          name={contact.name}
          content={contact.content}
  />
),
})
.then((response) => {
    if (!!response.error) {
      issues['email'] =  "Failed to send email";
    }
  });

  return Object.keys(issues).length === 0 ? { success: true } : issues;
}

export async function getWorkStatus() {
  const settings = await getDocs(collection(db, settingsCollectionName));
  const arr: DocumentData[] = []
  settings.forEach(d => arr.push(d.data()))

  return arr[0] as { workStatus: string };
}

export async function listTechnologies(): Promise<Record<string, number>> {
  const technologies = await getDocs(collection(db, "technologies"));
  const arr: DocumentData[] = []
  technologies.forEach(d => arr.push(d.data()));

  return arr[0];
}

export async function getDownloadLink(filename: string) {
  const refStorage = ref(storage, filename);
  return await getDownloadURL(refStorage)
}