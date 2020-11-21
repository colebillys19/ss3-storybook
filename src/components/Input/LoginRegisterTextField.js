import React from 'react';

import BaseTextField from './BaseTextField';

const LoginRegisterTextField = (props) => (
  <BaseTextField
    outline={false}
    {...props}
  />
);

export default LoginRegisterTextField;
