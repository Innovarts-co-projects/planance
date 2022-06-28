import styled from 'styled-components';

const TransactionContainer = styled.li`
  background: ${({ theme }) => theme.color.gray.light};
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5rem;
  width: 100%;

  padding: 0 2rem;
  margin-bottom: 1rem;

  .transaction-item {
    display: flex;
    align-items: center;
    min-width: 20rem;

    font-size: 1.5rem;
    font-weight: 500;
  }
  .transaction-type {
    text-transform: capitalize;

    img {
      margin-right: 1rem;
    }

    h3 {
      font-weight: inherit;
    }

    &.type-income {
      span {
        color: ${({ theme }) => theme.color.green};
      }
    }
    &.type-expense {
      span {
        color: ${({ theme }) => theme.color.red};
      }
    }
    &.type-investment {
      span {
        color: ${({ theme }) => theme.color.purple};
      }
    }
  }
  .transaction-value {
  }
  .transaction-date {
    img {
      margin-right: 1rem;
    }
  }
  .transaction-description {
    flex: 1;
  }
  .transaction-more-options {
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 1rem;

    transition: background 0.25s ease-out;

    &:hover {
      background: ${({ theme }) => theme.color.gray.main};
    }
  }
`;

export { TransactionContainer };
