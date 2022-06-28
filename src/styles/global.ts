import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{

    box-sizing: border-box;

    padding: 0;
    margin: 0;

    text-shadow: 1px 1px 2px 0px #0000001A;
  }

  :root {

    font-family: 'Inter', sans-serif;
    font-size: 62.5%;
  }

  body {

    background:${({ theme }) => theme.color.background};
    color:${({ theme }) => theme.color.text};
  }

  #app-root {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    height: 100vh;
    width: 100%;
    overflow: auto;
  }

  button {

    background: none;
    border: none;
    cursor: pointer;
  }

  .no-select, img, button {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;

    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    /* user-drag: none; */
  }

  @media (min-width: 1440px) {

    :root {
      font-size: 70%;
    }
  }
  @media (min-width: 1800px) {

    :root {
      font-size: 80%;
    }
  }
`;

export default GlobalStyles;
