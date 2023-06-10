<template>
  <div class="container">
    <div class="signup">
      <div class="d_flex">
        <img src="../assets/logo.png" alt="" /><span>Signup</span>
      </div>
      <input
        type="text"
        v-model="initailValue.username"
        placeholder="Enter Name"
      />
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
      <input
        type="text"
        v-model="initailValue.phone"
        placeholder="Enter Phone"
      />
      <button v-on:click="formSubmit" type="button">Signup</button>
      <span>Already Have an Account <a href="/login">Login</a></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeSignup",
  data() {
    return {
      initailValue: {
        username: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    async formSubmit() {
      // if (this.initailValue.username === "") {
      //   return alert("enter Name");
      // } else if (this.initailValue.email === "") {
      //   return alert("enter Email Address");
      // } else if (this.initailValue.password === "") {
      //   return alert("enter password");
      // } else if (this.initailValue.phone === "") {
      //   return alert("enter phone");
      // } else {
      let res = await axios.post("http://localhost:3000/users", {
        username: this.initailValue.username,
        email: this.initailValue.email,
        password: this.initailValue.password,
        phone: this.initailValue.phone,
      });
      console.log(res);
      if (res.status == 201) {
        alert("user signup successfully");
        localStorage.setItem("user-details", JSON.stringify(res.data));
        setTimeout(() => {
          this.$router.push({ name: "HomeLogin" });
        }, 2000);
      }
      // }
    },
  },
  // check user is already signup
  mounted() {
    let user = localStorage.getItem("user-details");
    if (user) {
      this.$router.push({ name: "HomeLogin" });
    }
  },
};
</script>
<style>
.container {
  height: 100vh;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signup {
  width: 410px;
  min-height: 410px;
  padding: 20px;
  background-color: #505050;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.d_flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff;
  font-size: 22px;
}
.d_flex > img {
  width: 80px;
  height: 80px;
}

.signup > input {
  width: 90%;
  outline: none;
  border-style: 0;
  border: 1px solid #212121;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
}
.signup > button {
  width: 95%;
  background-color: #000;
  color: #fff;
  border-style: none;
  outline: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 19px;
  cursor: pointer;
  outline: none;
}
.signup > button:hover {
  color: #000;
  background-color: aqua;
}
.signup > span {
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  padding-top: 10px;
}
.signup > span > a {
  font-size: 18px;
  color: #fff;
}
</style>
