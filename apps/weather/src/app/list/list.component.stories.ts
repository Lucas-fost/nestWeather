import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ListComponent } from './list.component';

export default {
  title: 'ListComponent',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ListComponent>;

const Template: Story<ListComponent> = (args: ListComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}