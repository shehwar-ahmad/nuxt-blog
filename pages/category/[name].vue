<template>
    <div>
      <h1>Category: {{ categoryName }}</h1>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const categoryName = route.params.name;
  </script>