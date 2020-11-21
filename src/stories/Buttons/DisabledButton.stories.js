import React from 'react';

import { LargePrimaryButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Buttons/Disabled',
  component: LargePrimaryButton,
  // argTypes: {},
};

const Template = (args) => <LargePrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: true,
  label: 'yeet',
  onClick: () => null,
};