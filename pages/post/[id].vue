<template>
    <div>
      <h1>Blog Post {{ postId }}</h1>
      <!-- Add your blog post content here -->
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const postId = route.params.id;
  </script>