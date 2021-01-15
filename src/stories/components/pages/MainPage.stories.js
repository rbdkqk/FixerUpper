import { MainPage } from './';

export default {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MainPage {...args} />;

export const MainPageExample = Template.bind({});
MainPageExample.args = {};
