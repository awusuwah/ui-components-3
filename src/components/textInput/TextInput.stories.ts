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
    placeholder: "Joe",
  },
};

export const NormalCompact: Story = {
  args: {
    label: "Firstname",
    placeholder: "Joe",
    compact: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Name",
    disabled: true,
  },
};

export const DisabledCompact: Story = {
  args: {
    label: "Accommodation Code",
    placeholder: "####.###.##",
    compact: true,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Username",
    loading: true,
    loadingText: "Loading Users...",
  },
};

export const LoadingCompact: Story = {
  args: {
    label: "Username",
    loading: true,
    loadingText: "Loading users...",
    compact: true,
  },
};

export const Valid: Story = {
  args: {
    label: "Accommodation Code",
    valid: true,
  },
};

export const ValidCompact: Story = {
  args: {
    label: "Accommodation Code",
    valid: true,
    compact: true,
  },
};

export const Invalid: Story = {
  args: {
    label: "Accommodation Code",
    invalid: true,
  },
};

export const InvalidCompact: Story = {
  args: {
    label: "Accommodation Code",
    invalid: true,
    compact: true,
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
      <TextInput :label="label" :placeholder="placeholder" :disabled="disabled">
        <template #start>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
        </template>
      </TextInput>
    `,
  }),
  args: {
    label: "Email Address",
    placeholder: "max.muster@hotelplan.com",
  },
};

export const EndIcon: Story = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      return {
        ...args,
      };
    },
    template: `
      <TextInput :label="label" :placeholder="placeholder" :disabled="disabled">
        <template #end>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
        </template>
      </TextInput>
    `,
  }),
  args: {
    label: "Email Address",
    placeholder: "max.muster@hotelplan.com",
  },
};
