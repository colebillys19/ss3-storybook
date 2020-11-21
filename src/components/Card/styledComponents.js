import styled from 'styled-components';

import { primaryGray } from 'defaultStyleHelper';

import BaseCard from './BaseCard';

export const SecondaryCard = styled(BaseCard)`
  border: solid 0.1rem ${primaryGray};
  border-radius: 0.8rem;
`;

export const PrimaryCard = styled(SecondaryCard)`
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.1);
`;
