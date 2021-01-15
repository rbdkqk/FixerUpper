import { TitleArea } from './';

export default {
  title: 'Templates/TitleArea',
  component: TitleArea,
  argTypes: {},
};

const Template = (args) => <TitleArea {...args} />;

export const TitleAreaExample = Template.bind({});
TitleAreaExample.args = {};
