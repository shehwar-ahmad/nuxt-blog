// filepath: /home/shehwar/projects/nuxt-blog/pages/index.vue
<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <p>This is the landing page of the website.</p>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/post/1">Post 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/category/technology">Technology</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
// You can add your script here if needed
</script>

<style scoped>
/* Add your styles here */
h1 {
  color: #333;
}
</style>