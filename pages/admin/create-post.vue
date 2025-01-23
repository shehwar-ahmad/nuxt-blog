<template>
  <div class="flex-1 p-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Create Post</h1>
    <form @submit.prevent="createPost" class="space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Title:</label>
        <input
          type="text"
          v-model="title"
          id="title"
          required
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label for="content" class="block text-sm font-medium text-gray-700">Content:</label>
        <textarea
          v-model="content"
          id="content"
          required
          rows="10"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Create Post
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

definePageMeta({
  middleware: ["auth"],
});

const title = ref('');
const content = ref('');

const createPost = () => {
  // Handle post creation logic here
  console.log('Post created:', { title: title.value, content: content.value });
};
</script>

<style></style>
