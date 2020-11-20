import { atom } from 'recoil';

export type FoodItem = {
  id: string;
  name: string;
  icon?: string;
  image?: string;
};

export const masterFoodItemsState = atom<FoodItem[]>({
  key: 'masterFoodItemsStateState',
  default: [
    { id: '1', name: '肉', icon: '🍖' },
    { id: '2', name: '魚', icon: '🐟' },
    { id: '3', name: '鶏', icon: '🐓' },
    { id: '4', name: '卵', icon: '🍳' },
    { id: '5', name: '麺', icon: '🍜' },
    { id: '6', name: '米', icon: '🍚' },
    { id: '7', name: 'ハンバーガー', icon: '🍔' },
    { id: '8', name: '鍋', icon: '🍲' },
    { id: '9', name: '野菜', icon: '🥗' },
    { id: '10', name: 'ガッツリ', icon: '💪' },
    { id: '11', name: 'サッパリ', icon: '🤏' },
    { id: '12', name: '外食', icon: '🍽' },
    { id: '13', name: 'UberEats', image: './assets/logo/ue.png' },
    { id: '14', name: 'おまかせ', icon: '❓' },
    { id: '15', name: '寿司', icon: '🍣' },
  ],
});
