import styled from 'styled-components';

import { dmiWhite, primaryGray, primaryPurple } from 'defaultStyleHelper';

import { MediumSecondaryButton } from '../Buttons';

export const FilterButton = styled(MediumSecondaryButton)`
  background-color: ${dmiWhite};
  border-radius: 0;
  box-shadow: ${({ $selected }) =>
    $selected
      ? `inset 0 -.4em ${primaryPurple}`
      : `inset 0 -.1em ${primaryGray}`};
  height: auto;
  margin-right: 1rem;
  min-height: 4.2rem;
  padding: 1.2rem 0;
  width: 18.3rem;
  .label {
    display: flex;
    font-weight: ${({ $selected }) => ($selected ? 700 : 500)};
    height: auto;
    justify-content: flex-start;
    min-height: 2.2rem;
    text-align: left;
    text-transform: none;
  }
  ,
  &:hover {
    background-color: ${dmiWhite};
  }
`;
