import React, { useState } from 'react';
import T from 'prop-types';

import ConditionalRender from '../_base-ui/ConditionalRender';
import DisplayText from '../_base-ui/DisplayText';
import { P2 } from '../_base-ui/Paragraph';
import PaymentCheckbox from '../Checkbox/PaymentInputCheckbox';
import {
  CheckboxContainer,
  PaymentBaseInput,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentInputContainer,
  PaymentLabel,
  PaymentLabelContainer,
} from './styledComponents';

const PaymentTextField = ({
  error,
  label,
  onChange,
  placeholder,
  startsDisabled,
  value,
  ...restProps
}) => {
  const [isChecked, setIsChecked] = useState(!startsDisabled);
  const Adornment = <P2>$</P2>;
  const inputProps = {
    classes: {
      disabled: 'disabled',
      error: 'error',
      focused: 'focused',
      input: 'input',
      notchedOutline: 'outline',
    },
    error: !!error,
    onChange: (e) => onChange(e.target.value),
    placeholder,
    startAdornment: Adornment,
    value,
    ...restProps,
  };

  return (
    <PaymentContainer>
      <CheckboxContainer>
        <PaymentCheckbox isChecked={isChecked} setIsChecked={setIsChecked} />
      </CheckboxContainer>
      <PaymentInputContainer>
        <PaymentLabelContainer>
          <PaymentLabel>{label}</PaymentLabel>
          <ConditionalRender
            Component={DisplayText}
            propsToPassDown={{ Component: PaymentErrorMessage, text: error }}
            shouldRender={!!error}
          />
        </PaymentLabelContainer>
        <ConditionalRender
          Component={PaymentBaseInput}
          propsToPassDown={inputProps}
          shouldRender={isChecked}
        />
      </PaymentInputContainer>
    </PaymentContainer>
  );
};

PaymentTextField.defaultProps = { startsDisabled: false };

PaymentTextField.propTypes = {
  /** prop desc */
  error: T.string,
  /** prop desc */
  label: T.string.isRequired,
  /** prop desc */
  onChange: T.func.isRequired,
  /** prop desc */
  placeholder: T.string,
  /** prop desc */
  startsDisabled: T.bool,
  /** prop desc */
  value: T.string.isRequired,
};

export default PaymentTextField;
