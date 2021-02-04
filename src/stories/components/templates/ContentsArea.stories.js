import { ContentsArea } from '../../../components/templates';

export default {
  title: 'Templates/ContentsArea',
  component: ContentsArea,
  argTypes: {},
};

const Template = (args) => <ContentsArea {...args} />;

export const ContentsAreaExample = Template.bind({});
ContentsAreaExample.args = {};
