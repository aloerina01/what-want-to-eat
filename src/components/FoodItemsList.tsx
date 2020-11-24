import React from 'react';
import { IFoodItem } from '../models/IFoodItem';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';
import { FoodItem } from './FoodItem';
import { CurrentFoodItem } from './CurrentFoodItem';

export type FoodItemsListProps = {
  foodItems: ICurrentFoodItem[];
  onClickFoodItem: (itemId: string) => void;
};

const ulStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  height: 'calc(100vh - 152px)', // header 52px, footer 100px
  overflowY: 'scroll',
  padding: '8px',
};

export const FoodItemsList: React.FC<FoodItemsListProps> = ({ foodItems, onClickFoodItem }) => {
  return (
    <div className="choose-food-item-wrapper">
      <ul style={ulStyle}>
        {foodItems.map((item, index) => (
          <CurrentFoodItem
            key={`${index}_foodItem`}
            foodItem={item}
            onClickFoodItem={onClickFoodItem}
          />
        ))}
        <FoodItem
          foodItem={{ id: '-1', name: '追加', icon: '+' } as IFoodItem}
          onClickFoodItem={() => {}}
        />
      </ul>
    </div>
  );
};
