<template>
  <div>
    <header>
      <h1>My Blog</h1>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/post/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/category/technology">Technology</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer>
      <p>&copy; 2023 My Blog</p>
    </footer>
  </div>
</template>

<style scoped>
header {
  background: #333;
  color: #fff;
  padding: 1rem;
}
nav ul {
  list-style: none;
  padding: 0;
}
nav li {
  display: inline;
  margin-right: 1rem;
}
footer {
  background: #333;
  color: #fff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 100%;
}
</style>