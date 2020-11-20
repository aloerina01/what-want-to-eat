import React from 'react';

const HeaderWrapperStyle = {
  height: '52px',
  width: '100%',
  backgroundColor: '#4CAF50',
  color: '#fff',
  textAlign: 'center',
};
const HeaderTitleStyle = {
  fontSize: '1.2rem',
  padding: '11px',
};

export type PageHeaderProps = {
  title: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <div style={HeaderWrapperStyle}>
      <p style={HeaderTitleStyle}>{title}</p>
    </div>
  );
};
