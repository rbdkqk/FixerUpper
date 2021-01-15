import { UnderLineButton } from './';

export default {
  title: 'Atoms/UnderLineButton',
  component: UnderLineButton,
  // argTypes 옵션은 공식문서를 봐도 잘 모르겠음
  argTypes: {
    isUnderLine: { control: 'boolean' },
    size: { control: 'number' },
  },
};

const Template = (args) => <UnderLineButton {...args} />;

export const UnderLineButtonExampleUnderLine20 = Template.bind({});
UnderLineButtonExampleUnderLine20.args = { isUnderLine: true, size: 20 };

export const UnderLineButtonExampleNormal30 = Template.bind({});
UnderLineButtonExampleNormal30.args = { isUnderLine: false, size: 30 };
