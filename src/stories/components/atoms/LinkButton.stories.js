import { LinkButton } from './';

export default {
  title: 'Atoms/LinkButton',
  component: LinkButton,
  argTypes: {
    hasLink: { control: 'boolean' },
    size: { control: 'number' },
  },
};

const Template = (args) => <LinkButton {...args} />;

export const LinkButtonExampleBold20 = Template.bind({});
LinkButtonExampleBold20.args = { hasLink: true, size: 20 };

export const LinkButtonExampleNormal30 = Template.bind({});
LinkButtonExampleNormal30.args = { hasLink: false, size: 30 };
