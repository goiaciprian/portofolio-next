import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogClose,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

type ModalRender = {
    onCloseButton: React.ReactNode;
    headerText: string;
    contentType: 'jsx' | 'text';
    nodes: React.ReactNode;
    text: string[];
    openButtonText: string;
}

export function ModalRender({
    contentType,
    headerText,
    nodes = <React.Fragment></React.Fragment>,
    text = [],
    onCloseButton,
    openButtonText
}: ModalRender) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>{openButtonText}</Button>
            </DialogTrigger>
            <DialogOverlay />
            <DialogContent className="max-w-[85vw] bg-this_black border-this_black" aria-describedby={"mode about me dialog"} >
                <DialogHeader>
                    <DialogTitle  className="m-[2vw 2vw 0vw 2vw]">
                        <p>
                            {headerText}
                        </p>
                    </DialogTitle>
                </DialogHeader>
                <div className="m-[2vw]">
                    {contentType === 'jsx' ? (
                        nodes
                    ) : (
                        <div>
                            {text.map((txt, index) => (
                                <a
                                  className="leading-[2] mb-[2rem]"
                                    key={index}>
                                    {txt}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        {onCloseButton}
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}