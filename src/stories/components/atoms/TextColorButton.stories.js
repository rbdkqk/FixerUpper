import { TextColorButton } from '../../../components/atoms';

export default {
  title: 'Atoms/TextColorButton',
  component: TextColorButton,
  // argTypes 옵션은 공식문서를 봐도 잘 모르겠음
  argTypes: {
    label: { control: 'text' }, // label은 mousehover로 띄울 설명 툴팁에 사용할 것임
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: { control: 'number' },
  },
};

const Template = (args) => <TextColorButton {...args} />;

export const TextColorButtonExampleDefaultTextColor20 = Template.bind({});
TextColorButtonExampleDefaultTextColor20.args = {
  label: 'Default',
  fontColor: 'black',
  backgroundColor: 'white',
  size: 20,
};

export const TextColorButtonExampleRedTextColor30 = Template.bind({});
TextColorButtonExampleRedTextColor30.args = {
  label: 'Red text',
  fontColor: 'red',
  backgroundColor: 'white',
  size: 30,
};

export const TextColorButtonExampleDefaultBackgroundColor20 = Template.bind({});
TextColorButtonExampleDefaultBackgroundColor20.args = {
  label: 'Default',
  fontColor: 'black',
  backgroundColor: 'white',
  size: 20,
};

export const TextColorButtonExampleSkyblueBackgroundColor30 = Template.bind({});
TextColorButtonExampleSkyblueBackgroundColor30.args = {
  label: 'Skyblue background',
  fontColor: 'black',
  backgroundColor: 'skyblue',
  size: 30,
};
