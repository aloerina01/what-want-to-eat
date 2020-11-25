import { atom } from 'recoil';
import { IChoosedFoodItemId } from '../models/IChoosedFoodItemId';
import { choosedFoodItemIdsRepo } from '../repositories/choosedFoodItemIdsRepo';
import { getToday } from '../utils/date';

export const choosedFoodItemIdsState = atom<IChoosedFoodItemId[]>({
  key: 'choosedFoodItemsState',
  default: choosedFoodItemIdsRepo.get(getToday()),
});
