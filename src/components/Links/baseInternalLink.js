import React from 'react';
import T from 'prop-types';

import ConditionalRender from '../ConditionalRender';
import { IconWrapper, StyledInternalLink } from './styledComponents';

const BaseInternalLink = ({
  Icon,
  isRightIcon,
  label,
  path,
  replace,
  ...restProps
}) => (
  <StyledInternalLink
    $isRightIcon={isRightIcon}
    replace={replace}
    to={path}
    {...restProps}
  >
    <ConditionalRender
      Component={IconWrapper}
      propsToPassDown={{ $isRightIcon: isRightIcon, Icon }}
      shouldRender={!!Icon}
    />
    {label}
  </StyledInternalLink>
);

BaseInternalLink.propTypes = {
  Icon: T.object,
  isRightIcon: T.bool,
  label: T.string.isRequired,
  path: T.oneOfType([T.string, T.object]).isRequired,
  replace: T.bool,
};

export default BaseInternalLink;
