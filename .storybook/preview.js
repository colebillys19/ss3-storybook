import { StylesProvider } from "@material-ui/styles";

const withThemeProvider = (Story, context) => (
  <StylesProvider injectFirst>
      <Story {...context} />
    </StylesProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
