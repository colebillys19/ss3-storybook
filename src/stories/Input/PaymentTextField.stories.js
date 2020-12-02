import React from 'react';

import PaymentTextField from '../../components/Input/PaymentTextField';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Input/Payment',
  component: PaymentTextField,
};

const Template = (args) => <PaymentTextField {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'payment', value: '' };
