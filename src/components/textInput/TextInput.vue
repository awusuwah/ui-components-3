<template>
  <div
    :class="[
      { 'pb-1.5 pt-2.5': !loading, 'py-2.5': loading },
      'rounded-md h-14 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-thm',
    ]"
  >
    <div v-if="!loading">
      <label for="name" class="block text-xs font-medium text-gray-900">{{ label }}</label>
      <div class="flex gap-x-2">
        <!-- Slot which renders content before the input element -->
        <slot name="start"> </slot>

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

    <!-- ------------- -->
    <!-- Loading state -->
    <!-- ------------- -->
    <div v-if="loading" class="h-full flex items-center gap-x-4">
      <svg class="animate-spin w-8 h-8" fill="none" viewBox="0 0 24 24">
        <circle class="text-thm-light opacity-25" cx="12" cy="12" r="10" stroke-width="4" />
        <path
          class="text-thm opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>

      <span>
        {{ loadingText }}
      </span>
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

  // Render the text which is displayed next to the loading spinner while the TextInput is loading.
  loadingText: {
    type: String,
    default: "Loading...",
  },
});
</script>
