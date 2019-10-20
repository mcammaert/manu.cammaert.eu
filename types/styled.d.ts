// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    margin: number;

    colors: {
      primary: string;
      primaryInvert: string;
      secondary: string;
      secondaryInvert: string;
      tertiary: string;
      tertiaryInvert: string;
      copy: string;
      copyInvert: string;
    };
  }
}
