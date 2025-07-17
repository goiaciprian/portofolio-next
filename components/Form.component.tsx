"use client"
import {sendEmail} from "@/app/actions";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { useFormState } from "react-dom";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, CheckCircle} from "lucide-react";
import { Turnstile } from '@marsidev/react-turnstile';
import { useState } from "react";

export function Form() {

    const initialState = {
        name: '',
        email: '',
        message: '',
        database: '',
        email_send: '',
        success: false
    };

    const [formState, formAction] = useFormState(sendEmail, initialState)
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

    return (
        <form className="w-full max-w-lg mx-auto" action={formAction}>
            <div className="flex flex-col gap-4 sm:gap-[3vh]">
                <div>
                    <Label htmlFor="name" className="text-sm sm:text-base">Name</Label>
                    <Input 
                        id='name' 
                        name="name" 
                        type='text' 
                        min={5} 
                        className="mt-1 text-sm sm:text-base focus:border-moonstone"
                    />
                    {formState?.name && <p className="text-red-500 pt-2 text-xs sm:text-sm">{formState.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input id='email' name="email" className="focus:border-moonstone"/>
                    {formState?.email && <p className="text-red-500 pt-2">{formState.email}</p>}
                </div>
                <div>
                    <Label htmlFor="message">Content</Label>
                    <Textarea id='message' name="message" className="focus:border-moonstone"/>
                    {formState?.message && <p className="text-red-500 pt-2">{formState.message}</p>}
                </div>
                {formState?.database && <Alert variant='destructive'>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {formState.database}
                    </AlertDescription>
                </Alert>}
                {formState?.email_send && <Alert variant='destructive'>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {formState.email_send}
                    </AlertDescription>
                </Alert>}
                <div className="flex justify-center">
                    <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY!} onSuccess={setTurnstileToken} />
                </div>
                <Button className="mt-4" type="submit" disabled={!turnstileToken}>Submit</Button>
                {formState?.success && (
                    <Alert variant='success' className="mt-4">
                        <CheckCircle className="h-4 w-4" />
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>Email sent successfully</AlertDescription>
                    </Alert>
                )}
            </div>
        </form>
    )
} 