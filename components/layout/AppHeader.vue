<template>
  <header>
    <div
      class="flex flex-row justify-center sm:justify-between gap-3 py-2 flex-wrap items-center max-w-[1280px] mx-auto min-h-[82px] px-[20px]"
    >
      <div class="cursor-pointer" @click="$router.push('/')">
        <NuxtImg src="/images/Brand.svg" width="107" height="50" />
      </div>
      <div class="flex flex-row gap-4 items-center flex-wrap">
        <p class="text-sm font-semibold leading-[19.6px] tracking-[0.001em]">
          Top Vendors, Apply Now!
        </p>
        <NuxtImg src="/images/header-user.svg" width="100" height="44" />
        <p class="text-sm cursor-pointer" @click="handleAuth">
          {{ user ? "Logout" : "Login" }}
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const { user } = storeToRefs(userStore);

const handleAuth = () => {
  if (user.value) {
    userStore.logoutUser();
  } else {
    router.push("/login");
  }
};
</script>
