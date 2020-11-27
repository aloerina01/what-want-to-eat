import React from 'react';

const style: React.CSSProperties = {
  textAlign: 'center',
  display: 'flex',
  height: 'calc(100vh - 40px)',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#aaa',
  margin: '20px',
  border: '1px solid #ddd',
};
export const AdmissionLimitPage: React.FC = () => (
  <div style={style}>
    このアプリはα版のため
    <br />
    招待ユーザのみが利用できます
  </div>
);
