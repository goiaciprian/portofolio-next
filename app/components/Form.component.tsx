"use client"

import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useToast } from "@/app/hooks/useToast.hook";

interface FormType {
    name: string,
    email: string,
    content: string
}

export function Form() {
    const { toastError, toastSuccess } = useToast();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormType>();

    const submit = async (data: FieldValues) => {
        await fetch('/api/contact', {
            method: "POST",
            body: JSON.stringify({ name: data['name'], email: data['email'], content: data['content'] }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => toastSuccess("Thanks for contacting me"))
            .catch(() => toastError("Thanks for trying to contact me, but it didn't worked"))
    }

    return (
        <form onSubmit={handleSubmit(submit)} style={{ width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3vh' }} >
                <FormControl isInvalid={!!errors['name']} >
                    <FormLabel htmlFor="name" >Name</FormLabel>
                    <Input id='name' {...register('name', { required: "The name is required" })} />
                    <FormErrorMessage>
                        {!!errors['name'] && errors['name'].message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors['email']} >
                    <FormLabel htmlFor="email" >Email</FormLabel>
                    <Input id='name' {...register('email', {
                        required: "The email is required", pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'This is not a valid email address'
                        }
                    })} />
                    <FormErrorMessage>
                        {!!errors['email'] && errors['email'].message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors['content']} >
                    <FormLabel htmlFor="content" >Content</FormLabel>
                    <Textarea id='name' variant={'custom'} {...register('content', {
                        required: "I think you may have a few things to say"
                    })} />
                    <FormErrorMessage>
                        {!!errors['content'] && errors['content'].message}
                    </FormErrorMessage>
                </FormControl>
                <Button isLoading={isSubmitting} type="submit" variant={'moonstone'} >Submit</Button>
            </Box>
        </form>
    )
} 