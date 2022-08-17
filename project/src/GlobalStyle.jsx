import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* *, *::before, *::after {
    box-sizing: border-box;
  } */

  * {
  border-radius: 2px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  font-family: 'Gothic A1', sans-serif;
  letter-spacing: -0.04em;
};

  body {
      min-width: 800px;
      max-width: 1032px;
      margin: 0 auto;
  }
`;

export default GlobalStyle;