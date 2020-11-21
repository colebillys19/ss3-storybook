import React from 'react';
import T from 'prop-types';

import ConditionalRender from '../ConditionalRender';
import { IconWrapper, StyledExternalLink } from './styledComponents';

const BaseExternalLink = ({
  href,
  Icon,
  isRightIcon,
  label,
  ...restProps
}) => (
  <StyledExternalLink
    $isRightIcon={isRightIcon}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    {...restProps}
  >
    <ConditionalRender
      Component={IconWrapper}
      propsToPassDown={{ $isRightIcon: isRightIcon, Icon }}
      shouldRender={!!Icon}
    />
    {label}
  </StyledExternalLink>
);

BaseExternalLink.propTypes = {
  href: T.string.isRequired,
  Icon: T.object,
  isRightIcon: T.bool,
  label: T.string.isRequired,
};

export default BaseExternalLink;
