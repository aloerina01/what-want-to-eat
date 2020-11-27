import { atom } from 'recoil';
import { getDecodedIDToken, getIDToken } from '../liff';

export const userState = atom({
  key: 'userState',
  default: Promise.all([getIDToken(), getDecodedIDToken()]),
});
