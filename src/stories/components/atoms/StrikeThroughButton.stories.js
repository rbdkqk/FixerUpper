import { StrikeThroughButton } from './';

export default {
  title: 'Atoms/StrikeThroughButton',
  component: StrikeThroughButton,
  // argTypes 옵션은 공식문서를 봐도 잘 모르겠음
  argTypes: {
    isStrikeThrough: { control: 'boolean' },
    size: { control: 'number' },
  },
};

const Template = (args) => <StrikeThroughButton {...args} />;

export const StrikeThroughButtonExampleStrikeThrough20 = Template.bind({});
StrikeThroughButtonExampleStrikeThrough20.args = {
  isStrikeThrough: true,
  size: 20,
};

export const StrikeThroughButtonExampleNormal30 = Template.bind({});
StrikeThroughButtonExampleNormal30.args = { isStrikeThrough: false, size: 30 };
