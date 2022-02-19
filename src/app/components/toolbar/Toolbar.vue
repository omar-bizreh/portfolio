<template>
  <Menubar>
    <template #start>
      <img
        alt="logo"
        src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
        height="40"
        class="mr-2"
      />
    </template>
  </Menubar>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import Menubar from "primevue/menubar";

export default defineComponent({
  components: {
    Menubar,
  },
});
</script>
