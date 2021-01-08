import React from 'react';

import { IconButton } from '../../components/Buttons';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Button/Icon',
  component: IconButton,
  argTypes: { onClick: { action: 'onClick' } },
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = { iconName: 'fileFolder', label: 'button' };
