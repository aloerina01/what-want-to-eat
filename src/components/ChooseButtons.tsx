import React from 'react';
import { useRecoilState } from 'recoil';
import { masterFoodItemsState } from '../states';
import { useSubmissionWantToEat } from '../hooks/useSubmissionWantToEat';
import { useRecoilValue } from 'recoil';

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

// type ChooseButtonsProps = {
//   onClickWantToEat: () => void;
// };

export const ChooseButtons: React.FC = () => {
  const submitWantToEat = useSubmissionWantToEat();
  return (
    <div style={ButtonsAreaStyle}>
      <button
        onClick={submitWantToEat}
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
