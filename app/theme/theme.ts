import { ThemeConfig, extendTheme, theme as defaultTheme, StyleFunctionProps } from "@chakra-ui/react";

export const moonstone = '#43BCCD';
export const black = '#1a202c';

export const theme: ThemeConfig = extendTheme({
  components: {
    Button: {
      variants: {
        moonstone: {
          // ...defaultTheme.components.Button.variants?.unstyled,
          backgroundColor: "brand.300",
          color: "brand.black",
          padding: '0 15px',
          _hover: {
            backgroundColor: "brand.black",
            color: "brand.300",
            boxShadow: `0 0 25px 2px ${moonstone}`
          }
        }
      }
    },
    Text: {
      variants: {
        'v-big': {
          fontSize: '2rem',
        },
        big: {
          fontSize: '1.5rem',
        }
      }
    },
    Textarea: {
      variants: {
        custom: (props: StyleFunctionProps) => ({
          ...defaultTheme.components.Textarea.variants?.outline(props),
          height: '250px',
          sm: {
            height: '100px',
          }
        })
      }
    }
  },
  colors: {
    brand: {
      black: black,
      300: moonstone
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
});