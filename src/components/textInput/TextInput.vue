<template>
  <div :class="compact ? wrapperClassesCompact : wrapperClasses">
    <div v-if="!loading" class="flex flex-row gap-x-2">
      <slot name="start" />

      <div class="flex-1">
        <label for="name" :class="compact ? labelClassesCompact : labelClasses">{{ label }}</label>
        <div class="flex gap-x-2">
          <!-- Slot which renders content before the input element -->
          <slot name="start-input"> </slot>

          <!-- Input element -->
          <input
            type="text"
            name="name"
            id="name"
            :class="compact ? inputClassesCompact : inputClasses"
            :placeholder="placeholder"
            :disabled="disabled"
          />

          <!-- Slot which renders content after the input element-->
          <slot name="end-input"> </slot>
        </div>
      </div>

      <slot name="end" />

      <!-- The icon which is displayed when the TextInput is valid -->
      <slot v-if="valid" name="icon-valid">
        <div :class="{ 'absolute right-2 top-1.5 text-suc': compact, 'flex items-center text-suc': !compact }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      </slot>

      <!-- The icon which is displayed when the TextInput is invalid -->
      <slot v-if="invalid" name="icon-invalid">
        <div :class="{ 'absolute right-2 top-1.5 text-err': compact, 'flex items-center text-err': !compact }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
      </slot>
    </div>

    <!-- ------------- -->
    <!-- Loading state -->
    <!-- ------------- -->
    <div v-if="loading" class="h-full flex items-center gap-x-4">
      <svg :class="[{ 'w-8 h-8': !compact, 'w-5 h-5': compact }, 'animate-spin']" fill="none" viewBox="0 0 24 24">
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
import { computed } from "vue";

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

  // Render the placeholder text of the TextInput.
  placeholder: {
    type: String,
    default: "",
  },

  // Render the TextInput as the provided html input type.
  type: {
    type: String,
    default: "text",
  },

  // Render the TextInput in it's valid state.
  valid: {
    type: Boolean,
    default: false,
  },

  // Render the TextInput in it's invalid state.
  invalid: {
    type: Boolean,
    default: false,
  },

  // Render the TextInput in it's compact style.
  compact: {
    type: Boolean,
    default: false,
  },
});

const wrapperClasses = computed(() => ({
  "rounded-md h-14 px-3 ring-1 ring-inset": true,

  // Loading state
  "pb-1.5 pt-2.5": !props.loading,
  "py-2.5": props.loading,

  // Disabled state
  "opacity-50 cursor-not-allowed": props.disabled,
  "shadow-sm focus-within:ring-2 focus-within:ring-thm": !props.disabled,

  // Validation state
  "ring-gray-300": !props.valid && !props.invalid,
  "ring-suc": props.valid,
  "ring-err": props.invalid,
}));

const wrapperClassesCompact = computed(() => ({
  "relative h-9": true,

  // Loading state
  "block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6":
    props.loading,
}));

const labelClasses = computed(() => ({
  "block text-xs font-medium text-gray-900": true,

  // Disabled state
  "cursor-not-allowed select-none": props.disabled,
}));

const labelClassesCompact = computed(() => ({
  "absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900": true,

  // Disabled state
  "cursor-not-allowed select-none": props.disabled,
}));

const inputClasses = computed(() => ({
  "block flex-1 border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-transparent sm:text-sm sm:leading-6": true,

  // Disabled state
  "cursor-not-allowed": props.disabled,
}));

const inputClassesCompact = computed(() => ({
  "block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:outline-transparent focus:ring-2 focus:ring-inset focus:ring-thm sm:text-sm sm:leading-6":
    true,

  // Disabled state
  "cursor-not-allowed": props.disabled,

  // Validation state (only shown when loading)
  "ring-gray-300": !props.valid && !props.invalid,
  "ring-suc": props.valid,
  "ring-err": props.invalid,
}));
</script>
