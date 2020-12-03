import React, { Fragment } from 'react';
import { StylesProvider } from "@material-ui/styles";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`html { font-size: 62.5%; }`;
const withGlobalStyle = (Story, context) => (
  <Fragment>
    <Story {...context} />
    <GlobalStyle />
  </Fragment>
);

const withThemeProvider = (Story, context) => (
  <StylesProvider injectFirst>
    <Story {...context} />
  </StylesProvider>
);

export const decorators = [withGlobalStyle, withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
