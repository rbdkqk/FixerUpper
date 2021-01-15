import { ContentsArea } from './';

export default {
  title: 'Templates/ContentsArea',
  component: ContentsArea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ContentsArea {...args} />;

export const ContentsAreaExample = Template.bind({});
ContentsAreaExample.args = {};
