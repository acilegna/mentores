import React from 'react';
import './index.css';
import {Parallax} from 'react-parallax';
import imagen from './developer-coding-on-laptop.jpg';

export const Home = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Parallax
        bgImage={imagen}
        strength={200}
        renderLayer={precentage => (
          <div
            style={{
              position: 'absolute',
              width: '100px',
              height: '30px',
              borderRadius: '10%',
              background: `rgba(255, 255, 255, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 3})`,
            }}>
            <a className="text-button-mentor" href=" ">
              Buscar
            </a>
          </div>
        )}>
        <div style={{height: 900}}>
          <h1 id="mentor">ENCUENTRA AQUI TU MENTOR</h1>
        </div>
      </Parallax>
      <div style={{height: '100vh'}}></div>
      <h1>| | |</h1>
    </div>
  );
};
