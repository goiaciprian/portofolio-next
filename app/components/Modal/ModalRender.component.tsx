import React from 'react';
import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

type ModalRender = {
    isOpen: boolean;
    onClose: () => void;
    onCloseButton: React.ReactNode;
    headerText: string;
    contentType: 'jsx' | 'text';
    nodes: React.ReactNode;
    text: string[];
}

export function ModalRender({
    isOpen,
    onClose,
    contentType,
    headerText,
    nodes = <React.Fragment></React.Fragment>,
    text = [],
    onCloseButton
}: ModalRender) {

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnEsc
            closeOnOverlayClick
            isCentered
            scrollBehavior={'inside'}>
            <ModalOverlay />
            <ModalContent maxW={'85vw'}>
                <ModalHeader sx={{ margin: '2vw 2vw 0vw 2vw' }}>
                    <Text>
                        {headerText}
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody sx={{ margin: '2vw' }}>
                    {contentType === 'jsx' ? (
                        nodes
                    ) : (
                        <Box>
                            {text.map((txt, index) => (
                                <Text
                                    key={index}
                                    lineHeight={2}
                                    sx={{ marginBottom: '2rem' }}>
                                    {txt}
                                </Text>
                            ))}
                        </Box>
                    )}
                </ModalBody>
                <ModalFooter>
                    {onCloseButton}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}