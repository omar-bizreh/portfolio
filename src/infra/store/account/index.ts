import { defineStore } from 'pinia';
import IAccountState from './contracts/IAccountState';
import IAccountStoreGetters from './contracts/IAccountStoreGetters';

const useAccountStore = defineStore<
  string,
  IAccountState,
  IAccountStoreGetters,
  IAccountStoreActions
>('accountStore', {
  state: () => {
    return { userName: undefined };
  },
  getters: {
    isLoggedIn: (state) => state.userName !== undefined,
  },
  actions: {
    login(username) {
      this.userName = username;
    },
    logout() {
      this.$reset();
    },
  },
});
