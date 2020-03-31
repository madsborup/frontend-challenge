import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
    font-family: ${theme.font.family.display};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    box-sizing: border-box;
  }

  body {
    color: ${theme.font.colors.text};
    background: ${theme.colors.background};
    font-size: ${theme.font.size.regular};
    line-height: 1.5;
    }
`;
