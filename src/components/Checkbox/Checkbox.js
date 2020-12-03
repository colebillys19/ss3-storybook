import React from 'react';
import T from 'prop-types';

import { StyledCheckbox } from './styledComponents';

const Checkbox = ({ checked, disabled, onChange, ...restProps }) => (
  <StyledCheckbox
    checked={checked}
    classes={{ checked: 'checked', root: 'root' }}
    disabled={disabled}
    onChange={onChange}
    {...restProps}
  />
);

Checkbox.propTypes = {
  checked: T.bool.isRequired,
  disabled: T.bool,
  onChange: T.func.isRequired,
};

Checkbox.defaultProps = { disabled: false };

export default Checkbox;
