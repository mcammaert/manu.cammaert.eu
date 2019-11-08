import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import { colors } from './colors';

export interface GlobalStyleProps {
  readonly light: boolean;
}

// const backgroundColor = (location: string) => (location === '/' ? colors.oxfordBlue : colors.fuzzyWuzzy);

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Nunito Sans', sans-serif;
    width: 100vw;
    background: ${({ light }) => (light ? colors.white : colors.black)};
    background-attachment: fixed;    
    color: ${({ light }) => (light ? colors.black : colors.snow)};
    transition: all 800ms;
    a {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const lightTheme = {
  margin: 15,
  colors: {
    primary: colors.charcoal,
    primaryInvert: colors.snow,
    secondary: colors.primary60,
    secondaryInvert: colors.white,
    tertiary: colors.secondary80,
    tertiaryInvert: colors.white,
    copy: colors.charcoal,
    copyInvert: colors.white,
  },
};

export const darkTheme = {
  margin: 15,
  colors: {
    primary: colors.snow,
    primaryInvert: colors.black,
    secondary: colors.primary30,
    secondaryInvert: colors.primary90,
    tertiary: colors.secondary30,
    tertiaryInvert: colors.secondary80,
    copy: colors.white,
    copyInvert: colors.charcoal,
  },
};
