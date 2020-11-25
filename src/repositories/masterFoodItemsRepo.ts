import { DB } from '../firebase';
import { IFoodItem } from '../models/IFoodItem';

const masterFoodItemsRef = DB.collection('masterFoodItems');

export interface IMasterFoodItemsRepo {
  getAll: () => Promise<IFoodItem[]>;
  add: (foodItem: IFoodItem) => Promise<void>;
}

export const masterFoodItemsRepo: IMasterFoodItemsRepo = {
  getAll: async () => {
    const snapshot = await masterFoodItemsRef.orderBy('order', 'asc').get();
    return snapshot.docs.map((queryDocumentSnapshot) => {
      return {
        id: queryDocumentSnapshot.id,
        name: queryDocumentSnapshot.data().name,
        icon: queryDocumentSnapshot.data().icon,
        image: queryDocumentSnapshot.data().image,
      };
    });
  },
  add: (foodItem) => {
    return masterFoodItemsRef.doc().set(foodItem);
  },
};
