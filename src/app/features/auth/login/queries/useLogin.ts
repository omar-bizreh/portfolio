import useAccountStore from '@/infra/store/account';
import { useQuery } from 'vue-query';

const useLogin = (username: string) => {
  return useQuery('login', () => username, {
    onSuccess: () => {
      const accountStore = useAccountStore();
      accountStore.userName = username;
    },
  });
};

export default useLogin;
