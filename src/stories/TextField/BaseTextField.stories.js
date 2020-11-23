import React from 'react';

import BaseTextField from '../../components/Input/BaseTextField';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/TextFields/Base',
  component: BaseTextField,
};

const Template = (args) => <BaseTextField {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'base' };
