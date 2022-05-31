import styled from 'styled-components';

const AssetDisplayContainer = styled.div`
  background: ${({ theme }) => theme.color.gray.light};
  border: solid 0.2rem ${({ theme }) => theme.color.gray.medium};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  height: 10rem;
  width: 18rem;

  padding: 1rem;
  margin-right: 1rem;

  header {
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
      height: auto;
      width: 2rem;
    }

    h3 {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;

    h4 {
      font-size: 2rem;
      font-weight: 600;
    }
  }

  &.display-entrance {
    header {
      h3 {
        color: ${({ theme }) => theme.color.green};
      }
    }
  }
  &.display-withdrawal {
    header {
      h3 {
        color: ${({ theme }) => theme.color.red};
      }
    }
  }
  &.display-balance {
    header {
      h3 {
        color: ${({ theme }) => theme.color.primary.main};
      }
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

export { AssetDisplayContainer };
