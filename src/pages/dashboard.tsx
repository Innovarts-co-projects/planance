import Image from 'next/image';

import userPic from '../assets/icons/user-pic.svg';
import entrance from '../assets/icons/entrance.svg';
// import withdrawal from '../assets/icons/withdrawal.svg';
// import balance from '../assets/icons/balance.svg';
import plusIcon from '../assets/icons/plus.svg';
import calendarIcon from '../assets/icons/calendar.svg';

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
            <Image src={userPic} layout="raw" />
            <h2 className="user-name">
              Angela Smith
            </h2>
          </div>
        </header>

        <section className="chart-section">
          <div className="chart-group">
            <div className="chart" />
            <div className="chart-info">
              <h3>Balance overview</h3>

              <ul>
                <li>
                  <div className="chart-indentifier" />
                  <span className="chart-category">
                    Income
                  </span>
                </li>
                <li>
                  <div className="chart-indentifier" />
                  <span className="chart-category">
                    Expenses
                  </span>
                </li>
                <li>
                  <div className="chart-indentifier" />
                  <span className="chart-category">
                    Investments
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="balance-overview">
            <div className="asset-display">
              <header>
                <div className="asset-icon">
                  <Image src={entrance} layout="raw" />
                </div>
                <h3>Entrance</h3>
              </header>
              <main>
                <h4 className="asset-value">
                  R$ 3.500,00
                </h4>
              </main>
            </div>

            <div className="asset-display">
              <header>
                <div className="asset-icon">
                  <Image src={entrance} layout="raw" />
                </div>
                <h3>Entrance</h3>
              </header>
              <main>
                <h4 className="asset-value">
                  R$ 3.500,00
                </h4>
              </main>
            </div>

            <div className="asset-display">
              <header>
                <div className="asset-icon">
                  <Image src={entrance} layout="raw" />
                </div>
                <h3>Entrance</h3>
              </header>
              <main>
                <h4 className="asset-value">
                  R$ 3.500,00
                </h4>
              </main>
            </div>
          </div>
        </section>

        <section className="menus-section">
          <button type="button" className="month-selector">
            <Image src={calendarIcon} layout="raw" />
            <span>July</span>
          </button>
          <button type="button" className="add-transaction">
            <Image src={plusIcon} layout="raw" />
            <span>Add transaction</span>
          </button>
        </section>

        <section className="transactions-section">
          <header>{' '}</header>

          <ul>
            <li>
              {' '}
            </li>
            <li>
              {' '}
            </li>
            <li>
              {' '}
            </li>
            <li>
              {' '}
            </li>
          </ul>
        </section>
      </main>
    </DashboardContainer>
  );
}

export default Dashboard;
