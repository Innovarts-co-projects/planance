import styled from 'styled-components';

import { appearAnimation, slideDownAnimation } from '../../styles/animations';

const TransactionModifierOverlay = styled.div`
  background: ${({ theme }) => theme.color.darkOverlay};

  position: fixed;
  z-index: 500;

  width: 100vw;
  height: 100vh;
`;

const TransactionModifierContainer = styled.div`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;

  height: 100vh;
  width: 100%;

  padding: 2rem;

  overflow: auto;

  .inner-box {
    animation: ${appearAnimation} 0.25s backwards;
    background: ${({ theme }) => theme.color.background};
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 1rem #0001;

    height: fit-content;
    width: 90%;
    max-width: 65rem;

    padding: 4rem 5rem;
    margin: auto 0;
  }

  .modal-header {
    animation: ${slideDownAnimation} 0.25s 0.08s backwards;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5rem;

    h1 {
      color: ${({ theme }) => theme.color.primary.main};
      font-size: 2.2rem;
      font-weight: 600;
    }

    .close-button {
      background: ${({ theme }) => theme.color.gray.light};
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      height: 3.8rem;
      width: 3.8rem;

      transition: background 0.25s;

      &:hover {
        background: ${({ theme }) => theme.color.gray.main};
      }
    }
  }

  form {
    animation: ${slideDownAnimation} 0.25s 0.12s backwards;

    button {
      font-size: 1.8rem;
      padding: 1.4rem;
    }
  }
`;

const TransactionInput = styled.div``;

export {
  TransactionModifierOverlay,
  TransactionModifierContainer,
  TransactionInput,
};
