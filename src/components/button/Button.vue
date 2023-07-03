<template>
  <button class="bg-purple-400">button text</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

/**
 * The props which can be passed to the button component.
 */
const props = defineProps({
  // Button will be rendered in it's disabled state. This grayes it out and prevents it from being interacted with.
  disabled: {
    type: Boolean,
    default: false,
  },

  // Button will be rendered in it's loading state. This disables it and shows a loading spinner and some text (check `loadingText` prop).
  loading: {
    type: Boolean,
    default: false,
  },

  // Only shown when the `loading` prop is set to true. This is the text that will be shown next to the loading spinner.
  loadingText: {
    type: String,
    default: "Loading...",
  },

  // Button will be rendered in it's outlined state. This moves the main color to the border and makes the background transparent.
  outlined: {
    type: Boolean,
    default: false,
  },

  // The icon which is shown on the left side of the button text. Can load any icon from inside the library. For custom items, check the `prefix` slot.
  prefixIcon: {
    type: String,
    default: null,
  },

  // The icon which is shown on the right side of the button text. Can load any icom from inside the library. For custom items, check the `suffix` slot.
  suffixIcon: {
    type: String,
    default: null,
  },

  // Button will be rendered in the provided size. Can be one of `xs`, `sm`, `md`, `lg`, `xl`.
  size: {
    type: String,
    default: "md",
    validator: (value: string) => ["xs", "sm", "md", "lg", "xl"].includes(value),
  },

  // Allow ounly certain provided corners to be rounded on the button. Used to connect buttons and other inputs together.
  rounded: {
    type: [Array, String],
    default: "rounded",
    validator: (value: string | string[]) => {
      const options = [
        "rounded",
        "rounded-none",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-tl",
        "rounded-tr",
        "rounded-bl",
        "rounded-br",
      ];

      if (Array.isArray(value)) {
        return value.every((v: string) => options.includes(v));
      }

      return options.includes(value);
    },
  },

  // Button will be rendered with a native HTML type.
  type: {
    type: String,
    default: "button",
    validator: (value: string) => ["button", "submit", "reset"].includes(value),
  },

  // Button will be rendered with the provided color variant.
  variant: {
    type: String,
    default: "neutral",
    validator: (value: string) => ["cta", "highlight", "theme", "neutral", "link", "success", "danger", "warning", "info"].includes(value),
  },

  // Truncate the button text with an ellipsis if too long
  truncate: {
    type: Boolean,
    default: false,
  },
});

/**
 * The classes which are applied to the button based on various props.
 */
