import Image from 'next/image';
import { memo } from 'react';

// images
import calendarIcon from '../../assets/icons/calendar.svg';
import moreOptionsIcon from '../../assets/icons/more-options.svg';

// local styles
import { TransactionContainer } from './transactionStyles';

interface TransactionProps {
  transactionIcon: string;
  transactionType: string;
  transactionValue: string;
  transactionDate: string;
  transactionDescription: string;
}

function Transaction(
  {
    transactionIcon,
    transactionType,
    transactionValue,
    transactionDate,
    transactionDescription,
  }: TransactionProps,
) {

  return (
    <TransactionContainer>
      <div
        className={`transaction-type transaction-item type-${transactionType.toLowerCase()}`}
      >
        <Image src={transactionIcon} layout="raw" />
        <span>{transactionType}</span>
      </div>

      <div
        className="transaction-value transaction-item"
      >
        <span>{transactionValue}</span>
      </div>

      <div
        className="transaction-date transaction-item"
      >
        <Image src={calendarIcon} layout="raw" />
        <span>{transactionDate}</span>
      </div>

      <div
        className="transaction-description transaction-item"
      >
        <span>{transactionDescription}</span>
      </div>

      <button
        type="button"
        title="Edit Transaction"
        className="transaction-more-options"
      >
        <Image src={moreOptionsIcon} layout="raw" />
      </button>
    </TransactionContainer>
  );
}

export default memo(Transaction);
