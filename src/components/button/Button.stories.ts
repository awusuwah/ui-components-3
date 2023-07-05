import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "./Button.vue";

const meta = {
  title: "Alpha/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },

    // Actions
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

// Component exports
export const CallToAction: Story = {
  args: {
    variant: "cta",
    label: "Call to Action",
  },
};
