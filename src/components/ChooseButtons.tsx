import React from 'react';

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

export const ChooseButtons: React.FC = () => (
  <div style={ButtonsAreaStyle}>
    <button
      style={{
        ...ButtonStyle,
        border: '2px solid #00e676',
        backgroundColor: '#00e676',
        marginRight: '10px',
      }}
    >
      食べたい！
    </button>
    <button style={{ ...ButtonStyle, border: '2px solid #00e676' }}>不要！</button>
  </div>
);
