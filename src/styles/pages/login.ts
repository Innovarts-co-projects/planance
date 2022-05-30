import styled from 'styled-components';

const LoginContainer = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.02);

  display: flex;

  width: 100%;

  main.login-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 144rem;

    padding: 4rem 0;
    margin: 0 auto;

    header.page-header {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 5rem;

      h1 {
        color: ${({ theme }) => theme.color.primary.main};
        font-size: 4.5rem;
      }

      span {
        color: ${({ theme }) => theme.color.primary.main};
        font-size: 1.3rem;
      }
    }
  }
`;

const LoginForm = styled.form`
  background: ${({ theme }) => theme.color.componentBackground};
  border-radius: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.02);

  display: flex;
  flex-direction: column;

  width: 90vw;
  max-width: 60rem;
  height: fit-content;

  padding: 4rem;

  transition: height 0.3s linear;

  .forgot-password {
    color: ${({ theme }) => theme.color.red};
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
  }

  .submit-button {
    color: ${({ theme }) => theme.color.invertedText};
    background: ${({ theme }) => theme.color.primary.main};

    border-radius: 0.5rem;
    font-size: 1.6rem;
    font-weight: 600;

    width: 100%;

    padding: 1.3rem;
    margin: 1.5rem 0 2rem;

    transition: background 0.25s linear;

    &:hover {
      background: ${({ theme }) => theme.color.primary.dark};
    }
    &:active {
      background: ${({ theme }) => theme.color.primary.light};
    }
  }
`;

const FormModeSelector = styled.div`
  background: ${({ theme }) => theme.color.gray.light};
  border-radius: 1rem;
  box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.02);

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5rem;

  position: relative;

  padding: 0.5rem;
  margin: 0 0 5rem;

  button {
    color: ${({ theme }) => theme.color.primary.main};
    font-size: 1.6rem;
    font-weight: 600;

    width: 100%;
    height: 100%;

    position: relative;
    z-index: 100;

    &.inactive {
      opacity: 0.65;
    }
  }

  .highlight-zone {
    background: ${({ theme }) => theme.color.componentBackground};
    border-radius: 1rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);

    width: 49%;
    height: 80%;

    position: absolute;
    z-index: 10;

    transition: all 0.15s ease-out;

    &.to-left {
      top: 50%;
      left: 0;
      transform: translate(2%, -50%);
    }
    &.to-right {
      top: 50%;
      left: 50%;
      transform: translate(0, -50%);
    }
  }
`;

export { LoginContainer, LoginForm, FormModeSelector };
