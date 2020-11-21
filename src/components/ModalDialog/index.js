import React from 'react';
import T from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import positionOptions from './constants';
import { StyledModalDialog } from './styledComponents';

const ModalDialog = ({
  align,
  children,
  direction,
  height,
  isOpen,
  justify,
  position,
  width,
  ...restProps
}) => {
  const positionProps = positionOptions[position];

  return (
    <StyledModalDialog
      $align={align}
      $height={height}
      $justify={justify}
      $width={width}
      classes={{ paper: 'paper', scrollPaper: 'scrollPaper' }}
      open={isOpen}
      TransitionComponent={direction !== 'none' ? Slide : undefined}
      TransitionProps={{ direction }}
      {...positionProps}
      {...restProps}
    >
      <DialogContent classes={{ root: 'content-root' }}>
        {children}
      </DialogContent>
    </StyledModalDialog>
  );
};

ModalDialog.defaultProps = { direction: 'down', position: 'center' };

ModalDialog.propTypes = {
  align: T.string,
  children: T.node.isRequired,
  direction: T.string,
  height: T.string,
  isOpen: T.bool.isRequired,
  justify: T.string,
  position: T.string,
  width: T.string,
};

export default ModalDialog;
