import styled from 'styled-components';

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.color.primary.main};
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  input {
    background: ${({ theme }) => theme.color.gray.light};
    border: none;
    border-radius: 0.5rem;
    box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.03);
    font-size: 1.6rem;
    width: 100%;
    padding: 1.3rem;

    &::placeholder {
      color: ${({ theme }) => theme.color.placeholder};
    }

    &:focus {
      filter: brightness(0.98);
      outline: none;
    }
  }

  position: relative;

  .password-visibility-button {
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 1rem;
    top: 55%;

    height: 2.8rem;
    width: 3.5rem;

    transition: background 0.25s ease-out;

    &:hover {
      background: ${({ theme }) => theme.color.gray.main};
    }
  }
`;

export { InputContainer };
