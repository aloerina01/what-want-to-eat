import { atom } from 'recoil';

export type FoodItem = {
  id: string;
  name: string;
  image: string;
};

export const masterFoodItemsState = atom<FoodItem[]>({
  key: 'foodItemsStateState',
  default: [
    { id: '1', name: '肉', image: '' },
    { id: '2', name: '魚', image: '' },
    { id: '3', name: '鶏', image: '' },
    { id: '4', name: '卵', image: '' },
    { id: '5', name: '麺', image: '' },
    { id: '6', name: '米', image: '' },
    { id: '7', name: 'パン', image: '' },
    { id: '8', name: '鍋', image: '' },
    { id: '9', name: '野菜', image: '' },
    { id: '10', name: 'ガッツリ', image: '' },
    { id: '11', name: 'サッパリ', image: '' },
    { id: '12', name: '外食', image: '' },
    { id: '13', name: 'UberEats', image: '' },
  ],
});
