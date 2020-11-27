import React from 'react';

const HeaderWrapperStyle = {
  height: '48px',
  width: '100%',
  backgroundColor: '#fff',
  color: '#333',
  borderBottom: '1px solid #e8e8e8',
  position: 'relative',
};
const HeaderTitleStyle = {
  fontSize: '1rem',
  fontWeight: 800,
  padding: '13px 24px',
};

const ProfileIconWrapperStyle: React.CSSProperties = {
  display: 'inline-block',
  position: 'absolute',
  right: '24px',
  top: '6px',
};

const ProfileIconImageStyle: React.CSSProperties = {
  width: '36px',
  height: 'auto',
  backgroundSize: 'contain',
  borderRadius: '50%',
  border: '1px solid #e8e8e8',
};

export type PageHeaderProps = {
  title: string;
  userIconImage?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, userIconImage }) => {
  return (
    <div style={HeaderWrapperStyle}>
      <p style={HeaderTitleStyle}>{title}</p>
      {userIconImage ? (
        <p style={ProfileIconWrapperStyle}>
          <img style={ProfileIconImageStyle} src={userIconImage} />
        </p>
      ) : null}
    </div>
  );
};
