<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();
const authToken = useCookie('authToken');

const login = () => {
  if (username.value === 'admin' && password.value === 'password') {
    alert('Logged in successfully');
    authToken.value = 'tokenValue';
    router.push('/admin/create-post');
  } else {
    alert('Invalid credentials');
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>