import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TileComponent } from './tile.component';

export default {
  title: 'TileComponent',
  component: TileComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TileComponent>;

const Template: Story<TileComponent> = (args: TileComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}