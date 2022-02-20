<template>
  <div class="home">
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
<style scoped>
.home {
  padding-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
}
</style>
