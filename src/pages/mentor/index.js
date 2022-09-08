import React from 'react';
import './index.css';
import {Parallax} from 'react-parallax';
import imagen from './john-schnobrich-FlPc9_VocJ4-unsplash.jpg';

export const Mentor = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Parallax
        bgImage={imagen}
        strength={200}
        renderLayer={precentage => (
          <div
            style={{
              position: 'absolute',
              width: '40px',
              height: '15px',
              borderRadius: '10%',
              background: `rgba(255, 255, 255, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 3})`,
            }}></div>
        )}>
        <div style={{height: 500}}></div>
      </Parallax>
      <div style={{height: '1vh'}}></div>
      <h1>| | |</h1>
    </div>
  );
};
