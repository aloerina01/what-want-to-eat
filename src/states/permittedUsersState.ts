import { atom } from 'recoil';
import { permittedUsersRepo } from '../repositories/permittedUsersPepo';

export const permittedUsersState = atom<string[]>({
  key: 'permittedUsersState',
  default: permittedUsersRepo.getAll(),
});
