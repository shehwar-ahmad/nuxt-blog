<template>
  <div class="max-w-[400px] rounded overflow-hidden">
    <NuxtImg
      :src="props.imageUrl"
      alt="Blog Image"
      class="w-full h-[280px] rounded-[12px]"
    />
    <div class="py-4">
      <div class="text-xs font-normal leading-[19.2px] tracking-[0.004em] mb-2 text-[#6C757D]">{{ props.date }}</div>
      <div class="text-base font-semibold leading-[25.6px] tracking-[0.0015em] mb-2 text-[#495057]">{{ props.title }}</div>
      <p class="text-[#6C757D] text-sm font-normal leading-[19.6px] tracking-[0.0025em]">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const props = defineProps<BlogCardProps>();
</script>

<style scoped>
/* Add your styles here */
</style>
