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
  return (
    <InputContainer
      htmlFor={`${label.toLowerCase()}-input`}
      className="input-block"
    >
      <span>{`${label}:`}</span>
      <input
        type={type}
        value={value}
        onChange={inputEvent => valueSetter(inputEvent.target.value)}
        placeholder={placeholder}
        id={`${label.toLowerCase()}-input`}
      />
    </InputContainer>
  );
}

export default Input;
