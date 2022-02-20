<template>
  <div id="nav">
    <TabMenu />
  </div>
  <router-view v-if="isGuest" name="guest" />
  <router-view v-else name="user" />
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import useAccountStore from "./infra/store/account";
import { storeToRefs } from "pinia";
import TabMenu from "@/app/components/tabMenu/TabMenu.vue";

export default defineComponent({
  setup() {
    const accountStore = useAccountStore();
    const { userName } = storeToRefs(accountStore);
    return {
      isGuest: computed(() => userName !== undefined),
    };
  },
  components: {
    TabMenu,
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
