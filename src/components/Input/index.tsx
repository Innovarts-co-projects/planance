import Image from 'next/image';
import { useEffect, useState } from 'react';

import eyeIcon from '../../assets/icons/eye.svg';
import eyeOffIcon from '../../assets/icons/eye-off.svg';

import { InputContainer } from './inputStyles';

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  valueSetter: (inputEvent: string) => void;
}

function Input({
  label, type, placeholder, value, valueSetter,
}: InputProps) {

  const [inputType, setInputType] = useState(type);
  const [inputIcon, setInputIcon] = useState(eyeIcon);

  function handleChangeInputType() {
    setInputType(prevState => (prevState === 'password' ? 'text' : 'password'));
  }

  useEffect(() => {

    if (inputType === 'password') {
      setInputIcon(eyeIcon);
    } else {
      setInputIcon(eyeOffIcon);
    }

  }, [inputType]);

  return (
    <InputContainer
      htmlFor={`${label.toLowerCase()}-input`}
      className="input-block"
    >
      <span>{`${label}:`}</span>
      <input
        type={inputType}
        value={value}
        onChange={inputEvent => valueSetter(inputEvent.target.value)}
        placeholder={placeholder}
        id={`${label.toLowerCase()}-input`}
      />
      {
        type === 'password' && value !== '' && (
          <button
            type="button"
            className="password-visibility-button"
            onClick={handleChangeInputType}
          >
            <Image src={inputIcon} />
          </button>
        )
      }
    </InputContainer>
  );
}

export default Input;
