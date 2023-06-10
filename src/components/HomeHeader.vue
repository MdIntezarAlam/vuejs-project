<template>
  <div class="navbar">
    <a href="/">Vue Js Project</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/signup">Signup</a>
    <a href="/login">Login</a>
    <a href="/logout" v-on:click="logout">Logout</a>
  </div>
  <router-view />
</template>
<script>
export default {
  name: "HomeHeader",
  methods: {
    logout() {
      localStorage.clear("user-details");
      this.$router.push({ name: "HomeLogin" });
    },
  },
};
</script>
