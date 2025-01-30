import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogClose,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

type ModalRender = {
    onCloseButton: React.ReactNode;
    headerText: string;
    contentType: 'jsx' | 'text';
    nodes: React.ReactNode;
    text: string[];
    openButtonText: string;
    className?: string;
}

export function ModalRender({
    contentType,
    headerText,
    nodes = <React.Fragment></React.Fragment>,
    text = [],
    onCloseButton,
    openButtonText,
    className
}: ModalRender) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='text-sm sm:text-base md:text-lg'>{openButtonText}</Button>
            </DialogTrigger>
            <DialogOverlay className="bg-black/80" />
            <DialogContent 
                className="max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] max-h-[90vh] bg-this_black border-this_black overflow-hidden flex flex-col"
                aria-describedby={"mode about me dialog"}
            >
                <DialogHeader className="p-4 sm:p-6">
                    <DialogTitle>
                        <p className="text-lg sm:text-xl md:text-2xl">
                            {headerText}
                        </p>
                    </DialogTitle>
                    <DialogDescription> </DialogDescription>
                </DialogHeader>
                
                <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-2">
                    {contentType === 'jsx' ? (
                        nodes
                    ) : (
                        <div className="space-y-4">
                            {text.map((txt, index) => (
                                <p
                                    className="text-sm sm:text-base leading-relaxed"
                                    key={index}>
                                    {txt}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                <DialogFooter className="p-4 sm:p-6 mt-auto border-t border-gray-800">
                    <DialogClose asChild>
                        {onCloseButton}
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}