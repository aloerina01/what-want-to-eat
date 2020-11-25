import React from 'react';
import { useSubmissionWantToEat } from '../hooks/useSubmissionWantToEat';
import { ICurrentFoodItem } from '../models/ICurrentFoodItem';

const ButtonsAreaStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '20px 0',
  position: 'fixed',
  bottom: 0,
  left: 0,
  boxShadow: '0 -1px 10px #e8e8e8',
};

const ButtonStyle: React.CSSProperties = {
  padding: '16px 24px',
  borderRadius: '30px',
  width: '45%',
  fontWeight: 800,
};

type ChooseButtonsProps = {
  myChoosedFoodItems: ICurrentFoodItem[];
};

export const ChooseButtons: React.FC<ChooseButtonsProps> = ({ myChoosedFoodItems }) => {
  const submitWantToEat = useSubmissionWantToEat();
  return (
    <div style={ButtonsAreaStyle}>
      <button
        onClick={() =>
          submitWantToEat(myChoosedFoodItems.filter((item) => item.choosed).map((item) => item.id))
        }
        style={{
          ...ButtonStyle,
          border: '2px solid #4CAF50',
          backgroundColor: '#4CAF50',
          color: '#fff',
          marginRight: '10px',
        }}
      >
        食べたい！
      </button>
      <button style={{ ...ButtonStyle, border: '2px solid #4CAF50' }}>不要！</button>
    </div>
  );
};
