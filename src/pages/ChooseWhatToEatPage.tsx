import React from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { choosedFoodItemIdsState, currentFoodItemsState } from '../states';
import { PageHeader } from '../components/PageHeader';
import { FoodItemsList } from '../components/FoodItemsList';
import { ChooseButtons } from '../components/ChooseButtons';

export const ChooseWhatToEatPage: React.FC = () => {
  const foodItems = useRecoilValue(currentFoodItemsState);
  const setChoosedFoodItemIds = useSetRecoilState(choosedFoodItemIdsState);
  const onClickFoodItem = (itemId: string) => {
    setChoosedFoodItemIds((prevState) => {
      if (prevState.includes(itemId)) {
        return prevState.filter((each) => each !== itemId);
      }
      return [...prevState, itemId];
    });
  };
  return (
    <div>
      <FoodItemsList foodItems={foodItems} onClickFoodItem={onClickFoodItem} />
      <ChooseButtons />
    </div>
  );
};
