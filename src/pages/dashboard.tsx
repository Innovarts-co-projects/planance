import MetaTitle from '../components/MetaTitle';

import { DashboardContainer } from '../styles/pages/dashboard';

function Dashboard() {
  return (
    <DashboardContainer>
      <MetaTitle page="Dashboard" />

      <main className="dashboard-main">
        <header className="page-header">
          <div className="title">
            <h1 className="app-logo">
              Planance
            </h1>
            <h2 className="page-title">
              Dashboard
            </h2>
          </div>

          <div className="profile-info">
            <h2 className="user-name">
              Angela Smith
            </h2>
          </div>
        </header>
      </main>
    </DashboardContainer>
  );
}

export default Dashboard;
