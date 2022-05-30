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
        display: flex;

        align-items: center;

        img {
          margin-right: 2rem;
          width: 5rem;
        }

        h2 {
          font-size: 2rem;
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
          background: #0005;
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

            .chart-indentifier {
              background: red;
              border-radius: 0.2rem;
              height: 1.1rem;
              width: 1.4rem;

              margin-right: 1rem;
            }

            span {
              font-size: 1.2rem;
              font-weight: 500;
            }
          }
        }
      }

      .balance-overview {
        display: flex;

        .asset-display {
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

          &:last-child {
            margin-right: 0;
          }
        }
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

        img {
          margin-right: 1rem;
        }

        span {
          font-size: 1.6rem;
          font-weight: 500;
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
      }
    }

    section.transactions-section {
      width: 100%;

      header {
      }

      ul {
        width: 100%;

        li {
          background: ${({ theme }) => theme.color.gray.light};
          border-radius: 1rem;

          display: flex;
          align-items: center;
          justify-content: space-between;

          height: 5rem;
          width: 100%;

          margin-bottom: 1rem;

          .transaction-category {
          }
          .transaction-value {
          }
          .transaction-data {
          }
          .transaction-description {
          }
          .options {
          }
        }
      }
    }
  }
`;

export { DashboardContainer };
