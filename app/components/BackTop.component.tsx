"use client"

import { IconButton } from "@chakra-ui/react"
import { ChevronUpIcon } from '@chakra-ui/icons';
import { moonstone } from "@/app/theme/theme";

export function BackTop() {

    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (

        <IconButton
            aria-label={'top'}
            icon={<ChevronUpIcon />}
            variant={'outline'}
            _hover={{
                backgroundColor: "brand.black",
                color: "brand.300",
                boxShadow: `0 0 25px 2px ${moonstone}`
            }}
            sx={{
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                borderRadius: '100px',
                backgroundColor: "brand.300",
                color: "brand.black"
            }}
            size={'lg'}
            onClick={scrollToTop}
        />
    )
}