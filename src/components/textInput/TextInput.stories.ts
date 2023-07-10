import type { Meta, StoryObj } from "@storybook/vue3";

import TextInput from "./TextInput.vue";

const meta = {
  title: "Alpha/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof TextInput>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Normal: Story = {
  args: {
    label: "Firstname",
  },
};

export const Disabled: Story = {
  args: {
    label: "Name",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Firstname",
    loading: true,
  },
};
