import Image from 'next/image';

import userPic from '../assets/icons/user-pic.svg';
import entrance from '../assets/icons/entrance.svg';
import withdrawal from '../assets/icons/withdrawal.svg';
import balance from '../assets/icons/balance.svg';
import investment from '../assets/icons/investment.svg';
import plusIcon from '../assets/icons/plus.svg';
import calendarIcon from '../assets/icons/calendar.svg';

import MetaTitle from '../components/MetaTitle';

import { DashboardContainer } from '../styles/pages/dashboard';
import AssetDisplay from '../components/AssetDisplay';
import Transaction from '../components/Transaction';

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

          <button type="button" className="profile-info">
            <Image src={userPic} layout="raw" />
            <h2 className="user-name">
              Angela Smith
            </h2>
          </button>
        </header>

        <section className="chart-section">
          <div className="chart-group">
            <div className="chart" />

            <div className="chart-info">
              <h3>Balance overview</h3>

              <ul>
                <li className="income-indentifier">
                  <div className="chart-indentifier-icon" />
                  <span className="chart-category">
                    Income
                  </span>
                </li>
                <li className="expense-indentifier">
                  <div className="chart-indentifier-icon" />
                  <span className="chart-category">
                    Expenses
                  </span>
                </li>
                <li className="investment-indentifier">
                  <div className="chart-indentifier-icon" />
                  <span className="chart-category">
                    Investments
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="balance-overview">

            <AssetDisplay
              assetIcon={entrance}
              assetName="Entrance"
              assetValue="R$ 3.500,00"
              className="display-entrance"
            />

            <AssetDisplay
              assetIcon={withdrawal}
              assetName="Withdrawal"
              assetValue="-R$ 2.000,00"
              className="display-withdrawal"
            />

            <AssetDisplay
              assetIcon={balance}
              assetName="Balance"
              assetValue="R$ 1.000,00"
              className="display-balance"
            />
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
            <Transaction
              transactionDate="07/15/2022"
              transactionIcon={entrance}
              transactionType="Income"
              transactionValue="R$ 3.500,00"
              transactionDescription="Salario"
            />
            <Transaction
              transactionDate="07/25/2022"
              transactionIcon={withdrawal}
              transactionType="Expense"
              transactionValue="-R$ 1.500,00"
              transactionDescription="Aluguel"
            />

            <Transaction
              transactionDate="07/30/2022"
              transactionIcon={investment}
              transactionType="Investment"
              transactionValue="R$ 500,00"
              transactionDescription="CDB Mais Credito"
            />

          </ul>
        </section>
      </main>
    </DashboardContainer>
  );
}

export default Dashboard;
