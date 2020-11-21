import React from 'react';

import { MediumTertiaryButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Buttons/Tertiary',
  component: MediumTertiaryButton,
  // argTypes: {},
};

const Template = (args) => <MediumTertiaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'yeet',
  onClick: () => null,
};
