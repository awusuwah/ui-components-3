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

export const StartIcon: Story = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <TextInput label="Email Address">
        <template #start>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            <path fill-rule="evenodd"
              d="M10 0a10 10 0 100 20 10 10 0 000-20zM1 10a9 9 0 1118 0 9 9 0 01-18 0z"
              clip-rule="evenodd" />
          </svg>
        </template>
      </TextInput>
    `,
  }),
  args: {
    label: "Email Address",
  },
};
