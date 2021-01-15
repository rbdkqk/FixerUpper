import { ItalicButton } from './';

export default {
  title: 'Atoms/ItalicButton',
  component: ItalicButton,
  // argTypes 옵션은 공식문서를 봐도 잘 모르겠음
  argTypes: {
    isItalic: { control: 'boolean' },
    size: { control: 'number' },
  },
};

const Template = (args) => <ItalicButton {...args} />;

export const ItalicButtonExampleItalic20 = Template.bind({});
ItalicButtonExampleItalic20.args = { isItalic: true, size: 20 };

export const ItalicButtonExampleNormal30 = Template.bind({});
ItalicButtonExampleNormal30.args = { isItalic: false, size: 30 };
