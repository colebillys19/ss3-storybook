import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {
  accentGray,
  grayBorder,
  primaryCarbon,
  primaryPurple,
  purpleBorder,
} from 'defaultStyleHelper';

export const StyledSelect = styled(Select)`
  border-radius: 0;

  .select-icon-open {
    transform: rotate(180deg) translateY(50%);
  }

  .select {
    border-radius: 0;
    box-sizing: border-box;
    color: ${primaryCarbon};
    font-size: 1.2rem;
    line-height: 1.5;
    padding: 0.5rem 2.9rem 0.6rem 1.2rem;
    width: 22.2rem;

    &:focus {
      background-color: white;
    }

    svg {
      display: none;
    }
  }

  .notchedOutline,
  &.focused .notchedOutline {
    border: ${grayBorder};
  }

  &:hover .notchedOutline,
  &.focused .select:focus ~ .notchedOutline {
    border: ${purpleBorder};
  }
`;

export const StyledMenuItem = styled(MenuItem).attrs(({ selected }) => ({
  'aria-selected': selected,
  classes: { root: 'root', selected: 'selected' },
  ListItemClasses: { focusVisible: 'focusVisible' },
}))`
  color: ${primaryCarbon};
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 0.5rem 1.6rem 0.6rem 2.5rem;

  &.selected {
    background-color: white;
    color: ${primaryPurple};
    font-weight: 700;
  }

  &.root.focusVisible,
  &.root:hover {
    background-color: ${accentGray};
    color: white;
    font-weight: 700;

    .styled-icon {
      color: white;
    }
  }

  &:-moz-focusring {
    outline: none;
  }
`;
