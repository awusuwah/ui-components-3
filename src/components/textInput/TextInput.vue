<template>
  <div class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-thm">
    <label for="name" class="block text-xs font-medium text-gray-900">{{ label }}</label>
    <div class="flex gap-x-2">
      <!-- Slot which renders content before the input element -->
      <slot name="start">
        <!-- Loading indicator -->
        <svg v-if="loading" class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
          <circle class="text-thm-light opacity-25" cx="12" cy="12" r="10" stroke-width="4"></circle>
          <path
            class="text-thm opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </slot>

      <!-- Input element -->
      <input
        type="text"
        name="name"
        id="name"
        class="block flex-1 border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-transparent sm:text-sm sm:leading-6"
        placeholder="Jane Smith"
      />

      <!-- Slot which renders content after the input element-->
      <slot name="end"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * The props which can be passed to the TextInput component.
 */
const props = defineProps({
  // Render the TextInput in it's disabled state.
  disabled: {
    type: Boolean,
    default: false,
  },

  // Render the TextInput with a level.
  label: {
    type: String,
    default: "",
  },

  // Render the TextInput in it's loading state.
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
