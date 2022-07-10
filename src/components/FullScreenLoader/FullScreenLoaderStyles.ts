import styled from 'styled-components';

const FullScreenLoaderContainer = styled.div`
  background: ${({ theme }) => theme.color.primary.main};
  color: ${({ theme }) => theme.color.invertedText};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;

  main {
    h1 {
      font-size: 3.8rem;
    }
  }
`;

const LoadAnimation = styled.div`
  margin: 4rem auto 0 auto;
  max-width: 54.5rem;

  * {
    box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  ul li {
    list-style: none;
  }

  .cssload-flex-container {
    display: flex;
    display: -o-flex;
    display: -ms-flex;
    display: -webkit-flex;
    display: -moz-flex;
    flex-direction: row;
    -o-flex-direction: row;
    -ms-flex-direction: row;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    flex-wrap: wrap;
    -o-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    justify-content: space-around;
  }
  .cssload-flex-container li {
    padding: 1rem;
    height: 9.7rem;
    width: 9.7rem;
    margin: 2.9rem 1.9rem;
    position: relative;
    text-align: center;
  }

  .cssload-loading,
  .cssload-loading:after,
  .cssload-loading:before {
    display: inline-block;
    position: relative;
    width: 0.5rem;
    height: 4.9rem;
    background: ${({ theme }) => theme.color.invertedText};
    margin-top: 0.5rem;
    border-radius: 97.5rem;
    -o-border-radius: 97.5rem;
    -ms-border-radius: 97.5rem;
    -webkit-border-radius: 97.5rem;
    -moz-border-radius: 97.5rem;
    animation: cssload-upDown2 0.85s ease infinite;
    -o-animation: cssload-upDown2 0.85s ease infinite;
    -ms-animation: cssload-upDown2 0.85s ease infinite;
    -webkit-animation: cssload-upDown2 0.85s ease infinite;
    -moz-animation: cssload-upDown2 0.85s ease infinite;
    animation-direction: alternate;
    -o-animation-direction: alternate;
    -ms-animation-direction: alternate;
    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
    animation-delay: 0.2125s;
    -o-animation-delay: 0.2125s;
    -ms-animation-delay: 0.2125s;
    -webkit-animation-delay: 0.2125s;
    -moz-animation-delay: 0.2125s;
  }
  .cssload-loading:after,
  .cssload-loading:before {
    position: absolute;
    content: '';
    animation: cssload-upDown 0.85s ease infinite;
    -o-animation: cssload-upDown 0.85s ease infinite;
    -ms-animation: cssload-upDown 0.85s ease infinite;
    -webkit-animation: cssload-upDown 0.85s ease infinite;
    -moz-animation: cssload-upDown 0.85s ease infinite;
    animation-direction: alternate;
    -o-animation-direction: alternate;
    -ms-animation-direction: alternate;
    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
  }
  .cssload-loading:before {
    left: -1rem;
  }
  .cssload-loading:after {
    left: 1rem;
    animation-delay: 0.425s;
    -o-animation-delay: 0.425s;
    -ms-animation-delay: 0.425s;
    -webkit-animation-delay: 0.425s;
    -moz-animation-delay: 0.425s;
  }

  @keyframes cssload-upDown {
    from {
      transform: translateY(1.9rem);
    }
    to {
      transform: translateY(-1.9rem);
    }
  }

  @-o-keyframes cssload-upDown {
    from {
      -o-transform: translateY(1.9rem);
    }
    to {
      -o-transform: translateY(-1.9rem);
    }
  }

  @-ms-keyframes cssload-upDown {
    from {
      -ms-transform: translateY(1.9rem);
    }
    to {
      -ms-transform: translateY(-1.9rem);
    }
  }

  @-webkit-keyframes cssload-upDown {
    from {
      -webkit-transform: translateY(1.9rem);
    }
    to {
      -webkit-transform: translateY(-1.9rem);
    }
  }

  @-moz-keyframes cssload-upDown {
    from {
      -moz-transform: translateY(1.9rem);
    }
    to {
      -moz-transform: translateY(-1.9rem);
    }
  }

  @keyframes cssload-upDown2 {
    from {
      transform: translateY(2.9rem);
    }
    to {
      transform: translateY(-1.9rem);
    }
  }

  @-o-keyframes cssload-upDown2 {
    from {
      -o-transform: translateY(2.9rem);
    }
    to {
      -o-transform: translateY(-1.9rem);
    }
  }

  @-ms-keyframes cssload-upDown2 {
    from {
      -ms-transform: translateY(2.9rem);
    }
    to {
      -ms-transform: translateY(-1.9rem);
    }
  }

  @-webkit-keyframes cssload-upDown2 {
    from {
      -webkit-transform: translateY(2.9rem);
    }
    to {
      -webkit-transform: translateY(-1.9rem);
    }
  }

  @-moz-keyframes cssload-upDown2 {
    from {
      -moz-transform: translateY(2.9rem);
    }
    to {
      -moz-transform: translateY(-1.9rem);
    }
  }
`;

export { FullScreenLoaderContainer, LoadAnimation };
