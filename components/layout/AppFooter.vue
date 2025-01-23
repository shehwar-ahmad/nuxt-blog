<template>
  <footer
    class="bg-[#F9F9F9] border-t-[#6A6A6A1A] border-t border-solid py-4 mt-10 min-h-[254px] flex items-center justify-center"
  >
    <div class="w-full max-w-[1280px] mx-auto px-[20px]">
      <div
        class="flex flex-row gap-5 justify-between flex-wrap text-sm font-normal leading-[19.6px] tracking-[0.0025em] text-[#222222]"
      >
        <div class="flex flex-col flex-wrap gap-6">
          <NuxtImg src="/images/Brand.svg" width="107" height="50" />

          <div class="flex flex-row gap-4 items-center flex-wrap">
            <p>About Us</p>
            <p>Corporate Events</p>
            <p>Personal Events</p>
            <p>List Your Service</p>
            <p>How it Works</p>
          </div>
        </div>

        <div>
          <p class="font-semibold mb-2">Contacts</p>

          <div class="flex flex-row gap-1 mb-1 items-center">
            <NuxtImg src="/images/email.svg" width="20" height="20" />
            <p>contact@eventsinminutes.com</p>
          </div>
          <div class="flex flex-row gap-1 items-center">
            <NuxtImg src="/images/call.svg" width="20" height="20" />
            <p>+1 (628) 587-3235</p>
          </div>
        </div>
      </div>

      <hr class="border-t-[#6A6A6A1A] my-6" />

      <div
        class="flex flex-row gap-2 justify-between flex-wrap text-[#222222B2] text-xs font-normal leading-[19.2px] tracking-[0.004em]"
      >
        <div class="flex flex-row items-center gap-1">
          <p>Privacy Policy</p>
          <span>&#8226;</span>
          <p>Terms & Conditions</p>
        </div>
        <p>2024 - © All rights Reserved - Events In Minutes</p>
      </div>
    </div>
  </footer>
</template>
