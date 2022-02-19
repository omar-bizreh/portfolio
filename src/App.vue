<template>
  <Toolbar />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "@/app/components/toolbar/Toolbar.vue";

export default defineComponent({
  components: {
    Toolbar,
  },
});
</script>

<style>
body {
  background-color: var(--surface-ground);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: var(--teal-500);
}

a.router-link-exact-active {
  color: var(--teal-600);
}
</style>
