import React from 'react';

import { LargePrimaryButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Buttons/Primary',
  component: LargePrimaryButton,
  // argTypes: {},
};

const Template = (args) => <LargePrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'yeet',
  onClick: () => null,
};