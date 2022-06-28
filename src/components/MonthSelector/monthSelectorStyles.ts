import styled from 'styled-components';

const MonthSelectorContainer = styled.div`
  background: ${({ theme }) => theme.color.componentBackground};
  box-shadow: 0.5rem 0.5rem 1rem #0001;
  border-radius: 1rem;

  padding: 1.5rem;

  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);

  .months-block {
    display: flex;
    border-bottom: solid 0.1rem ${({ theme }) => theme.color.gray.main};

    .button-container {
      border-right: solid 0.2rem ${({ theme }) => theme.color.gray.main};

      &:last-child {
        border-right: none;
      }
    }

    button {
      border-radius: 0.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      text-transform: capitalize;

      text-shadow: 0 0 0.3rem #fff;

      width: 5rem;
      padding: 0.7rem 0;
      margin: 0.2rem;

      transition: background 0.25s;

      &:hover {
        background: ${({ theme }) => theme.color.gray.main};
      }
    }
  }

  .months-block + .months-block {
    border-top: solid 0.1rem ${({ theme }) => theme.color.gray.main};
    border-bottom: solid 0.1rem transparent;
  }
`;

export { MonthSelectorContainer };
