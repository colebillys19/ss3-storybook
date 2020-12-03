import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import {
  accentRed,
  accentRedBorder,
  defaultFontSize,
  dmiWhite,
  primaryCarbon,
  primaryGray,
  primaryGrayBorder,
  primaryPurple,
  primaryPurpleBorder,
} from '../../utils/defaultStyleHelper';

import { P3, P4 } from '../_base-ui/Paragraph';
import { SmH5 } from '../_base-ui/Headings';

/**
 * Styling applied to BaseTextInput
 */

export const StyledInputGroup = styled.div`
  background-color: ${dmiWhite};
  display: flex;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $outline }) => ($outline ? '70%' : '100%')};
`;

export const StyledBaseTextField = styled(TextField)`
  margin: ${({ error }) => (error ? '0 0 1rem' : '1rem 0')};

  .base-input {
    .input {
      caret-color: ${primaryPurple};
      color: ${primaryCarbon};
      font-size: 1.2rem;
      line-height: 1.6rem;
      padding: 0.8rem;
    }

    .outline {
      border: ${primaryGrayBorder};
      border-radius: 0;
    }

    &.error .outline {
      border: ${({ value }) => (value ? primaryGrayBorder : accentRedBorder)};
      border-bottom: 0.3rem solid ${accentRed};
    }

    &.focused .outline {
      border: ${primaryPurpleBorder};
    }

    &:hover:not(.disabled) .outline {
      border: ${primaryPurpleBorder};
    }

    input::-ms-clear {
      display: none;
    }
  }
`;

export const StyledUnderlineTextField = styled(TextField)`
  margin: ${({ error }) => (error ? '0 0 0.3rem' : '0.5rem 0 0.3rem')};
  padding: 0;

  .base-input {
    .input {
      border-bottom: ${primaryGrayBorder};
      caret-color: ${primaryPurple};
      color: ${primaryCarbon};
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.6rem;
      padding: 0.5rem 0 1rem;
    }

    &.error .input {
      border-bottom: ${accentRedBorder};
    }

    &.focused .input {
      border-bottom: ${primaryPurpleBorder};
    }

    &:hover:not(.disabled) .input {
      border-bottom: ${primaryPurpleBorder};
    }

    input::-ms-clear {
      display: none;
    }
  }

  .label {
    color: ${primaryCarbon};
    font-size: 1.2rem;
    font-weight: 700;

    &.shrink {
      font-weight: 400;
      transform: matrix(0.8, 0, 0, 0.8, 0, 4);
    }

    &.disabled {
      color: ${primaryGray};
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${accentRed};
  font-size: 1rem;
  line-height: 1;
  margin: ${({ $outline }) => ($outline ? '-0.2rem 0 0' : '0.9rem 0 0')};
  padding-bottom: 0.2rem;
`;

export const StyledLabel = styled(P3)`
  align-self: center;
  padding-right: 0.8rem;
  width: 30%;
`;

/**
 *  Styling applied to PaymentTextField
 */

export const PaymentContainer = styled.div`
  background-color: ${dmiWhite};
  display: flex;
  width: 100%;
`;

export const CheckboxContainer = styled.div`
  margin: 1rem 0.3rem 0 0;
`;

export const PaymentInputContainer = styled.div`
  display: flex;
  padding: 1.4rem 0 1.3rem;
  width: 100%;
`;

export const PaymentLabelContainer = styled.div`
  align-self: center;
  width: 70%;
`;

export const PaymentLabel = styled(SmH5)`
  line-height: 3.3rem;
`;

export const PaymentErrorMessage = styled(P4)`
  color: ${accentRed};
  font-weight: 700;
  margin: -0.5rem 0 -1rem;
`;

export const PaymentBaseInput = styled(OutlinedInput)`
  padding-left: 0.8rem;
  width: 30%;

  .outline {
    border: ${primaryGrayBorder};
    border-radius: 0;
  }

  &.error .outline {
    border: ${accentRedBorder};
  }

  &.focused .outline {
    border: ${primaryPurpleBorder};
  }

  &:hover:not(.disabled) .outline {
    border: ${primaryPurpleBorder};
  }

  .input {
    caret-color: ${primaryPurple};
    color: ${primaryCarbon};
    font-size: ${defaultFontSize};
    line-height: 1.6rem;
    padding: 0.8rem 0.7rem;
  }

  input::-ms-clear {
    display: none;
  }
`;
