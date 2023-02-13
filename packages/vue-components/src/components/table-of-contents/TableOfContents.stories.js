import TableOfContents from './TableOfContents.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Vue/Components/TableOfContents',
  component: TableOfContents,
  argTypes: {
    anchors: {control: 'object'},
    title: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TableOfContents },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<TableOfContents v-bind="args" />',
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Default.args = {
  anchors: [
    {
      id: "anchor-1",
      title: "Anchor 1 title",
      href: "#anchor1",
      label: "Anchor 1",
      classes: "link teaser"
    },
    {
      id: "anchor-2",
      title: "Anchor 2 title",
      href: "#anchor2",
      label: "Anchor 2",
      classes: "link teaser"
    },
    {
      id: "anchor-3",
      title: "Anchor 3 title",
      href: "#anchor3",
      label: "Anchor 3",
      classes: "link teaser"
    },
  ],
  title: 'In this section',
};
