import React from 'react';

import BaseButton from '../../components/Buttons/baseButton';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Buttons/Base',
  component: BaseButton,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <BaseButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'button' };
