module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.js',
  ],
}
