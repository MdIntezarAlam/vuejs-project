<template>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias rerum
    cumque qui accusantium tempora voluptatum assumenda. Id sunt repellat vitae
    atque consequatur enndis quis deserunt, adipisci alias rem.
    Voluptas architecto minima id deserunt vitae distinctio!
  </div>
</template>

<script>
export default {
  name: "HomePage",
  //check if user signup nahi hai tho signup ke leye bhejo
  mounted() {
    let user = localStorage.getItem("user-details");
    if (!user) {
      this.$router.push({ name: "HomeSignup" });
    }
  },
};
</script>
