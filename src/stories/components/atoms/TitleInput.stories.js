import { TitleInput } from './';

export default {
  title: 'Atoms/TitleInput',
  component: TitleInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TitleInput {...args} />;

export const TitleInputExample20 = Template.bind({});
TitleInputExample20.args = { size: 20 };

export const TitleInputExample40 = Template.bind({});
TitleInputExample40.args = { size: 40 };

export const TitleInputExample60 = Template.bind({});
TitleInputExample60.args = { size: 60 };
