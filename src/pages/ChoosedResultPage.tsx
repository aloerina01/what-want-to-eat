import React, { Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { currentFoodItemsState } from '../states';
import { FoodItem } from '../components/FoodItem';
import { RemindButtons } from '../components/RemindButtons';
import { motion } from 'framer-motion';

export const ChoosedResultPage: React.FC = () => {
  const foodItems = useRecoilValue(currentFoodItemsState);
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
      <ul>
        {foodItems
          .filter((foodItem) => foodItem.choosed)
          .map((foodItem, index) => (
            <FoodItem key={`${index}_choosedItem`} foodItem={foodItem} />
          ))}
      </ul>
      <RemindButtons />
    </motion.section>
  );
};
