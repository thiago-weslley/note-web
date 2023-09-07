import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  a,
  button {
    cursor: pointer;
  }

  body {
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background_800};
    color: ${({ theme }) => theme.colors.white_100};
  }
`;
