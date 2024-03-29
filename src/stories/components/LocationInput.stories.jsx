import React from 'react';

import { LocationInput } from '../../components/LocationInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/LocationInput',
    component: LocationInput,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' }      
    },
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LocationInput {...args} />;


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  googleKey: 'googlekey',
  label: 'Location Input',
  isMapEnable: false,
  countries: ['id']
};
