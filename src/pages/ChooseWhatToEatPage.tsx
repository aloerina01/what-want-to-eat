import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { currentFoodItemsState } from '../states';
import { FoodItemsList } from '../components/FoodItemsList';
import { ChooseButtons } from '../components/ChooseButtons';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';

export const ChooseWhatToEatPage: React.FC = () => {
  // prepare initialize value
  const myChoosedFoodItemsFromDB = useRecoilValue(currentFoodItemsState);
  // prepare localState (viewState)
  const [myChoosedFoodItems, setMyChoosedFoodItems] = useState(myChoosedFoodItemsFromDB);
  // define event handlers
  const onClickFoodItem = (item: ICurrentFoodItem) => {
    setMyChoosedFoodItems((prevState) => {
      const targetIndex = prevState.indexOf(item);
      const updateItem = { ...prevState[targetIndex] };
      updateItem.choosed = !updateItem.choosed;
      return [...prevState.slice(0, targetIndex), updateItem, ...prevState.slice(targetIndex + 1)];
    });
  };

  return (
    <div>
      <FoodItemsList foodItems={myChoosedFoodItems} onClickFoodItem={onClickFoodItem} />
      <ChooseButtons myChoosedFoodItems={myChoosedFoodItems} />
    </div>
  );
};
