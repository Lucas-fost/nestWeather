import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ChartComponent } from './chart.component';

export default {
  title: 'ChartComponent',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ChartComponent>;

const Template: Story<ChartComponent> = (args: ChartComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}