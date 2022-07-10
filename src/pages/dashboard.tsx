import Image from 'next/image';
import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import axios from 'axios';

// types
import { UserData, UserTransaction } from '../models/userData';

// images
import userPic from '../assets/icons/user-pic.svg';
import entrance from '../assets/icons/entrance.svg';
import withdrawal from '../assets/icons/withdrawal.svg';
import balance from '../assets/icons/balance.svg';
import plusIcon from '../assets/icons/plus.svg';
import calendarIcon from '../assets/icons/calendar.svg';

// components
import MetaTitle from '../components/MetaTitle';
import RadialChart from '../components/RadialChart';
import AssetDisplay from '../components/AssetDisplay';
import Transaction from '../components/Transaction';
import UserSettings from '../components/UserSettings';
import MonthSelector, { months } from '../components/MonthSelector';
import TransactionModifier from '../components/TransactionModifierModal';

// local styles
import {
  DashboardContainer,
  PageHeader,
  ChartSection,
  MenusSection,
  TransactionsSection,
} from '../styles/pages/dashboard';
import getMonth from '../utils/getMonth';

function Dashboard() {

  const actualMonth = useMemo(() => (new Date().getMonth() + 1), []);

  // refs
  const settingsTriggerRef = useRef();

  // STATES
  // -common

  // - renders
  const [renderSettings, setRenderSettings] = useState(false);
  const onRenderSettings = useCallback(() => {
    setRenderSettings(prevState => !prevState);
  }, []);

  const [renderMonthSelector, setRenderMonthSelector] = useState(false);
  const onRenderMonthSelector = useCallback(() => {

    setRenderMonthSelector(prevState => !prevState);
  }, [renderMonthSelector]);

  const [renderNewTransaction, setRenderNewTransaction] = useState(false);
  const onRenderNewTransaction = useCallback(() => {

    setRenderNewTransaction(prevState => !prevState);
  }, [renderNewTransaction]);

  // - data
  const [userAccountData, setUserAccountData] = useState<UserData>();

  const [filteredMonths, setFilteredMonths] = useState<UserTransaction[]>();

  const [selectedMonth, setSelectedMonth] = useState<string>(months[actualMonth - 1]);
  const onSelectMonth = useCallback((value: string) => {

    setSelectedMonth(value);
    onRenderMonthSelector();
  }, [selectedMonth]);

  // EFFECTS
  useEffect(() => {

    (async () => {
      const reqData = await axios('/database.json');
      setUserAccountData(reqData.data.user);
    })();
  }, []);

  useEffect(() => {

    if (!userAccountData) return;

    setFilteredMonths(() => {

      const filteredData = userAccountData?.transactions
        .filter(transaction => getMonth(transaction.date) === (months.indexOf(selectedMonth) + 1));

      if (filteredMonths !== filteredData) {
        return filteredData;
      }

      return filteredMonths;
    });
  }, [userAccountData, selectedMonth]);

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
              onClick={onRenderSettings}
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
                  onModalRender={onRenderSettings}
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
                  valueSetter={onSelectMonth}
                  onModalRender={() => onRenderMonthSelector()}
                />
              )
            }

          </div>

          <div className="new-transaction-container">

            <button
              type="button"
              className="add-transaction"
              onClick={onRenderNewTransaction}
            >
              <Image src={plusIcon} layout="raw" />
              <span>Add transaction</span>
            </button>
            {
              renderNewTransaction && (
                <TransactionModifier
                  modalTitle="New Transaction"
                  onModalRender={onRenderNewTransaction}
                />
              )
            }
          </div>

        </MenusSection>

        <TransactionsSection>

          <header>{' '}</header>

          <ul>

            {
              filteredMonths && filteredMonths.map((transaction) => (

                <Transaction
                  key={transaction.transactionId}
                  transaction={transaction}
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
