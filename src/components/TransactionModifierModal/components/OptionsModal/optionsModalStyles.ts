import styled from 'styled-components';
import { appearAnimation } from '../../../../styles/animations';

interface OptionsModalContainerProps {
  optionColor: string;
}

const OptionsModalContainer = styled.ul`
  animation: ${appearAnimation} 0.25s backwards;
  background: ${({ theme }) => theme.color.componentBackground};
  border-radius: 1rem;
  box-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.05);

  position: absolute;
  top: -80%;
  left: -5%;
  z-index: 500;

  width: 110%;

  padding: 3rem;
`;

const OptionItem = styled.li<OptionsModalContainerProps>`
  width: 100%;
  list-style: none;
  padding: 0.3rem 0;

  button {
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    padding: 1.5rem;

    &:hover {
      background: ${({ theme }) => theme.color.gray.light};
    }
  }

  img {
    margin-right: 1rem;
  }

  span {
    font-size: 1.6rem;

    color: ${({ optionColor }) => optionColor};
  }

  & + & {
    border-top: solid 0.2rem ${({ theme }) => theme.color.gray.main};
  }
`;

export { OptionsModalContainer, OptionItem };
