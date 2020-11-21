import React from 'react';

import { LargeSecondaryButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Buttons/Secondary',
  component: LargeSecondaryButton,
  // argTypes: {},
};

const Template = (args) => <LargeSecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'yeet',
  onClick: () => null,
};
