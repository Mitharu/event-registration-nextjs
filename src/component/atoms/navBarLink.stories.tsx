import type { Meta, StoryObj } from '@storybook/react';

import { LinkNavBar } from './navBarLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Link NavBar',
  component: LinkNavBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name : {
      control: 'text',
      description: 'Overwritten description',
    },
    href : {
      control: 'text',
      description: 'Overwritten description',
    },
    current : {
      control: 'boolean',
    },
    type : {
      control: 'text',
      description: 'Overwritten description',
    },
  } 
} satisfies Meta<typeof LinkNavBar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Home: Story = {
  args: {
    name: 'Home',
    href: '#Home',
    current: false,
    type: 'home',
  },
};
