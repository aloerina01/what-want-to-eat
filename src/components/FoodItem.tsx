import React from 'react';
import { IFoodItem } from '../models/IFoodItem';

export type FoodItemProps = {
  foodItem: IFoodItem;
  onClickFoodItem?: (itemId: string) => void;
};

export const liStyle: React.CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'column',
  width: '26%',
  margin: '12px 3.6%',
};

export const itemImageAreaStyle: React.CSSProperties = {
  width: '100%',
  paddingTop: '100%',
  position: 'relative',
  borderRadius: '50%',
  border: '1px solid #eee',
  transition: 'all .2s ease',
};

export const itemImageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  position: 'absolute',
  top: '0',
  borderRadius: '50%',
};

export const itemIconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '0',
  textAlign: 'center',
  width: '100%',
  margin: '0',
  transform: 'translateY(-50%)',
  fontSize: '40px',
};

export const itemLabelStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#333',
  fontSize: '0.85rem',
  paddingTop: '4px',
};

export const FoodItem: React.FC<FoodItemProps> = ({ foodItem, onClickFoodItem }) => {
  return (
    <li style={liStyle} onClick={() => onClickFoodItem && onClickFoodItem(foodItem.id)}>
      <div className="item-image-area" style={itemImageAreaStyle}>
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
