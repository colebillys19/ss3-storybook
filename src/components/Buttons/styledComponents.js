import styled, { css } from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

import {
  accentRed,
  buttonGray,
  defaultFontSize,
  dmiWhite,
  hoverGray,
  hoverPurple,
  primaryCarbon,
  primaryGray,
  primaryPurple,
} from '../../utils/defaultStyleHelper';

import BaseButton from './baseButton';

const baseButtonStyle = css`
  background-color: ${primaryPurple};
  border-radius: 0.8rem;

  &:disabled {
    background-color: ${primaryGray};
    opacity: 0.5;

    .label {
      color: ${primaryCarbon};
    }
  }

  &:hover {
    background-color: ${hoverPurple};
  }

  .label {
    color: ${dmiWhite};
    font-size: ${defaultFontSize};
    font-weight: 700;
    text-transform: capitalize;
  }
`;

const baseSecondaryStyle = css`
  background-color: ${buttonGray};

  &:hover {
    background-color: ${hoverGray};
  }

  .label {
    color: ${primaryCarbon};
  }
`;

const baseTertiaryStyle = css`
  background-color: ${dmiWhite};
  border-radius: 0.4rem;
  border: solid 0.1rem ${primaryGray};
  min-width: 0;
  width: fit-content;

  &:hover {
    background-color: ${dmiWhite};
    border-color: ${hoverGray};

    .label {
      color: ${hoverPurple};
    }
  }

  .label {
    color: ${primaryPurple};
    display: flex;
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .endIcon,
  .startIcon {
    height: 1.7rem;
    width: 1.7rem;

    svg {
      height: 100%;
    }
  }

  @media all {
    display: table;
  }
`;

export const BorderlessButton = styled(BaseButton)`
  height: auto;
  width: auto;

  .label {
    color: ${accentRed};
    font-size: ${defaultFontSize};
    font-weight: 700;
    line-height: 1.8rem;
    text-transform: capitalize;
  }

  &:hover {
    background-color: ${dmiWhite};
  }
`;

export const LargePrimaryButton = styled(BaseButton)`
  ${baseButtonStyle};
  height: 4.5rem;
  width: 26.1rem;

  .label {
    font-size: 1.6rem;
    height: 1.9rem;
    width: 23.9rem;
  }
`;

export const LargeSecondaryButton = styled(LargePrimaryButton)`
  ${baseSecondaryStyle};
`;

export const MediumPrimaryButton = styled(BaseButton)`
  ${baseButtonStyle};
  height: 4.5rem;
  width: 22.6rem;

  .label {
    height: 1.8rem;
    width: 20rem;
  }
`;

export const MediumSecondaryButton = styled(MediumPrimaryButton)`
  ${baseSecondaryStyle};
`;

export const MediumTertiaryButton = styled(BaseButton)`
  ${baseTertiaryStyle};
  height: 2.4rem;
  padding: 0.3rem 1.6rem;

  .label {
    height: 1.8rem;
  }
`;

export const SmallPrimaryButton = styled(BaseButton)`
  ${baseButtonStyle};
  height: 3.9rem;
  width: 17.3rem;

  .label {
    height: 1.8rem;
    width: 15.7rem;
  }
`;

export const SmallSecondaryButton = styled(SmallPrimaryButton)`
  ${baseSecondaryStyle};
`;

export const SmallTertiaryButton = styled(BaseButton)`
  ${baseTertiaryStyle};
  height: 1.9rem;
  padding: 0.2rem 1rem;

  .label {
    font-size: 1rem;
    height: 1.5rem;
  }
`;

export const XSmallPrimaryButton = styled(BaseButton)`
  ${baseButtonStyle};
  height: 2.8rem;
  width: 12.7rem;

  .label {
    font-size: 1.2rem;
    height: 1.8rem;
    width: 11.5rem;
  }
`;

export const XSmallSecondaryButton = styled(XSmallPrimaryButton)`
  ${baseSecondaryStyle};
`;

export const StyledIconButton = styled(IconButton)`
  svg {
    font-size: 2.8rem;
    padding: 0;
  },
  &.root {
    padding: 0;
    &:focus {
      z-index: 1400;
    }
    &: hover {
      background-color: transparent;
    }
  },
`;
