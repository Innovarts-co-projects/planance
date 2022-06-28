import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// hooks
import useClickOutside from '../../hook/useClickOutside';

// images
import closeIcon from '../../assets/icons/close.svg';

// local styles
import { TransactionModifierOverlay, TransactionModifierContainer } from './transactionModifierModalStyles';

// props
interface TransactionModifierProps {
  modalTitle: string;
  onModalRender: () => void;
}

function TransactionModifier(
  {
    modalTitle,
    onModalRender,
  }: TransactionModifierProps,
) {

  const [documentIsReady, setDocumentIsReady] = useState(false);
  useEffect(() => { if (typeof document === 'object') setDocumentIsReady(true); }, []);

  const modalRef = useClickOutside(() => {
    onModalRender();
  });

  if (!documentIsReady) return null;

  return createPortal(
    <>
      <TransactionModifierOverlay />
      <TransactionModifierContainer ref={modalRef}>
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
          {' '}
        </form>
      </TransactionModifierContainer>
    </>,
    document.getElementById('modal-root'),
  );
}

export default memo(TransactionModifier);
