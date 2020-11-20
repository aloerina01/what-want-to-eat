import React from 'react';
import { CurrentFoodItem } from '../states';

export type FoodItemsListProps = {
  foodItems: CurrentFoodItem[];
  onClickFoodItem: (itemId: string) => void;
};

const ulStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  height: 'calc(100vh - 100px)',
  overflowY: 'scroll',
};

const liStyle: React.CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'column',
  width: '26%',
  margin: '12px 3%',
};

const itemImageAreaStyle: React.CSSProperties = {
  width: '100%',
  paddingTop: '100%',
  position: 'relative',
  borderRadius: '50%',
  border: '1px solid #e8e8e8',
};

const itemImageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  position: 'absolute',
  top: '0',
  borderRadius: '50%',
};

const itemIconStyle: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '0',
  textAlign: 'center',
  width: '100%',
  margin: '0',
  transform: 'translateY(-50%)',
  fontSize: '40px',
};

const itemLabelStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#333',
};

export const FoodItemsList: React.FC<FoodItemsListProps> = ({ foodItems, onClickFoodItem }) => {
  return (
    <div className="choose-food-item-wrapper">
      <ul style={ulStyle}>
        {foodItems.map((item, index) => {
          const choosedImageAreaStyle = {
            ...itemImageAreaStyle,
            backgroundColor: item.choosed ? '#f2fde4' : '#fff',
          };
          return (
            <li key={`${index}_foodItem`} style={liStyle} onClick={() => onClickFoodItem(item.id)}>
              <div className="item-image-area" style={choosedImageAreaStyle}>
                {item.image ? (
                  <img src={item.image} alt={item.name} style={itemImageStyle} />
                ) : (
                  <p style={itemIconStyle}>{item.icon}</p>
                )}
              </div>
              <div className="item-label" style={itemLabelStyle}>
                {item.name}
              </div>
            </li>
          );
        })}
        <li style={liStyle}>
          <div className="item-image-area" style={itemImageAreaStyle}>
            <p style={itemIconStyle}>➕</p>
          </div>
          <div className="item-label" style={itemLabelStyle}>
            追加
          </div>
        </li>
      </ul>
    </div>
  );
};
