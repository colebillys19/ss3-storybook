import React from 'react';
import T from 'prop-types';

import { StyledSwitch } from './styledComponents';

const Switch = ({ checked, disabled, onChange, ...restProps }) => (
  <StyledSwitch
    checked={checked}
    classes={{
      checked: 'checked',
      root: 'root',
      switchBase: 'switchBase',
      thumb: 'thumb',
      track: 'track',
    }}
    disabled={disabled}
    onChange={onChange}
    {...restProps}
  />
);

Switch.propTypes = {
  checked: T.bool.isRequired,
  disabled: T.bool,
  onChange: T.func.isRequired,
};

Switch.defaultProps = { disabled: false };

export default Switch;
