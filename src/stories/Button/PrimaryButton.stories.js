import React from 'react';

import { LargePrimaryButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Button/Primary',
  component: LargePrimaryButton,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <LargePrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'button' };
