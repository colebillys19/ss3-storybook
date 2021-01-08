import React, { useState } from 'react';

import BaseSwitch from '../../components/Switch';

// const Component = (args) => {
//   const [active, setActive] = useState(false);

//   const onChange = () => {
//     setActive(!active);
//   };

//   return <BaseSwitch {...args} checked={active} onChange={onChange} />;
// };

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Components/Switch/Base',
  component: BaseSwitch,
  argTypes: { onChange: { action: 'onChange' } },
};

const Template = (args) => <BaseSwitch {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'button' };
