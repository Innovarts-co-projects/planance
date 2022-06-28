import styled from 'styled-components';

const UserSettingsContainer = styled.div`
  background: ${({ theme }) => theme.color.componentBackground};
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem #0001;

  display: flex;
  flex-direction: column;
  min-width: 28rem;

  position: absolute;
  top: 120%;
  right: 0%;

  padding: 2rem;

  .input-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;

    span {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 0.8rem;
    }

    input {
      background: ${({ theme }) => theme.color.gray.light};
      border: none;
      border-radius: 1rem;
      box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.03);
      font-size: 1.5rem;
      font-weight: 400;
      outline: none;
      padding: 1rem;
      width: 100%;

      &:disabled {
        cursor: not-allowed;
        opacity: 60%;
      }

      &::placeholder {
        color: ${({ theme }) => theme.color.gray.dark};
      }
    }
  }

  button {
    background: ${({ theme }) => theme.color.primary.main};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.color.componentBackground};
    font-size: 1.4rem;
    font-size: 500;

    width: 100%;
    padding: 1rem;
    margin-top: 0.5rem;

    transition: background 0.25s;

    &:hover {
      background: ${({ theme }) => theme.color.primary.dark};
    }
    &:active {
      background: ${({ theme }) => theme.color.primary.light};
    }
  }
`;

export { UserSettingsContainer };
