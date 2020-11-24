import { selector } from 'recoil';
import { masterFoodItemsState, choosedFoodItemIdsState } from '.';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';

/**
 * masterFoodItemsStateとchoosedFoodItemIdsStateを突き合わせて、「選択中か否か」の情報をもたせたもの
 */
export const currentFoodItemsState = selector<ICurrentFoodItem[]>({
  key: 'currentFoodItemsState',
  get: ({ get }) =>
    get(masterFoodItemsState).map((item) => {
      return { ...item, choosed: get(choosedFoodItemIdsState).includes(item.id) };
    }),
});
