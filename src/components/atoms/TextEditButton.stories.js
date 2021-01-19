import { TextEditButton } from './';

export default {
  title: 'Atoms/TextEditButton',
  component: TextEditButton,
  argTypes: {
    type: { control: 'text' },
    isDecorated: { control: 'boolean' },
    size: { control: 'number' },
  },
};

const Template = (args) => <TextEditButton {...args} />;

// Bold
export const TextEditButton_BoldOn20 = Template.bind({});
TextEditButton_BoldOn20.args = {
  type: 'Bold',
  isDecorated: true,
  size: 20,
};

export const TextEditButton_BoldOff30 = Template.bind({});
TextEditButton_BoldOff30.args = {
  type: 'Bold',
  isDecorated: false,
  size: 30,
};

// Italic
export const TextEditButton_ItalicOn20 = Template.bind({});
TextEditButton_ItalicOn20.args = {
  type: 'Italic',
  isDecorated: true,
  size: 20,
};

export const TextEditButton_ItalicOff30 = Template.bind({});
TextEditButton_ItalicOff30.args = {
  type: 'Italic',
  isDecorated: false,
  size: 30,
};

// UnderLine
export const TextEditButton_UnderLineOn20 = Template.bind({});
TextEditButton_UnderLineOn20.args = {
  type: 'UnderLine',
  isDecorated: true,
  size: 20,
};

export const TextEditButton_UnderLineOff30 = Template.bind({});
TextEditButton_UnderLineOff30.args = {
  type: 'UnderLine',
  isDecorated: false,
  size: 30,
};

// StrikeThrough
export const TextEditButton_StrikeThroughOn20 = Template.bind({});
TextEditButton_StrikeThroughOn20.args = {
  type: 'StrikeThrough',
  isDecorated: true,
  size: 20,
};

export const TextEditButton_StrikeThroughOff30 = Template.bind({});
TextEditButton_StrikeThroughOff30.args = {
  type: 'StrikeThrough',
  isDecorated: false,
  size: 30,
};

// Link
export const TextEditButton_LinkOn20 = Template.bind({});
TextEditButton_LinkOn20.args = {
  type: 'Link',
  isDecorated: true,
  size: 20,
};

export const TextEditButton_LinkOff30 = Template.bind({});
TextEditButton_LinkOff30.args = {
  type: 'Link',
  isDecorated: false,
  size: 30,
};
