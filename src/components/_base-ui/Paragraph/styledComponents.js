import styled from 'styled-components';

import { primaryCarbon } from 'defaultStyleHelper';

const BaseParagraph = styled.p`
  color: ${primaryCarbon};
  margin: 0;
`;

export const P1 = styled(BaseParagraph)`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;

export const P2 = styled(BaseParagraph)`
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

export const P3 = styled(BaseParagraph)`
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

export const P4 = styled(BaseParagraph)`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const P5 = styled(BaseParagraph)`
  font-size: 0.9rem;
  line-height: 1.3rem;
`;
