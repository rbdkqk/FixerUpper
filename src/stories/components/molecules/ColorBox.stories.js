import { ColorBox } from '.';

export default {
  title: 'Molecules/ColorBox',
  component: ColorBox,
  argTypes: {
    isShow: { control: 'boolean' },
  },
};

const Template = (args) => <ColorBox {...args} />;

export const ColorBox_Show = Template.bind({});
ColorBox_Show.args = {
  isShow: true,
};
