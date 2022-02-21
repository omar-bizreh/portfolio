<template>
  <Menubar style="padding: 10px" :model="items">
    <template #start>
      <img
        alt="logo"
        src="https://avatars.githubusercontent.com/u/84291195?s=96&v=4"
        height="40"
        style="margin-right: 20px; margin-left: 10px"
        class="mr-2 circle"
      />
    </template>
  </Menubar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Menubar from "primevue/menubar";

export default defineComponent({
  data() {
    return {
      items: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Projects", to: "/projects" },
      ],
    };
  },
  components: {
    Menubar,
  },
});
</script>

<style scoped>
.circle {
  border-radius: 25px;
}
</style>
