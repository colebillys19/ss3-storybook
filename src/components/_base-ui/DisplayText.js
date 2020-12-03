import React from 'react';
import T from 'prop-types';

const DisplayText = ({ Component, text, ...restProps }) => (
  <Component {...restProps}>{text}</Component>
);

DisplayText.propTypes = {
  Component: T.elementType,
  text: T.string.isRequired,
};

DisplayText.defaultProps = { Component: 'div' };

export default DisplayText;
