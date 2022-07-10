// utils
import Image from 'next/image';
import { useState } from 'react';
import currencyFormatter from '../../../../utils/currencyFormatter';
import currencyMask from '../../../../utils/currencyMask';

// images
import arrowDown from '../../../../assets/icons/arrow-down.svg';

// local styles
import { TransactionInputContainer } from './transactionInputStyles';
import OptionsModal, { Option } from '../OptionsModal';
// import dateConverter from '../../../../utils/dateConverter';

interface TransactionInputProps {

  label: string;
  value: string | number;
  valueSetter: (value: string | number) => void;
  type: 'input' | 'selector' | 'date' | 'currency';
  placeholder?: string;
  selectorOptions?: Option[];
}

function TransactionInput(
  {
    label = 'input',
    value,
    valueSetter,
    type,
    placeholder,
    selectorOptions,
  }: TransactionInputProps,
) {

  const [renderOptions, setRenderOptions] = useState(false);
  function onRenderOptions() {
    setRenderOptions(prevState => !prevState);
  }

  return (
    <TransactionInputContainer>
      <span className="input-label">
        {label}
        :
      </span>
      {
        (type === 'input' && (
          <input
            type="text"
            value={value}
            onChange={(event) => {
              valueSetter(event.target.value);
            }}
          />
        )) || (type === 'currency' && (
          <input
            type="text"
            value={currencyFormatter({ currency: 'BRL', value: Number(value) })}
            onChange={(event) => {
              valueSetter(currencyMask(event.target.value));
            }}
          />
        )) || (type === 'date' && (
          <input
            type="date"
            value={value}
            onChange={event => {
              valueSetter(event.target.value);
            }}
          />
        )) || (type === 'selector' && (
          <>
            <button
              type="button"
              className="input"
              onClick={onRenderOptions}
            >
              <span className="placeholder">
                {value ? <b>{value}</b> : placeholder}
              </span>
              <Image src={arrowDown} layout="raw" />
            </button>

            {renderOptions && (
              <OptionsModal
                options={selectorOptions}
                valueSetter={valueSetter}
                onModalRender={() => onRenderOptions()}
              />
            )}
          </>
        )) || null
      }

    </TransactionInputContainer>
  );

}

export default TransactionInput;
