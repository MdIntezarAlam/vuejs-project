<template>
  <div class="container">
    <div class="signup">
      <div class="d_flex">
        <img src="../assets/logo.png" alt="" /><span>Login</span>
      </div>
      <input
        type="text"
        v-model="initailValue.email"
        placeholder="Enter email"
      />
      <input
        type="text"
        v-model="initailValue.password"
        placeholder="Enter Password"
      />

      <button v-on:click="formSubmit" type="button">Login</button>
      <span>Don't Have an Account <a href="/signup">Signup</a></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeLogin",
  data() {
    return {
      initailValue: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async formSubmit() {
      let res = await axios.get(
        `http://localhost:3000/users?email=${this.initailValue.email}&password=${this.initailValue.password}`
      );

      if (res.status === 200 && res.data.length > 0) {
        localStorage.setItem("user-details", JSON.stringify(res.data[0]));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  // check user is already logined
  mounted() {
    let user = localStorage.getItem("user-details");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
