import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
import { currentFoodItemsState } from '../states';
import { ChooseProgress } from '../components/ChooseProgress';
import { FoodItem } from '../components/FoodItem';
import { RemindButtons } from '../components/RemindButtons';
import { IChoosedFoodItemId } from '../models/IChoosedFoodItemId';
import { choosedFoodItemIdsState } from '../states';

export const ChoosedResultPage: React.FC = () => {
  const foodItems = useRecoilValue(currentFoodItemsState);
  const choosedFoodItemIds = useRecoilValue(choosedFoodItemIdsState);
  const itemIdMapByUser: { [key: string]: IChoosedFoodItemId[] } = {};
  choosedFoodItemIds.forEach((foodItemId) => {
    if (itemIdMapByUser[foodItemId.userId]) {
      itemIdMapByUser[foodItemId.userId].push(foodItemId);
    } else {
      itemIdMapByUser[foodItemId.userId] = [foodItemId];
    }
    return itemIdMapByUser;
  });
  const current = Object.keys(itemIdMapByUser).length;
  const max = 2; // 決め打ち
  return (
    <motion.section
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: 100,
        opacity: 0,
      }}
      exit={{
        y: -100,
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <ChooseProgress current={current} max={max} />
      <ul style={{ margin: '40px 16px 0 16px' }}>
        {foodItems
          .filter((foodItem) => foodItem.choosed)
          .map((foodItem, index) => (
            <FoodItem key={`${index}_choosedItem`} foodItem={foodItem} />
          ))}
      </ul>
      <RemindButtons isAllAnswered={current >= max} />
    </motion.section>
  );
};
