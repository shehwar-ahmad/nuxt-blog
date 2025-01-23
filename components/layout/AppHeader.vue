<template>
  <header>
    <div
      class="flex flex-row justify-between gap-3 py-2 flex-wrap items-center max-w-[1280px] mx-auto min-h-[82px] px-[20px]"
    >
      <div class="cursor-pointer" @click="$router.push('/')">
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
</template>
