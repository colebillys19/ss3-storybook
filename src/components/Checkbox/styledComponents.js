import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

import {
  dmiWhite,
  grayBorder,
  primaryGray,
  primaryPurple,
} from 'defaultStyleHelper';

/**
 * PaymentInputCheckbox styles
 */

export const PaymentInputContainer = styled.div`
  margin-left: -0.8rem;
`;

export const StyledPaymentInputCheckbox = styled(Checkbox)`
  height: 4rem;
  padding: 0;
  width: 4rem;
`;

/**
 * Checkbox styles
 */

export const StyledCheckbox = styled(Checkbox)`
  .root {},
  icon {
    background-color: ${dmiWhite};
    height: 1.7rem;
    margin: .2rem;
    padding: 0;
    width: 1.7rem;
    &.Mui-focusVisible {
      outline: 1rem auto ${primaryGray};
      outline-offset: .1rem;
    },
    &.checked {
      border: .1rem solid ${primaryPurple};
      border-radius: .4rem;
      box-shadow: inset .2em .2em ${primaryPurple}, inset -.2em -.2em ${primaryPurple}; 
      color: ${primaryPurple};
    },
    &:not(.checked) {
      background-color: ${dmiWhite};
      border: ${grayBorder};
      border-radius: .4rem;
      box-shadow: none;
      color: ${dmiWhite};
    },
  },
  svg {
    min-height: 1.4rem;
    min-width: 1.4rem;
  }
`;
