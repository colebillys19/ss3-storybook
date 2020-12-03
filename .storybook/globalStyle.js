import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100vh;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100vh;
    min-width: 100%;
  }

  p,
  label,
  div,
  input[type=text] {
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #282828;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin: 0;
  }
`;

export default GlobalStyle;
