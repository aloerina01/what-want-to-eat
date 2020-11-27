import { atom, AtomEffect } from 'recoil';
import { IChoosedFoodItemId } from '../models/IChoosedFoodItemId';
import { choosedFoodItemIdsRepo } from '../repositories/choosedFoodItemIdsRepo';
import { getToday } from '../utils/date';

const syncStorageEffect: AtomEffect<IChoosedFoodItemId[]> = ({ setSelf }) => {
  choosedFoodItemIdsRepo.ref_HACK.where('date', '==', getToday()).onSnapshot((snapshot) => {
    setSelf(
      snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          userId: doc.data().userId,
          date: doc.data().date,
          itemIds: doc.data().itemIds,
        };
      })
    );
  });
};

export const choosedFoodItemIdsState = atom<IChoosedFoodItemId[]>({
  key: 'choosedFoodItemsState',
  default: choosedFoodItemIdsRepo.get(getToday()),
  effects_UNSTABLE: [syncStorageEffect],
});
