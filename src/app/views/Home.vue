<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/app/components/HelloWorld.vue";
export default defineComponent({
  name: "Home",
  data() {
    return { checked: true };
  },
  components: {
    HelloWorld,
  },
});
</script>
