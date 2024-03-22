"use client"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "@/app/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      {children}
    </ChakraProvider>
  )
}