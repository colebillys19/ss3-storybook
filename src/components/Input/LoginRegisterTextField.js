import React from 'react';
import T from 'prop-types';

import BaseTextField from './BaseTextField';

const LoginRegisterTextField = (props) => (
  <BaseTextField outline={false} {...props} />
);

LoginRegisterTextField.propTypes = {
  /** prop desc */
  disabled: T.bool,
  /** prop desc */
  error: T.string,
  /** prop desc */
  label: T.string.isRequired,
  /** prop desc */
  onChange: T.func.isRequired,
  /** prop desc */
  outline: T.bool,
  /** prop desc */
  placeholder: T.string,
  /** prop desc */
  value: T.string.isRequired,
};

export default LoginRegisterTextField;
