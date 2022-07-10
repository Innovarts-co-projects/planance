import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.color.primary.main};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.componentBackground};
  font-size: 1.4rem;
  font-size: 500;

  width: 100%;
  padding: 1rem;
  margin-top: 0.5rem;

  transition: background 0.25s;

  &:hover {
    background: ${({ theme }) => theme.color.primary.dark};
  }
  &:active {
    background: ${({ theme }) => theme.color.primary.light};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.gray.main};
    color: ${({ theme }) => theme.color.gray.dark};
    cursor: not-allowed;
  }
`;
export default Button;
