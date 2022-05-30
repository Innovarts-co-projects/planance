import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  width: 100vw;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.02);

  display: flex;

  width: 100%;

  padding: 0 14rem;

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
        font-size: 3.2rem;
      }

      h2.page-title {
        font-size: 1.8rem;
      }
    }
  }
`;

export { DashboardContainer };
