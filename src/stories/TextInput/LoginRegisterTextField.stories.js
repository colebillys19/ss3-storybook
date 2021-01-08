import React from 'react';

import LoginRegisterTextField from '../../components/Input/LoginRegisterTextField';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Text Input/LoginRegister',
  component: LoginRegisterTextField,
};

const Template = (args) => <LoginRegisterTextField {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'login/register', value: '' };
