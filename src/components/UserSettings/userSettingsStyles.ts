import styled from 'styled-components';

import { slideDownAnimation } from '../../styles/animations';

const UserSettingsContainer = styled.div`
  animation: ${slideDownAnimation} 0.25s backwards;
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

  header {
    animation: ${slideDownAnimation} 0.25s 0.025s backwards;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;

    .user-info {
      display: flex;
      align-items: center;

      .user-pic-container {
        border-radius: 0.5rem;

        display: flex;

        width: 4rem;
        height: 4rem;

        position: relative;

        margin-right: 1.3rem;

        overflow: hidden;

        img {
          margin: auto auto 0;
        }

        &::after {
          content: '';
          box-shadow: inset 0 -0.5rem 1rem #00000011;

          display: flex;

          height: 100%;
          width: 100%;

          position: absolute;
          top: 0;
          left: 0;
          z-index: 600;
        }
      }
    }

    button {
      border-radius: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 3rem;
      width: 3.5rem;

      transition: background 0.25s;

      &:hover {
        background: ${({ theme }) => theme.color.gray.light};
      }

      &:disabled {
        cursor: not-allowed;

        &:hover {
          background: none;
        }
      }
    }
  }

  form {
    animation: ${slideDownAnimation} 0.25s 0.05s backwards;
  }

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
`;

export { UserSettingsContainer };
