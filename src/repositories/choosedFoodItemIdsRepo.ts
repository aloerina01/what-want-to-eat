import { DB } from '../firebase';
import { IChoosedFoodItemId } from '../models/IChoosedFoodItemId';

const choosedFoodItemIdsRef = DB.collection('choosedFoodItemIds');

export interface IChoosedFoodItemIdsRepo {
  add: (data: IChoosedFoodItemId) => Promise<void>;
  get: (date: string) => Promise<IChoosedFoodItemId[]>;
}

export const choosedFoodItemIdsRepo: IChoosedFoodItemIdsRepo = {
  add: (data) => {
    return choosedFoodItemIdsRef.doc(data.id).set(data);
  },
  get: async (date) => {
    const choosedFoodItemIds: IChoosedFoodItemId[] = [];
    await choosedFoodItemIdsRef.where('date', '==', date).onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        choosedFoodItemIds.push({
          id: doc.id,
          userId: doc.data().userId,
          date: doc.data().date,
          itemIds: doc.data().itemIds,
        });
      });
    });
    return choosedFoodItemIds;
  },
};
