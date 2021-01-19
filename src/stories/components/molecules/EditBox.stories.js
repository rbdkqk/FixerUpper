import { EditBox } from '.';

export default {
  title: 'Molecules/EditBox',
  component: EditBox,
  argTypes: {
    isShow: { control: 'boolean' },
  },
};

const Template = (args) => <EditBox {...args} />;

export const EditBoxExample_Show = Template.bind({});
EditBoxExample_Show.args = {
  isShow: true,
};
