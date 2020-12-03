import React from 'react';
import T from 'prop-types';
import Button from '@material-ui/core/Button';

const BaseButton = ({ disabled, Icon, label, onClick, ...restProps }) => (
  <Button
    classes={{
      endIcon: 'endIcon',
      label: 'label',
      root: 'root',
      startIcon: 'startIcon',
    }}
    disabled={disabled}
    onClick={onClick}
    startIcon={Icon}
    {...restProps}
  >
    {label}
  </Button>
);

BaseButton.defaultProps = { disabled: false, onClick: undefined };

BaseButton.propTypes = {
  /** prop desc */
  disabled: T.bool,
  /** prop desc */
  Icon: T.element,
  /** prop desc */
  label: T.oneOfType([T.string, T.element]).isRequired,
  /** prop desc */
  onClick: T.func.isRequired,
};

export default BaseButton;
