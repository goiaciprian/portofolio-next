import NextLink, { LinkProps } from "next/link";

export function Link({ children, ...rest }: LinkProps & { children?: React.ReactNode }) {
    return <NextLink style={{ fontSize: '1.5rem', padding: '0 2rem' }} {...rest}>{children}</NextLink>
}