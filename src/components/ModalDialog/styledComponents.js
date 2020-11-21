import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

import { grayBorder } from 'defaultStyleHelper';

export const StyledModalDialog = styled(Dialog)`
  .content-root {
    overflow-x: hidden;
    overflow-y: auto;
  }
  .paper {
    border-radius: 0.8rem;
    border: ${grayBorder};
    box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.1);
    height: ${({ $height }) => $height || '51.6rem'};
    margin: 0;
    overflow: hidden;
    width: ${({ $width }) => $width || '38.8rem'};
    word-wrap: break-word;
  }
  .scrollPaper {
    align-items: ${({ $align }) => $align || 'center'};
    justify-content: ${({ $justify }) => $justify || 'center'};
  }
`;
