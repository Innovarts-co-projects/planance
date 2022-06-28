import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  width: 100vw;

  display: flex;

  width: 100%;

  padding: 0 14rem 5rem;

  main.dashboard-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    margin: 0 auto;
  }
`;

const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 5rem 0;

  h1.app-logo {
    color: ${({ theme }) => theme.color.primary.main};
    font-size: 3.4rem;

    margin-bottom: 1rem;
  }

  h2.page-title {
    font-size: 1.8rem;
  }

  .profile-info-container {
    position: relative;

    .profile-info {
      border: solid 0.1rem transparent;
      border-radius: 1rem;

      display: flex;
      align-items: center;

      height: fit-content;

      transition: background 0.25s ease-out;

      .user-pic-container {
        border-radius: 0.5rem;
        display: flex;

        height: 5rem;
        width: 5rem;

        margin-right: 1rem;

        img {
          border-radius: 1rem;
          box-shadow: 0 0 5px #0002;
          margin: auto;
          height: 90%;
          width: 90%;
        }
      }

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
        min-width: 13rem;
      }

      &:hover {
        background: ${({ theme }) => theme.color.gray.light};
        border: solid 0.1rem ${({ theme }) => theme.color.gray.main};
      }
    }
  }
`;

const ChartSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .chart-group {
    display: flex;
    align-items: center;

    .my-chart {
      min-width: 25rem;
      width: fit-content;

      transform: translateX(2vw);
      margin-left: -6vw;
    }

    .chart-info {
      height: fit-content;
      padding: 1rem;

      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }
    }

    ul {
      li {
        list-style: none;

        display: flex;
        align-items: center;

        margin-bottom: 0.4rem;

        .chart-indentifier-icon {
          background: ${({ theme }) => theme.color.gray.main};
          border-radius: 0.2rem;
          height: 1.3rem;
          width: 1.3rem;

          margin-right: 1rem;
        }

        span {
          font-size: 1.3rem;
          font-weight: 500;
        }

        &.income-indentifier {
          .chart-indentifier-icon {
            background: ${({ theme }) => theme.color.green};
          }

          span {
            color: ${({ theme }) => theme.color.green};
          }
        }
        &.expense-indentifier {
          .chart-indentifier-icon {
            background: ${({ theme }) => theme.color.red};
          }

          span {
            color: ${({ theme }) => theme.color.red};
          }
        }
        &.investment-indentifier {
          .chart-indentifier-icon {
            background: ${({ theme }) => theme.color.purple};
          }
          span {
            color: ${({ theme }) => theme.color.purple};
          }
        }
      }
    }
  }

  .balance-overview {
    display: flex;
  }
`;

const MenusSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 4rem 0 1.5rem;

  .month-selector-container {
    position: relative;
  }

  .month-selector {
    background: ${({ theme }) => theme.color.gray.light};
    border-radius: 0.5rem;

    display: flex;
    align-items: center;

    padding: 1rem;

    transition: background 0.25s ease-out;

    img {
      margin-right: 1rem;
    }

    span {
      font-size: 1.6rem;
      font-weight: 500;
    }
    &:hover {
      background: ${({ theme }) => theme.color.gray.main};
    }
  }

  .add-transaction {
    background: ${({ theme }) => theme.color.primary.main};
    border-radius: 1rem;
    color: ${({ theme }) => theme.color.invertedText};
    font-size: 1.8rem;
    font-weight: 500;

    display: flex;
    align-items: center;

    padding: 1.1rem;

    img {
      margin-right: 1rem;
    }

    transition: background 0.25s ease-out;

    &:hover {
      background: ${({ theme }) => theme.color.primary.dark};
    }
    &:active {
      background: ${({ theme }) => theme.color.primary.light};
    }
  }
`;

const TransactionsSection = styled.section`
  width: 100%;

  header {
  }

  ul {
    width: 100%;

    li {
    }
  }
`;

export {
  DashboardContainer,
  PageHeader,
  ChartSection,
  MenusSection,
  TransactionsSection,
};
