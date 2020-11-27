import React from 'react';
import { useHistory } from 'react-router-dom';


const ButtonsAreaStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  padding: '20px 0',
};

const ButtonStyle: React.CSSProperties = {
  padding: '16px 24px',
  borderRadius: '30px',
  width: '45%',
  fontWeight: 800,
};

export type RemindButtonsProps = {
  isAllAnswered: boolean
}


export const RemindButtons: React.FC<RemindButtonsProps> = ({ isAllAnswered }) => {
  if (isAllAnswered) {
    return null;
  }
  const history = useHistory();
  return (
    <div style={ButtonsAreaStyle}>
      <button
        onClick={() =>
          
        }
        style={{
          ...ButtonStyle,
          background: 'linear-gradient(90deg, rgba(114,255,169,1) 0%, rgba(47,233,160,1) 0%, rgba(0,135,147,1) 100%)',
          color: '#fff',
          marginBottom: '12px'
        }}
      >
        催促する
      </button>
      <button style={{ padding: '8px 24px', color: '#aaa' }} onClick={() => history.push('/')}>選び直す</button>
    </div>
  );
};
