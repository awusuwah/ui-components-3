import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "../button/Button.vue";
import Modal from "./Modal.vue";

const meta = {
  title: "Alpha/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof Modal>;

type Story = StoryObj<typeof meta>;

export default meta;

export const SmallModal: Story = {
  render: (args) => ({
    components: { Button, Modal },
    setup() {
      const open = ref(true);

      return {
        open,
        ...args,
      };
    },
    template: `
      <div>
        <Button variant="cta" label="Open Modal" @click="open = true" />

        <Modal :open="open" :title="title" :text="text" :size="size" @close="open = false">
          <template #footer>
            <div class="flex flex-col sm:flex-row-reverse gap-2">
              <Button variant="danger" label="Deactivate" class="w-full sm:w-auto" />
              <Button variant="neutral" label="Cancel" class="w-full sm:w-auto" @click="open = false" />
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
  args: {
    title: "Deactivate account",
    text: "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.",
    size: "sm",
  },
};

export const MediumModal: Story = {
  render: (args) => ({
    components: { Button, Modal },
    setup() {
      const open = ref(true);

      return {
        open,
        ...args,
      };
    },
    template: `
      <div>
        <Button variant="cta" label="Open Modal" @click="open = true" />

        <Modal :open="open" :title="title" :text="text" :size="size" @close="open = false">
          <template #footer>
            <div class="flex flex-col sm:flex-row-reverse gap-2">
              <Button variant="danger" label="Deactivate" class="w-full sm:w-auto" />
              <Button variant="neutral" label="Cancel" class="w-full sm:w-auto" @click="open = false" />
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
  args: {
    title: "Deactivate account",
    text: "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.",
    size: "md",
  },
};

export const LargeModal: Story = {
  render: (args) => ({
    components: { Button, Modal },
    setup() {
      const open = ref(true);

      return {
        open,
        ...args,
      };
    },
    template: `
      <div>
        <Button variant="cta" label="Open Modal" @click="open = true" />

        <Modal :open="open" :title="title" :text="text" :size="size" @close="open = false">
          <template #footer>
            <div class="flex flex-col sm:flex-row-reverse gap-2">
              <Button variant="danger" label="Deactivate" class="w-full sm:w-auto" />
              <Button variant="neutral" label="Cancel" class="w-full sm:w-auto" @click="open = false" />
            </div>
          </template>
        </Modal>
      </div>
    `,
  }),
  args: {
    title: "Deactivate account",
    text: "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.",
    size: "lg",
  },
};
