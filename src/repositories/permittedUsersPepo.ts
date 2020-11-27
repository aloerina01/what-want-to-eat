import { DB } from '../firebase';

const permittedUsersRef = DB.collection('permittedUsers');

export interface IPermittedUsersRepo {
  getAll: () => Promise<string[]>;
}

export const permittedUsersRepo: IPermittedUsersRepo = {
  getAll: async () => {
    const snapshot = await permittedUsersRef.get();
    return snapshot.docs.map((each) => each.data().userId);
  },
};
