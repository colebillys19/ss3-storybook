import React from 'react';

import { BorderlessButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Button/Borderless',
  component: BorderlessButton,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <BorderlessButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'button' };
