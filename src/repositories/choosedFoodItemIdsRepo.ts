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
    const snapshot = await choosedFoodItemIdsRef.where('date', '==', date).get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      userId: doc.data().userId,
      date: doc.data().date,
      itemIds: doc.data().itemIds,
    }));
  },
};
