import { TitleBox } from './';

export default {
  title: 'Organisms/TitleBox',
  component: TitleBox,
  argTypes: {},
};

const Template = (args) => <TitleBox {...args} />;

export const TitleBoxExample = Template.bind({});
TitleBoxExample.args = {};
