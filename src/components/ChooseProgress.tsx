import React from 'react';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';


const wrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '28px auto 0 auto';
};

const iconStyle: React.CSSProperties = {
  fontSize: '80px',
};

const progressWrapperStyle: React.CSSProperties = {
  padding: '0 20vw',
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: '#ddd',
  textIndent: '200%',
  overflow: 'hidden',
  lineHeight: 0.8
}

const progressStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  textIndent: '100%',
  overflow: 'hidden',
  borderRadius: '8px',
  background: 'linear-gradient(90deg, rgba(114,255,169,1) 0%, rgba(44,210,145,1) 40%, rgba(0,135,147,1) 100%)'
}

const progressLabelStyle: React.CSSProperties = {
  display: 'flex',
  fontSize: '0.5rem',
  justifyContent: 'space-between',
  width: '75vw',
  color: '#333',
}

export type ChooseProgressProps = {
  current: number,
  max: number
}

export const ChooseProgress: React.FC<ChooseProgressProps> = ({ current, max}) => {
  const progress = (current / max) * 100;
  const isAllAnswered = current >= max;
  return (
    <div style={wrapperStyle}>
      {isAllAnswered ? (
        <div>
          <span>
            みんなの食べたいものが
            <br />
            決まりました！
          </span>
        </div>
      ) : (
        <div>食べたいものが決まりました！</div>
      )}

      <div style={iconStyle}>🎉</div>
      <div style={progressLabelStyle}>
        <div>回答率</div>
        <div>{`${current} / ${max} 人回答済み`}</div>
      </div>
      <div style={progressWrapperStyle}>
        progressWrapeer
        <motion.div initial={{width: '0%'}} transition={{ duration: 2 }} animate={{ width: `${progress}%`}} style={progressStyle}>progress</motion.div>
      </div>
    </div>
  );
};
