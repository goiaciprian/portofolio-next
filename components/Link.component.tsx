import React from 'react';
import NextLink, { LinkProps } from "next/link";

export function Link({ children, ...rest }: LinkProps & { children?: React.ReactNode }) {
    return <NextLink  className="px-[2rem] text-[1.5rem]" {...rest}>{children}</NextLink>
}