import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { hoverPurple, primaryPurple } from 'defaultStyleHelper';

const baseLinkStyle = css`
  align-items: center;
  color: ${primaryPurple};
  display: flex;
  text-decoration: none;

  &:hover {
    color: ${hoverPurple};
    text-decoration: underline;
  }
`;

export const StyledInternalLink = styled(Link)`
  ${baseLinkStyle};
  flex-direction: ${({ $isRightIcon }) => ($isRightIcon ? 'row-reverse' : '')};
`;

export const StyledExternalLink = styled.a`
  ${baseLinkStyle};
  flex-direction: ${({ $isRightIcon }) => ($isRightIcon ? 'row-reverse' : '')};
`;

export const IconWrapper = styled(({ Icon, ...restProps }) => (
  <div {...restProps}>{Icon}</div>
))`
  display: inherit;
  padding: ${({ $isRightIcon }) =>
    $isRightIcon ? '0 0 0 0.375rem' : '0 0.375rem 0 0'};
`;
