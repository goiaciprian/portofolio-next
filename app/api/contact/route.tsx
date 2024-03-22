import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from 'zod';

import { ContactEmail } from "@/app/utils/ContactEmail";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const collectionName = process.env.COLLECTION_NAME ?? 'contact'

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    content: z.string()
})

const resend = new Resend(process.env.RESEND_EMAIL);
const fromEmail = process.env.FROM_EMAIL ?? 'portofolio+local@resend.dev';
const toEmail = process.env.TO_EMAIL;

export async function POST(req: Request) {
    const body = await req.json();
    let contact;
    try {
        contact = await schema.parseAsync(body)
    } catch (e) {
        return NextResponse.json(e, { status: 400 })
    }
    const issues = []
    try {
        await addDoc(collection(db, collectionName), {
            email: contact.email,
            message: contact.content,
            name: contact.name
        });
    } catch (e) {
        issues.push({ issues: [{ message: 'Failed to save to database' }] })
    }

    await resend.emails.send({
        from: fromEmail!,
        to: toEmail!,
        subject: `[PORTOFOLIO CONTACT] Received from ${contact.name}`,
        react: <ContactEmail from={contact.email} name={contact.name} content={contact.content} />

    }).then(response => {
        if (!!response.error) {
            issues.push({ issues: [{ message: 'Failed to send email' }] });
        }
    })

    return NextResponse.json({ issues }, { status: issues.length === 0 ? 200 : 207 })
}