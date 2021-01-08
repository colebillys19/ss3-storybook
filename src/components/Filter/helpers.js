import { primaryGray, primaryPurple } from 'defaultStyleHelper';

export const getBoxShadow = ({ $selected }) =>
  $selected ? `inset 0 -.4em ${primaryPurple}` : `inset 0 -.1em ${primaryGray}`;
