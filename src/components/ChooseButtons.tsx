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
          background:
            'linear-gradient(90deg, rgba(114,255,169,1) 0%, rgba(47,233,160,1) 0%, rgba(0,135,147,1) 100%)',
          color: '#fff',
          marginRight: '10px',
          padding: '17px 25px',
        }}
      >
        食べたい！
      </button>
      <button
        style={{ ...ButtonStyle, border: '2px solid #999', color: '#555', padding: '16px 24px' }}
      >
        不要！
      </button>
    </div>
  );
};
