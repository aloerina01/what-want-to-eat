import { selector } from 'recoil';
import { masterFoodItemsState, choosedFoodItemIdsState } from '.';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';
import { getDecodedIDToken } from '../liff';

const token = getDecodedIDToken();

/**
 * masterFoodItemsStateとchoosedFoodItemIdsStateを突き合わせて、「選択中か否か」の情報をもたせたもの
 */
export const currentFoodItemsState = selector<ICurrentFoodItem[]>({
  key: 'currentFoodItemsState',
  get: ({ get }) =>
    get(masterFoodItemsState).map((item) => {
      const myChoosedItemId = get(choosedFoodItemIdsState).find(
        (each) => each.userId === token?.sub
      );
      if (myChoosedItemId) {
        return { ...item, choosed: myChoosedItemId.itemIds.includes(item.id) };
      }
      return { ...item, choosed: false };
    }),
});
