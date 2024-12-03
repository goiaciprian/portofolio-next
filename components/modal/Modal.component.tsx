import React from 'react';
import { ModalRender } from "./ModalRender.component";
import {Button} from "@/components/ui/button";

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

    return (
        <>
            <ModalRender
                contentType={contentType}
                text={text}
                headerText={headerText}
                nodes={nodes}
                onCloseButton={
                    <Button className='md:text-lg lg:text-lg'>{closeButtonText}</Button>
                }
                openButtonText={openButtonText}
            />
        </>
    )
}