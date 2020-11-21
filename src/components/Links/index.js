import styled, { css } from 'styled-components';

import BaseExternalLink from './baseExternalLink';
import BaseInternalLink from './baseInternalLink';

const smallLinkStyle = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

const mediumLinkStyle = css`
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

const SmallExternalLink = styled(BaseExternalLink)`
  ${smallLinkStyle};
`;

const MediumExternalLink = styled(BaseExternalLink)`
  ${mediumLinkStyle};
`;

const SmallInternalLink = styled(BaseInternalLink)`
  ${smallLinkStyle};
`;

const MediumInternalLink = styled(BaseInternalLink)`
  ${mediumLinkStyle};
`;

export {
  SmallExternalLink,
  MediumExternalLink,
  SmallInternalLink,
  MediumInternalLink,
};
