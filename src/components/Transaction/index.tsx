import Image from 'next/image';
import { memo, useCallback, useState } from 'react';

// images
import calendarIcon from '../../assets/icons/calendar.svg';
import moreOptionsIcon from '../../assets/icons/more-options.svg';
import { UserTransaction } from '../../models/userData';
import TransactionModifierModal from '../TransactionModifierModal';

import entrance from '../../assets/icons/entrance.svg';
import withdrawal from '../../assets/icons/withdrawal.svg';
import investment from '../../assets/icons/investment.svg';

// local styles
import { TransactionContainer } from './transactionStyles';
import dateConverter from '../../utils/dateConverter';
import currencyFormatter from '../../utils/currencyFormatter';

interface TransactionProps {
  transaction: UserTransaction;
}

function Transaction(
  {
    transaction,
  }: TransactionProps,
) {

  const [renderUpdateTransaction, setRenderUpdateTransaction] = useState(false);
  const onRenderUpdateTransaction = useCallback(() => {

    setRenderUpdateTransaction(prevState => !prevState);
  }, [renderUpdateTransaction]);

  const transactionIcon = (transaction.type === 'income' && entrance)
    || (transaction.type === 'investment' && investment)
    || (transaction.type === 'expense' && withdrawal);

  return (
    <>
      <TransactionContainer>
        <div
          className={`transaction-type transaction-item type-${transaction.type.toLowerCase()}`}
        >
          <Image src={transactionIcon} layout="raw" />
          <span>{transaction.type}</span>
        </div>

        <div
          className="transaction-value transaction-item"
        >
          <span>{currencyFormatter({ currency: 'BRL', value: transaction.value })}</span>
        </div>

        <div
          className="transaction-date transaction-item"
        >
          <Image src={calendarIcon} layout="raw" />
          <span>{dateConverter(transaction.date, 'display')}</span>
        </div>

        <div
          className="transaction-description transaction-item"
        >
          <span>{transaction.description}</span>
        </div>

        <button
          type="button"
          title="Edit Transaction"
          className="transaction-more-options"
          onClick={onRenderUpdateTransaction}
        >
          <Image src={moreOptionsIcon} layout="raw" />
        </button>
      </TransactionContainer>
      {
        renderUpdateTransaction && (
          <TransactionModifierModal
            modalTitle="Edit Transaction"
            onModalRender={() => onRenderUpdateTransaction()}
            userTransaction={transaction}
          />
        )
      }
    </>
  );
}

export default memo(Transaction);
