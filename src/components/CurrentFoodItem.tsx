import React from 'react';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';
import {
  liStyle,
  itemImageAreaStyle,
  itemImageStyle,
  itemIconStyle,
  itemLabelStyle,
} from './FoodItem';

export type CurrentFoodItemProps = {
  foodItem: ICurrentFoodItem;
  onClickFoodItem?: (itemId: string) => void;
};

export const CurrentFoodItem: React.FC<CurrentFoodItemProps> = ({ foodItem, onClickFoodItem }) => {
  const choosedImageAreaStyle = {
    ...itemImageAreaStyle,
    backgroundColor: foodItem.choosed ? '#C8E6C9' : '#fff',
    borderColor: foodItem.choosed ? '#C8E6C9' : '#eee',
  };
  return (
    <li style={liStyle} onClick={() => onClickFoodItem && onClickFoodItem(foodItem.id)}>
      <div className="item-image-area" style={choosedImageAreaStyle}>
        {foodItem.image ? (
          <img src={foodItem.image} alt={foodItem.name} style={itemImageStyle} />
        ) : (
          <p style={itemIconStyle}>{foodItem.icon}</p>
        )}
      </div>
      <div className="item-label" style={itemLabelStyle}>
        {foodItem.name}
      </div>
    </li>
  );
};
