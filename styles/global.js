import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  * {
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  ::-moz-selection { background: #7E22CE90; color: white; }
  ::selection { background: #7E22CE90; color: white; }
`;
