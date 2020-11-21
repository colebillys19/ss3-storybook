import React from 'react';
import T from 'prop-types';

import iconDictionary from '../../utils/iconDictionary';

import { StyledIconButton } from './styledComponents';

const IconButton = ({
  iconName,
  iconState,
  label,
  onClick,
  ...restProps
}) => {
  const Icon = iconDictionary(iconName, { iconState });

  return (
    <StyledIconButton
      aria-label={label}
      classes={{ root: 'root' }}
      disableFocusRipple
      disableRipple
      onClick={onClick}
      state={iconState}
      {...restProps}
    >
      {Icon}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  disabled: T.bool,
  iconName: T.string.isRequired,
  iconState: T.string,
  label: T.string.isRequired,
  onClick: T.func.isRequired,
};

IconButton.defaultProps = { disabled: false, iconState: 'default' };

export default IconButton;
