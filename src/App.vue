<template>
  <NavBar></NavBar>
  <RouterView />
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
}
</style>
