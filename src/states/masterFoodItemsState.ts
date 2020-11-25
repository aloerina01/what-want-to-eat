import { atom } from 'recoil';
import { IFoodItem } from '../models/IFoodItem';
import { masterFoodItemsRepo } from '../repositories/masterFoodItemsRepo';

export const masterFoodItemsState = atom<IFoodItem[]>({
  key: 'masterFoodItemsStateState',
  default: masterFoodItemsRepo.getAll(),
});
