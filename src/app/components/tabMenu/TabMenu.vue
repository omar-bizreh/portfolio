<template>
  <TabMenu :model="items" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TabMenu from "primevue/tabmenu";

export default defineComponent({
  data() {
    return {
      items: [
        { label: "Home", to: "/", icon: "pi pi-fw pi-home" },
        {
          label: "My Work",
          to: "/projects",
          icon: "pi pi-fw pi-thumbs-up",
        },
        { label: "About", to: "/about", icon: "pi pi-fw pi-info-circle" },
      ],
    };
  },
  components: {
    TabMenu,
  },
});
</script>
