import { memo } from 'react';
import useClickOutside from '../../hook/useClickOutside';
import { MonthSelectorContainer } from './monthSelectorStyles';

interface MonthSelectorProps {
  valueSetter: (string) => void;
  onModalRender: () => void;
}

function MonthSelector(
  {
    valueSetter,
    onModalRender,
  }: MonthSelectorProps,
) {

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const modalRef = useClickOutside(() => {
    onModalRender();
  });

  return (
    <MonthSelectorContainer ref={modalRef}>

      <div className="months-block">
        {months.slice(0, 6).map(month => (
          <div key={month} className="button-container">
            <button
              type="button"
              onClick={() => valueSetter(month)}
            >
              {month}
            </button>
          </div>
        ))}
      </div>
      <div className="months-block">
        {months.slice(6, 12).map(month => (
          <div key={month} className="button-container">
            <button
              type="button"
              onClick={() => valueSetter(month)}
            >
              {month}
            </button>
          </div>
        ))}
      </div>
    </MonthSelectorContainer>
  );
}

export default memo(MonthSelector);
