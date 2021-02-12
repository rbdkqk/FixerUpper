import { EditBoxModal } from '../../../components/organisms';

export default {
  title: 'Organisms/EditBoxModal',
  component: EditBoxModal,
  argTypes: {
    isShow: { control: 'boolean' },
    x: { control: 'number' },
    y: { control: 'number' },
  },
};

const Template = (args) => <EditBoxModal {...args} />;

export const EditBoxModalExample = Template.bind({});
EditBoxModalExample.args = {
  isShow: true,
  x: 100,
  y: 100,
};
