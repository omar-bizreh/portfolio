import { _GettersTree } from 'pinia';
import IAccountState from './IAccountState';

interface IAccountStoreGetters extends _GettersTree<IAccountState> {
  isLoggedIn: (state: IAccountState) => boolean;
}

export default IAccountStoreGetters;
