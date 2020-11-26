import { atom } from 'recoil';
import { getDecodedIDToken, getIDToken } from '../liff';

export const userState = atom({
  key: 'userState',
  default: {
    decodedIDToken: getDecodedIDToken(),
    IDToken: getIDToken(),
  },
});
