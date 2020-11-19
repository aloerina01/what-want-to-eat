import React, { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { choosedFoodItemIdsState, currentFoodItemsState } from '../states';

export const ChooseWhatToEatPage: React.FC = () => {
  const foodItems = useRecoilValue(currentFoodItemsState);
  const setChoosedFoodItemIds = useSetRecoilState(choosedFoodItemIdsState);
  const onClickFoodItem = (id: string) => {
    setChoosedFoodItemIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((each) => each !== id);
      }
      return [...prevState, id];
    });
  };
  return (
    <div>
      <ul>
        {foodItems.map((item, index) => (
          <li key={`${index}_foodItem`}>
            <a onClick={() => onClickFoodItem(item.id)}>{`${item.name}(${item.choosed})`}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
