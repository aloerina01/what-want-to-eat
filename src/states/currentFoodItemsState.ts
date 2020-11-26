import { selector } from 'recoil';
import { masterFoodItemsState, choosedFoodItemIdsState, userState } from '.';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';

/**
 * masterFoodItemsStateとchoosedFoodItemIdsStateを突き合わせて、「選択中か否か」の情報をもたせたもの
 */
export const currentFoodItemsState = selector<ICurrentFoodItem[]>({
  key: 'currentFoodItemsState',
  get: async ({ get }) => {
    const user = get(userState);
    const IDToken = await user.IDToken;
    const choosedFoodItemIds = get(choosedFoodItemIdsState);
    const myChoosedFoodItemId = choosedFoodItemIds.find((each) => each.userId === IDToken);
    return get(masterFoodItemsState).map((item) => ({
      ...item,
      choosed: myChoosedFoodItemId ? myChoosedFoodItemId.itemIds.includes(item.id) : false,
    }));
  },
});
