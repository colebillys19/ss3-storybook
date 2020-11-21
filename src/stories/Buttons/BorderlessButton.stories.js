import React from 'react';

import { BorderlessButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Buttons/Borderless',
  component: BorderlessButton,
  // argTypes: {},
};

const Template = (args) => <BorderlessButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'yeet',
  onClick: () => null,
};
