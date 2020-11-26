import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { currentFoodItemsState } from '../states';
import { FoodItem } from '../components/FoodItem';

export const ChoosedResultPage: React.FC = () => {
  const foodItems = useRecoilValue(currentFoodItemsState);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul>
        {foodItems
          .filter((foodItem) => foodItem.choosed)
          .map((foodItem, index) => (
            <FoodItem key={`${index}_choosedItem`} foodItem={foodItem} />
          ))}
      </ul>
    </Suspense>
  );
};
