import { atom } from 'recoil';

export const choosedFoodItemIdsState = atom<string[]>({
  key: 'choosedFoodItemsState',
  default: [],
});
