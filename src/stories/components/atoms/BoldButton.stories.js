import { BoldButton } from './';

export default {
  title: 'Atoms/BoldButton',
  component: BoldButton,
  argTypes: {},
};

const Template = (args) => <BoldButton {...args} />;

export const BoldButtonExampleBold20 = Template.bind({});
BoldButtonExampleBold20.args = { isBold: true, size: 20 };

export const BoldButtonExampleNormal30 = Template.bind({});
BoldButtonExampleNormal30.args = { isBold: false, size: 30 };
