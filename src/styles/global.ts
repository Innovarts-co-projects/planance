import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  *{

    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  :root {

    font-family: 'Inter', sans-serif;
    font-size: 62.5%;
  }

  body {

    background: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text};
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
