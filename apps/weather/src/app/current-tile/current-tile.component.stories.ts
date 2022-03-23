import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CurrentTileComponent } from './current-tile.component';

export default {
  title: 'CurrentTileComponent',
  component: CurrentTileComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CurrentTileComponent>;

const Template: Story<CurrentTileComponent> = (args: CurrentTileComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}