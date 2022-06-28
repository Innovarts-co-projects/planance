import styled from 'styled-components';

const TransactionModifierOverlay = styled.div`
  background: ${({ theme }) => theme.color.darkOverlay};

  position: fixed;
  inset: 0;
  z-index: 500;

  width: 100vw;
  height: 100vh;
`;

const TransactionModifierContainer = styled.div`
  background: ${({ theme }) => theme.color.componentBackground};
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 1rem #0001;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  min-height: 30rem;
  width: 90%;
  max-width: 70rem;

  padding: 5rem;

  .modal-header {
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
`;

export { TransactionModifierOverlay, TransactionModifierContainer };
