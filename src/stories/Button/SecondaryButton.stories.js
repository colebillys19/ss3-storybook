import React from 'react';

import { LargeSecondaryButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Button/Secondary',
  component: LargeSecondaryButton,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <LargeSecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'button' };
