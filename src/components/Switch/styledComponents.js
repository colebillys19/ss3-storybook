import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';

import {
  dmiWhite,
  grayBorder,
  primaryGray,
  primaryPurple,
} from '../../utils/defaultStyleHelper';

export const StyledSwitch = styled(Switch)`
  .root {
    padding: 0;
  }

  .switchBase {
    color: ${dmiWhite};
    left: -0.1rem;
    padding: 0;
    position: relative;
    top: 0;

    &.checked {
      transform: translateX(1.24rem);
    }

    &.checked + .track {
      background-color: ${primaryPurple};
      height: 2.1rem;
      left: -0.05rem;
      opacity: 1;
      position: absolute;
      top: -0.15rem;
    }

    &.Mui-focusVisible .thumb {
      border: 0.4rem solid ${dmiWhite};
      color: ${primaryGray};
    }
  }

  .thumb {
    border: ${grayBorder};
    border-radius: 10rem;
    box-shadow: none;
    height: 2.1rem;
    width: 2.05rem;
  }

  .track {
    background-color: ${primaryGray};
    border-radius: 10rem;
    height: 2.1rem;
    opacity: 1;
    transition: none;
    width: 3.3rem;
  }
`;
