<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <div
        class="flex flex-row justify-between gap-3 py-2 flex-wrap items-center max-w-[1280px] mx-auto min-h-[82px] px-[20px]"
      >
        <div>
          <NuxtImg
            src="/images/Brand.svg"
            width="107"
            height="50"
            class="md:block hidden"
          />
        </div>
        <div class="flex flex-row gap-4 items-center flex-wrap">
          <p class="text-sm font-semibold leading-[19.6px] tracking-[0.001em]">
            Top Vendors, Apply Now!
          </p>
          <NuxtImg src="/images/header-user.svg" width="100" height="44" />
        </div>
      </div>
    </header>
    <main class="flex-grow w-full">
      <NuxtPage />
    </main>
    <footer class="bg-gray-100 text-center py-4">
      <p>&copy; 2025 Blog</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  box-shadow: 0px 1px 4px 0px #0c0c0d1a;
}
</style>
