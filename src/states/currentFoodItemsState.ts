import { selector } from 'recoil';
import { masterFoodItemsState } from './masterFoodItemsState';
import { choosedFoodItemIdsState } from './choosedFoodItemIdsState';
import { userState } from './userState';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';

/**
 * masterFoodItemsStateとchoosedFoodItemIdsStateを突き合わせて、「選択中か否か」の情報をもたせたもの
 */
export const currentFoodItemsState = selector<ICurrentFoodItem[]>({
  key: 'currentFoodItemsState',
  get: async ({ get }) => {
    const choosedFoodItemIds = get(choosedFoodItemIdsState); // 今日、全てのユーザーによって選択されたFoodItemId
    const user = get(userState);
    const myChoosedFoodItemId = choosedFoodItemIds.find((each) => each.userId === user.userId);
    return get(masterFoodItemsState).map((item) => ({
      ...item,
      choosed: myChoosedFoodItemId ? myChoosedFoodItemId.itemIds.includes(item.id) : false,
    }));
  },
});