const classes = computed(() => ({
  "inline-flex items-center justify-center font-medium cursor-pointer transition-all": true,
  "focus:outline-none focus:ring-2 focus:ring-thm focus:ring-offset-2 focus:ring-offset-bgr": true,

  // Variant: `cta`
  "bg-cta-hover text-cta-contrast": props.variant === "cta" && !props.outlined,
  "hover:bg-cta active:bg-cta-active": props.variant === "cta" && !props.outlined && !props.disabled,

  "bg-bgr border border-cta text-cta-hover": props.variant === "cta" && props.outlined,
  "hover:bg-cta-light-hover active:bg-cta-light-active": props.variant === "cta" && props.outlined && !props.disabled,

  // Variant: `highlight`
  "bg-hlt-hover text-hlt-contrast": props.variant === "highlight" && !props.outlined,
  "hover:bg-hlt active:bg-hlt-active": props.variant === "highlight" && !props.outlined && !props.disabled,

  "bg-bgr border border-hlt text-hlt-hover": props.variant === "highlight" && props.outlined,
  "hover:bg-hlt-light-hover active:bg-hlt-light-active": props.variant === "highlight" && props.outlined && !props.disabled,

  // Variant: `theme`
  "bg-thm-hover text-thm-contrast": props.variant === "theme" && !props.outlined,
  "hover:bg-thm active:bg-thm-active": props.variant === "theme" && !props.outlined && !props.disabled,

  "bg-bgr border border-thm text-thm-hover": props.variant === "theme" && props.outlined,
  "hover:bg-thm-light-hover active:bg-thm-light-active": props.variant === "theme" && props.outlined && !props.disabled,

  // Variant: `neutral`
  "bg-bgr-100 text-txt-200": props.variant === "neutral" && !props.outlined,
  "hover:bg-bgr-200 active:bg-bgr-300": props.variant === "neutral" && !props.outlined && !props.disabled,

  "border border-bgr-200 text-txt-400": props.variant === "neutral" && props.outlined,
  "hover:bg-bgr-100 active:bg-bgr-200": props.variant === "neutral" && props.outlined && !props.disabled,

  // Variant: `link`
  "bg-transparent text-txt font-medium underline underline-offset-2": props.variant === "link" && !props.outlined,
  "border border-bgr-200 text-txt font-medium underline underline-offset-2": props.variant === "link" && props.outlined,
  "hover:no-underline": props.variant === "link" && !props.disabled,

  // Variant: `success`
  "bg-suc-hover text-suc-contrast": props.variant === "success" && !props.outlined,
  "hover:bg-suc active:bg-suc-active": props.variant === "success" && !props.outlined && !props.disabled,

  "bg-bgr border border-suc text-suc-hover": props.variant === "success" && props.outlined,
  "hover:bg-suc-light-hover active:bg-suc-light-active": props.variant === "success" && props.outlined && !props.disabled,

  // Variant: `danger`
  "bg-dgr-hover text-dgr-contrast": props.variant === "danger" && !props.outlined,
  "hover:bg-dgr active:bg-dgr-active": props.variant === "danger" && !props.outlined && !props.disabled,

  "bg-bgr border border-dgr text-dgr-hover": props.variant === "danger" && props.outlined,
  "hover:bg-dgr-light-hover active:bg-dgr-light-active": props.variant === "danger" && props.outlined && !props.disabled,

  // Variant: `warning`
  "bg-wng-hover text-wng-contrast": props.variant === "warning" && !props.outlined,
  "hover:bg-wng active:bg-wng-active": props.variant === "warning" && !props.outlined && !props.disabled,

  "bg-bgr border border-wng text-wng-hover": props.variant === "warning" && props.outlined,
  "hover:bg-wng-light-hover active:bg-wng-light-active": props.variant === "warning" && props.outlined && !props.disabled,

  // Variant: `info`
  "bg-inf-hover text-inf-contrast": props.variant === "info" && !props.outlined,
  "hover:bg-inf active:bg-inf-active": props.variant === "info" && !props.outlined && !props.disabled,

  "bg-bgr border border-inf text-inf-hover": props.variant === "info" && props.outlined,
  "hover:bg-inf-light-hover active:bg-inf-light-active": props.variant === "info" && props.outlined && !props.disabled,

  // Sizes
  "h-6 px-1.5 text-xs gap-1": props.size === "xs" && (props.variant !== "link" || props.outlined),
  "h-8 px-2 text-sm gap-2": props.size === "sm" && (props.variant !== "link" || props.outlined),
  "h-[2.375rem] px-2 text-base gap-2": props.size === "md" && (props.variant !== "link" || props.outlined),
  "h-11 px-3 text-base gap-2": props.size === "lg" && (props.variant !== "link" || props.outlined),
  "h-14 px-4 text-lg gap-2": props.size === "xl" && (props.variant !== "link" || props.outlined),

  "text-xs gap-2": props.size === "xs" && props.variant === "link" && !props.outlined,
  "text-sm gap-2": props.size === "sm" && props.variant === "link" && !props.outlined,
  "text-base gap-2": (props.size === "md" || props.size === "lg" || props.size === "xl") && props.variant === "link" && !props.outlined,

  // Disabled
  "italic cursor-not-allowed opacity-40": props.disabled,

  // Truncate
  "min-w-0": props.truncate,
}));
</script>
