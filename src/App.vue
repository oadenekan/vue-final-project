<template>
  <NavBar />
  <main class="container-root">
    <router-view />
  </main>
  <FooterView />
</template>

<script>
import NavBar from "@/layout/Navbar.vue";
import FooterView from "@/layout/Footer.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    NavBar,
    FooterView,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
nav a.router-link-exact-active {
  background: #3b82f6;
  color: white;
}
</style>
