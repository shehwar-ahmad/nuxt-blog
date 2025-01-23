<template>
  <div class="flex flex-col gap-10">
    <div>
      <h1 class="text-5xl font-bold leading-[67.2px] text-left">
        Events in Minutes Ideas
      </h1>
      <p class="text-xl font-normal leading-7 tracking-[0.0015em] text-left">
        Welcome to our Ideas Hub, where we share tips. trends and inspiration
        for unforgettable events.
      </p>
    </div>

    <div
      class="flex flex-col lg:flex-row gap-6 justify-between flex-wrap items-center shadow-[6px_6px_54px_0px_#0000000D] rounded-[24px]"
    >
      <div class="h-full flex-1 md:min-w-[400px] py-4 md:py-0">
        <NuxtImg
          src="/images/hero-img.png"
          class="h-full w-full object-cover rounded-[24px] md:rounded-none"
        />
      </div>
      <div class="p-[24px] flex flex-col gap-4 max-w-[566px]">
        <p>Jan 24, 2024</p>
        <p class="text-[33px] font-medium tracking-[0.0025em] text-left">
          How to Plan a Successful Team-Building Retreat for Your Company
        </p>
        <p
          class="text-base font-normal leading-[25.6px] tracking-[0.005em] text-left"
        >
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum
          dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis
          sit aliquam sit nullam neque ultrices.
        </p>

        <hr />

        <div class="flex flex-row justify-between items-center">
          <div>
            <AppButton variant="primary">Corporate Events</AppButton>
          </div>

          <div class="flex flex-row gap-1 items-center">
            <p>Read</p>
            <NuxtImg src="/images/arrow-right.svg" width="16" height="16" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppButton from "~/components/base/AppButton.vue";
</script>

<style></style>
