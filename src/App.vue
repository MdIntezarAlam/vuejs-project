<template>
  <HomeHeader />
</template>
<script>
import HomePage from "./components/HomePage.vue";
import HomeHeader from "./components/HomeHeader.vue";
export default {
  name: "App",
  components: {
    HomePage,
    HomeHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.navbar {
  width: 100%;
  display: flex;
  background-color: #000;
  overflow: hidden;
}
.navbar > a {
  width: 10%;
  color: #fff;
  text-decoration: none;
  font-size: 25px;
  padding: 20px;
}
</style>
