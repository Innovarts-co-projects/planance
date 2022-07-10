import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// hooks
import { useTheme } from 'styled-components';
import useClickOutside from '../../hook/useClickOutside';

// models
import { UserTransaction } from '../../models/userData';

// images
import closeIcon from '../../assets/icons/close.svg';
import investmentIcon from '../../assets/icons/investment.svg';
import incomeIcon from '../../assets/icons/entrance.svg';
import expenseIcon from '../../assets/icons/withdrawal.svg';

// components
import TransactionInput from './components/TransactionInput';

// local styles
import {
  TransactionModifierOverlay,
  TransactionModifierContainer,
} from './transactionModifierModalStyles';
import { Option } from './components/OptionsModal';
import Button from '../Button';

// props
interface TransactionModifierProps {
  modalTitle: string;
  onModalRender: () => void;
  userTransaction?: UserTransaction;
}

function TransactionModifier(
  {
    modalTitle,
    onModalRender,
    userTransaction,
  }: TransactionModifierProps,
) {

  //
  const [documentIsReady, setDocumentIsReady] = useState(false);
  useEffect(() => { if (typeof document === 'object') setDocumentIsReady(true); }, []);

  // states
  const [transaction, setTransaction] = useState(
    {
      date: userTransaction?.date || '',
      description: userTransaction?.description || '',
      transactionId: userTransaction?.transactionId || '',
      type: userTransaction?.type || '',
      value: userTransaction?.value || 0,
    } as UserTransaction,
  );

  // hooks
  const modalRef = useClickOutside(() => {
    onModalRender();
  });

  const theme = useTheme();

  // Inherited handlers
  function onDescriptionChange(value) {

    setTransaction(prevState => ({
      ...prevState,
      description: value,
    }));
  }
  function onValueChange(value) {

    if (typeof (value) === 'string') return;

    setTransaction(prevState => ({
      ...prevState,
      value: Number(value),
    }));
  }
  function onDateChange(value) {
    setTransaction(prevState => ({
      ...prevState,
      date: value,
    }));
  }
  function onTypeChange(value) {
    setTransaction(prevState => ({
      ...prevState,
      type: value,
    }));
  }

  // items
  const transactionTypeOptions = [
    {
      id: '1',
      iconPath: `${investmentIcon.src}`,
      optionName: 'Investment',
      optionColor: theme.color.purple,
    },
    {
      id: '2',
      iconPath: `${incomeIcon.src}`,
      optionName: 'Income',
      optionColor: theme.color.green,
    },
    {
      id: '3',
      iconPath: `${expenseIcon.src}`,
      optionName: 'Expense',
      optionColor: theme.color.red,
    },
  ] as Option[];

  // document waiter
  if (!documentIsReady) return null;

  return createPortal(
    <>
      <TransactionModifierOverlay />
      <TransactionModifierContainer>
        <div className="inner-box" ref={modalRef}>

          <header className="modal-header">
            <h1>{modalTitle}</h1>
            <button
              type="button"
              title="close modal"
              className="close-button"
              onClick={onModalRender}
            >
              <Image src={closeIcon} layout="raw" />
            </button>
          </header>

          <form onSubmit={() => ''}>
            <TransactionInput
              label="Transaction type"
              type="selector"
              value={transaction?.type.toLowerCase()}
              valueSetter={value => onTypeChange(value)}
              placeholder="Select transaction type"
              selectorOptions={transactionTypeOptions}
            />
            <TransactionInput
              label="Description"
              type="input"
              value={transaction?.description}
              valueSetter={value => onDescriptionChange(value)}
            />
            <TransactionInput
              label="Value"
              type="currency"
              value={transaction?.value}
              valueSetter={value => onValueChange(value)}
            />
            <TransactionInput
              label="Date"
              type="date"
              value={transaction?.date}
              valueSetter={value => onDateChange(value)}
            />

            <Button type="submit">
              Save Transaction
            </Button>
          </form>
        </div>
      </TransactionModifierContainer>
    </>,
    document.getElementById('modal-root'),
  );
}

export default memo(TransactionModifier);
