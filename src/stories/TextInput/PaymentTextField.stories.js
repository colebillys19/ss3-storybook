import React from 'react';

import PaymentTextField from '../../components/Input/PaymentTextField';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Text Input/Payment',
  component: PaymentTextField,
};

// const Template = (args) => <PaymentTextField {...args} />;
const Template = (args) => <div {...args}>PLACEHOLDER</div>;

export const Default = Template.bind({});
Default.args = { label: 'payment', value: '' };
