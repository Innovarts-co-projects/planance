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

  button {

    background: none;
    border: none;
    cursor: pointer;
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
