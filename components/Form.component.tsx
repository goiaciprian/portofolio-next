"use client"
import {sendEmail} from "@/app/actions";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { useFormState } from "react-dom";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {AlertCircle, CheckCircle} from "lucide-react";

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

    return (
        <form className="w-full" action={formAction}>
            <div className="flex flex-col gap-[3vh]">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id='name' name="name" type='text' min={5} className="focus:border-moonstone"/>
                    {formState?.name && <p className="text-red-500 pt-2">{formState.name}</p>}
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
                <Button>Submit</Button>
                {formState?.success && <Alert variant='success' >
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>
                        Email sent successfully
                    </AlertDescription>
                </Alert>}

            </div>
        </form>
    )
} 