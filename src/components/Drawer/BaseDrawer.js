import React from 'react';
import T from 'prop-types';

import { StyledDrawer } from './styledComponents';

const BaseDrawer = ({ Component, isOpen, onClose, ...restProps }) => (
  <StyledDrawer
    anchor="right"
    classes={{
      modal: 'drawer-modal',
      paper: 'drawer-paper',
      root: 'drawer',
    }}
    ModalProps={{ disableRestoreFocus: true }}
    onClose={onClose}
    open={isOpen}
    variant="temporary"
    {...restProps}
  >
    {Component}
  </StyledDrawer>
);

BaseDrawer.propTypes = {
  Component: T.oneOfType([T.element, T.elementType]).isRequired,
  isOpen: T.bool.isRequired,
  onClose: T.func.isRequired,
};

export default BaseDrawer;
