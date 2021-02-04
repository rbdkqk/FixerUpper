import { MainPage } from '../../../components/pages';

export default {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {},
};

const Template = (args) => <MainPage {...args} />;

export const MainPageExample = Template.bind({});
MainPageExample.args = {};
