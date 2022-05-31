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

    max-width: 144rem;
    width: 100%;

    margin: 0 auto;

    header.page-header {
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

      .profile-info {
        border: solid .1rem transparent;
        border-radius: 1rem;

        display: flex;
        align-items: center;

        height: fit-content;

        transition: background 0.25s ease-out;

        img {
          margin-right: 2rem;
          width: 5rem;
        }

        h2 {
          font-size: 2rem;
          min-width: 15rem;
        }

        &:hover {
          background: ${({ theme }) => theme.color.gray.light};
          border: solid 0.1rem ${({ theme }) => theme.color.gray.main};
        }
      }
    }

    section.chart-section {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      .chart-group {
        display: flex;
        align-items: center;

        .chart {
          background: ${({ theme }) => theme.color.gray.main};
          border-radius: 50%;

          height: 17.5rem;
          width: 17.5rem;

          margin-right: 2rem;
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
    }

    section.menus-section {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      padding: 4rem 0;

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
    }

    section.transactions-section {
      width: 100%;

      header {
      }

      ul {
        width: 100%;

        li {
        }
      }
    }
  }
`;

export { DashboardContainer };
