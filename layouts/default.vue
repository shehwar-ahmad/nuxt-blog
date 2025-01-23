<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow w-full flex flex-col">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
</script>

<style scoped>
header {
  box-shadow: 0px 1px 4px 0px #0c0c0d1a;
}
</style>
