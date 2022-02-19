<template>
  <div class="home">
    <InputText type="text" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <Checkbox v-model="checked" :binary="true" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Checkbox from "primevue/checkbox";

import InputText from "primevue/inputtext";
export default defineComponent({
  name: "Home",
  data() {
    return { checked: true };
  },
  components: {
    Checkbox,
    HelloWorld,
    InputText,
  },
});
</script>
