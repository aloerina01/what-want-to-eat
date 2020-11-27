import { atom } from 'recoil';
import { getProfile } from '../liff';

export const userState = atom({
  key: 'userState',
  default: getProfile(),
});
