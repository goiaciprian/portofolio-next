"use client"

import { Button } from "@chakra-ui/react"
import React from 'react';
import { ModalRender } from "./ModalRender.component";

type ModalProps = {
    headerText: string;
    openButtonText: string;
    closeButtonText: string;
    nodes?: React.ReactNode;
    text?: string[];
} & ({
    contentType: 'jsx'
    nodes: React.ReactNode
} | {
    contentType: 'text'
    text: string[]
})

export function Modal({
    contentType,
    headerText,
    closeButtonText,
    openButtonText,
    nodes = <React.Fragment></React.Fragment>,
    text = []
}: ModalProps) {

    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)} variant={'moonstone'} >{openButtonText}</Button>
            <ModalRender
                contentType={contentType}
                text={text}
                headerText={headerText}
                isOpen={isOpen}
                nodes={nodes}
                onClose={() => setOpen(false)}
                onCloseButton={
                    <Button onClick={() => setOpen(false)} variant={'moonstone'} >{closeButtonText}</Button>
                }
            />
        </>
    )
}