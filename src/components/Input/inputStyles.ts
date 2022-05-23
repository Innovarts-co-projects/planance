import styled from 'styled-components';

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  span {
    color: ${props => props.theme.color.primary.main};
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  input {
    background: ${props => props.theme.color.gray.light};
    border: none;
    border-radius: 1rem;
    font-size: 1.6rem;
    width: 100%;
    padding: 1.3rem;

    &::placeholder {
      color: ${props => props.theme.color.placeholder};
    }

    &:focus {
      filter: brightness(0.98);
      outline: none;
    }
  }
`;

export { InputContainer };
