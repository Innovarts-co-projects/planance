import styled from 'styled-components';

const TransactionInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  position: relative;

  .input-label {
    color: ${({ theme }) => theme.color.gray.dark};
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: capitalize;
    display: inline-block;
    margin-bottom: 1rem;
  }

  input,
  .input {
    color: ${({ theme }) => theme.color.text};
    background: ${({ theme }) => theme.color.gray.light};
    border: none;
    border-radius: 1rem;
    font-size: 1.6rem;
    outline: none;
    width: 100%;
    min-height: 5rem;
    padding: 1.2rem 1.4rem;
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .placeholder {
      color: ${({ theme }) => theme.color.gray.dark};
      text-transform: capitalize;
      margin: 0;

      b {
        color: ${({ theme }) => theme.color.text};
        font-weight: 500;
      }
    }
  }
`;

export { TransactionInputContainer };
