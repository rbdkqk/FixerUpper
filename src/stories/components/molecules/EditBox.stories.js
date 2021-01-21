import { EditBox } from '.';

export default {
  title: 'Molecules/EditBox',
  component: EditBox,
  argTypes: {
    isShow: { control: 'boolean' },
  },
};

const Template = (args) => <EditBox {...args} />;

export const EditBox_Show = Template.bind({});
EditBox_Show.args = {
  isShow: true,
};
