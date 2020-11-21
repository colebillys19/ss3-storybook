import React from 'react';
import T from 'prop-types';
import Button from '@material-ui/core/Button';

const BaseButton = ({
  disabled,
  Icon,
  label,
  onClick,
  ...restProps
}) => (
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

BaseButton.defaultProps = { disabled: false };

BaseButton.propTypes = {
  disabled: T.bool,
  Icon: T.element,
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
};

export default BaseButton;
