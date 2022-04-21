// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const customTheme = {
  semanticTokens: {
    colors: {
      error: 'red.500',
      text: {
        default: 'black',
        _dark: 'white',
      },
    },
  },
}

// 3. extend the theme
const theme = extendTheme({ config,customTheme })

export default theme