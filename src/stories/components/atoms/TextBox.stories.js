import { TextBox } from '../../../components/atoms';

export default {
  title: 'Molecules/TextBox',
  component: TextBox,
  argTypes: {
    id: { control: 'number' },
    index: { control: 'number' },
    content: { control: 'text' },
  },
};

const Template = (args) => <TextBox {...args} />;

export const TextBox_Show = Template.bind({});
TextBox_Show.args = {
  isShow: true,
};
