<script lang="ts" setup>
import { defineProps, computed } from 'vue';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  [key: string]: any;
}

const props = defineProps<ButtonProps>();

const classes = computed(() => {
  return [
    'rounded px-[10px] py-[12px] transition-all w-fit',
    {
      primary: 'bg-[#296BFF0D] text-[#222222B2] hover:bg-[#296BFF1]',
      secondary: 'border border-solid border-[#6A6A6ACC] rounded-full py-3 px-[32px] text-[#222222B2]',
      tertiary: 'bg-green-500 text-white hover:bg-green-600',
    }[props.variant || 'primary'],
    props.disabled && 'opacity-50 cursor-not-allowed',
  ]
    .filter(Boolean)
    .join(' ');
});
</script>

<template>
  <button :class="classes" v-bind="{ ...props }">
    <slot />
  </button>
</template>

