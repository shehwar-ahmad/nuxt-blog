<template>
  <div class="w-full">
    <HeroSection class="my-[40px] md:my-[80px]" />
    <hr />

    <div class="w-full flex flex-col gap-10 mt-10">
      <p class="text-2xl font-bold leading-[33.6px] text-[#222222]">
        Popular Articles
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <BlogCard
          v-for="article in articles"
          :key="article.id"
          :date="article.date"
          :title="article.title"
          :description="article.description"
          :imageUrl="article.imageUrl"
        />
      </div>

      <AppButton variant="secondary">View More</AppButton>
    </div>
  </div>
</template>

<script setup>
import HeroSection from "~/components/blog/HeroSection.vue";
import BlogCard from "~/components/blog/BlogCard.vue";
import AppButton from "~/components/base/AppButton.vue";

const articles = ref([
  {
    id: 1,
    date: "2025-01-01",
    title: "Top Trends in Corporate Event Design and Engagement",
    description: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
    imageUrl: "/images/blogs/blog1.png",
  },
  {
    id: 2,
    date: "2025-01-02",
    title: "Consectetur adipiscing elit",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/blogs/blog1.png",
  },
  {
    id: 3,
    date: "2025-01-03",
    title: "Sed do eiusmod tempor incididunt",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/blogs/blog1.png",
  },
]);
</script>

<style scoped></style>
