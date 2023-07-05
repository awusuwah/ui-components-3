import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

const meta = {
  title: "Alpha/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    loading: { control: "boolean" },
    loadingText: { control: "text" },
    outlined: { control: "boolean" },
    prefixIcon: { control: "text" },
    suffixIcon: { control: "text" },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    // TODO: Figure out how to best implement the rounded prop
    variant: { control: "select", options: ["cta", "highlight", "theme", "neutral", "link", "success", "danger", "warning", "info"] },

    // Actions
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

const VARIANTS_TEMPLATE = `
  <section class="grid grid-cols-5 gap-4">
    <div></div>
    <span class="place-self-center font-semibold">Normal</span>
    <span class="place-self-center font-semibold">Normal Disabled</span>
    <span class="place-self-center font-semibold">Outlined</span>
    <span class="place-self-center font-semibold">Outlined Disabled</span>

    <span class="place-self-center font-semibold">Size: xl</span>
    <Button :label="label" size="xl" :variant="variant" />
    <Button :label="label" size="xl" :variant="variant" disabled />
    <Button :label="label" size="xl" :variant="variant" outlined />
    <Button :label="label" size="xl" :variant="variant" disabled outlined />

    <span class="place-self-center font-semibold">Size: lg</span>
    <Button :label="label" size="lg" :variant="variant" />
    <Button :label="label" size="lg" :variant="variant" disabled />
    <Button :label="label" size="lg" :variant="variant" outlined />
    <Button :label="label" size="lg" :variant="variant" disabled outlined />

    <span class="place-self-center font-semibold">Size: md</span>
    <Button :label="label" size="md" :variant="variant" />
    <Button :label="label" size="md" :variant="variant" disabled />
    <Button :label="label" size="md" :variant="variant" outlined />
    <Button :label="label" size="md" :variant="variant" disabled outlined />

    <span class="place-self-center font-semibold">Size: sm</span>
    <Button :label="label" size="sm" :variant="variant" />
    <Button :label="label" size="sm" :variant="variant" disabled />
    <Button :label="label" size="sm" :variant="variant" outlined />
    <Button :label="label" size="sm" :variant="variant" disabled outlined />

    <span class="place-self-center font-semibold">Size: xs</span>
    <Button :label="label" size="xs" :variant="variant" />
    <Button :label="label" size="xs" :variant="variant" disabled />
    <Button :label="label" size="xs" :variant="variant" outlined />
    <Button :label="label" size="xs" :variant="variant" disabled outlined />
  </section>
`;

export const SingleButton: Story = {
  args: {
    label: "Button Text",
    variant: "theme",
  },
};

export const CallToAction: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Call to Action",
    variant: "cta",
  },
};

export const Highlight: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Highlight",
    variant: "highlight",
  },
};

export const Theme: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Theme",
    variant: "theme",
  },
};

export const Neutral: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Neutral",
    variant: "neutral",
  },
};

export const Link: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Link",
    variant: "link",
  },
};

export const Success: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Success",
    variant: "success",
  },
};

export const Danger: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Danger",
    variant: "danger",
  },
};

export const Warning: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Warning",
    variant: "warning",
  },
};

export const Info: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return {
        ...args,
      };
    },
    template: VARIANTS_TEMPLATE,
  }),
  args: {
    label: "Info",
    variant: "info",
  },
};
