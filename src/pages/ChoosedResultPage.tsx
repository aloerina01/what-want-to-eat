import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentFoodItemsState } from '../states';
import { PageHeader } from '../components/PageHeader';
import { FoodItem } from '../components/FoodItem';

export const ChoosedResultPage: React.FC = () => {
  const foodItems = useRecoilValue(currentFoodItemsState);
  return (
    <div>
      <PageHeader title="何食べたい？" />
      <ul>
        {foodItems
          .filter((foodItem) => foodItem.choosed)
          .map((foodItem, index) => (
            <FoodItem key={`${index}_choosedItem`} foodItem={foodItem} />
          ))}
      </ul>
    </div>
  );
};
