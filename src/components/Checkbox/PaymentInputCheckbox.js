import React from 'react';
import T from 'prop-types';

import iconDictionary from '../../utils/iconDictionary';

import {
  PaymentInputContainer,
  StyledPaymentInputCheckbox,
} from './styledComponents';

const checkIcon = iconDictionary('approved', {
  iconState: 'active',
  style: 'paymentInput',
});
const uncheckIcon = iconDictionary('unapproved', {
  iconState: 'default',
  style: 'paymentInput',
});

const PaymentInputCheckbox = ({ isChecked, setIsChecked }) => {
  const handleClick = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  return (
    <PaymentInputContainer>
      <StyledPaymentInputCheckbox
        checked={isChecked}
        checkedIcon={checkIcon}
        color="default"
        icon={uncheckIcon}
        onClick={handleClick}
      />
    </PaymentInputContainer>
  );
};

PaymentInputCheckbox.propTypes = {
  isChecked: T.bool.isRequired,
  setIsChecked: T.func.isRequired,
};

export default PaymentInputCheckbox;
