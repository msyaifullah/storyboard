import React from 'react';

import { Ticket } from '../../components/Ticket';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Ticket',
    component: Ticket,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' }      
    },
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Ticket {...args} />;


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {  
};
