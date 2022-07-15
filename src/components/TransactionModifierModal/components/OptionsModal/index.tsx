import useClickOutside from '../../../../hooks/useClickOutside';
import { OptionsModalContainer, OptionItem } from './optionsModalStyles';

export interface Option {
  id: string;
  optionName: string;
  iconPath: string;
  optionColor?: string;
}

interface OptionsModalProps {
  options: Option[];
  valueSetter: (string) => void;
  onModalRender: () => void;
}

function OptionsModal({ options, valueSetter, onModalRender }: OptionsModalProps) {

  function handleSelection(selectedValue) {
    onModalRender();
    valueSetter(selectedValue.toLowerCase());
  }

  const modalRef = useClickOutside(() => {
    onModalRender();
  });

  return (
    <OptionsModalContainer ref={modalRef}>
      {
        options.map(option => (
          <OptionItem key={option.id} optionColor={option.optionColor || ''}>
            <button type="button" onClick={() => handleSelection(option.optionName)}>
              <img src={option.iconPath} alt={`${option.optionName} icon`} />
              <span>{option.optionName}</span>
            </button>
          </OptionItem>
        ))
      }
    </OptionsModalContainer>
  );
}

export default OptionsModal;
