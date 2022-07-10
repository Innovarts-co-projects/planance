import { keyframes } from 'styled-components';

const appearAnimation = keyframes`

  from {
   transform: scale(.95);
   opacity: 0;
  }

  to {

    transform: scale(1);
    opacity: 1;
  }
`;

const slideDownAnimation = keyframes`

  from {
    transform: translateY(-1rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export { appearAnimation, slideDownAnimation };
