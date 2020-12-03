import React from 'react';
import T from 'prop-types';

import iconDictionary from '../../utils/iconDictionary';

import { StyledIconButton } from './styledComponents';

const IconButton = ({ iconName, iconState, label, onClick, ...restProps }) => {
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
  /** prop desc */
  disabled: T.bool,
  /** prop desc */
  iconName: T.string.isRequired,
  /** prop desc */
  iconState: T.string,
  /** prop desc */
  label: T.string.isRequired,
  /** prop desc */
  onClick: T.func.isRequired,
};

IconButton.defaultProps = { disabled: false, iconState: 'default' };

export default IconButton;
