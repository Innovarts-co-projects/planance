import Image from 'next/image';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import axios from 'axios';

// types
import { UserData } from '../models/userData';

// utils
import currencyFormatter from '../utils/currencyFormatter';

// images
import userPic from '../assets/icons/user-pic.svg';
import entrance from '../assets/icons/entrance.svg';
import withdrawal from '../assets/icons/withdrawal.svg';
import balance from '../assets/icons/balance.svg';
import investment from '../assets/icons/investment.svg';
import plusIcon from '../assets/icons/plus.svg';
import calendarIcon from '../assets/icons/calendar.svg';

// components
import MetaTitle from '../components/MetaTitle';
import RadialChart from '../components/RadialChart';
import AssetDisplay from '../components/AssetDisplay';
import Transaction from '../components/Transaction';
import UserSettings from '../components/UserSettings';
import MonthSelector from '../components/MonthSelector';
import TransactionModifier from '../components/TransactionModifierModal';

// local styles
import {
  DashboardContainer,
  PageHeader,
  ChartSection,
  MenusSection,
  TransactionsSection,
} from '../styles/pages/dashboard';

function Dashboard() {

  // refs
  const settingsTriggerRef = useRef();

  // STATES
  // - renders
  const [renderSettings, setRenderSettings] = useState(false);
  const handleRenderSettings = useCallback(() => {
    setRenderSettings(prevState => !prevState);
  }, []);

  const [renderMonthSelector, setRenderMonthSelector] = useState(false);
  const handleRenderMonthSelector = useCallback(() => {

    setRenderMonthSelector(prevState => !prevState);
  }, [renderMonthSelector]);

  const [renderNewTransaction, setRenderNewTransaction] = useState(false);
  const handleRenderNewTransaction = useCallback(() => {

    setRenderNewTransaction(prevState => !prevState);
  }, [renderNewTransaction]);

  const [,] = useState(false); // update transaction

  // - data
  const [userAccountData, setUserAccountData] = useState<UserData>();

  const [selectedMonth, setSelectedMonth] = useState<string>('Jul');
  const handleSelectedMonth = useCallback((value: string) => {

    setSelectedMonth(value);
    handleRenderMonthSelector();
  }, [selectedMonth]);

  // EFFECTS
  useEffect(() => {

    (async () => {
      const reqData = await axios('/database.json');
      setUserAccountData(reqData.data.user);
    })();
  }, []);

  return (
    <DashboardContainer>
      <MetaTitle page="Dashboard" />

      <main className="dashboard-main">

        <PageHeader>

          <div className="title">
            <h1 className="app-logo">
              Planance
            </h1>
            <h2 className="page-title">
              Dashboard
            </h2>
          </div>

          <div className="profile-info-container">

            <button
              type="button"
              className="profile-info"
              onClick={handleRenderSettings}
              ref={settingsTriggerRef}
            >

              <div className="user-pic-container">
                <Image src={userPic} layout="raw" />
              </div>
              <h2 className="user-name">
                {userAccountData?.name}
              </h2>
            </button>
            {
              renderSettings && (
                <UserSettings
                  userName={userAccountData?.name}
                  userEmail={userAccountData?.email}
                  onModalRender={handleRenderSettings}
                  triggerRef={settingsTriggerRef?.current}
                />
              )
            }

          </div>
        </PageHeader>

        <ChartSection>

          <div className="chart-group">
            <div className="my-chart">

              <RadialChart />
            </div>

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

        </ChartSection>

        <MenusSection>

          <div className="month-selector-container">

            <button
              type="button"
              className="month-selector"
              onClick={() => setRenderMonthSelector(prevState => !prevState)}
            >
              <Image src={calendarIcon} layout="raw" />
              <span>{selectedMonth}</span>
            </button>
            {
              renderMonthSelector && (
                <MonthSelector
                  valueSetter={handleSelectedMonth}
                  onModalRender={handleRenderMonthSelector}
                />
              )
            }

          </div>

          <div className="new-transaction-container">

            <button
              type="button"
              className="add-transaction"
              onClick={handleRenderNewTransaction}
            >
              <Image src={plusIcon} layout="raw" />
              <span>Add transaction</span>
            </button>
            {
              renderNewTransaction && (
                <TransactionModifier
                  modalTitle="New Transaction"
                  onModalRender={handleRenderNewTransaction}
                />
              )
            }
          </div>

        </MenusSection>

        <TransactionsSection>

          <header>{' '}</header>

          <ul>

            {
              userAccountData?.transactions.map((transaction) => (
                <Transaction
                  key={transaction.transactionId}
                  transactionDate={transaction.date}
                  transactionIcon={
                    (transaction.type === 'income' && entrance)
                    || (transaction.type === 'investment' && investment)
                    || (transaction.type === 'expense' && withdrawal)
                  }
                  transactionType={transaction.type}
                  transactionValue={currencyFormatter({ currency: 'BRL', value: transaction.value })}
                  transactionDescription={transaction.description}
                />
              ))
            }
          </ul>

        </TransactionsSection>
      </main>
    </DashboardContainer>
  );
}

export default Dashboard;
