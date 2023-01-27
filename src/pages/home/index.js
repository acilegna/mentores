import React, {useEffect, useState} from 'react';
import './index.css';
import {Parallax} from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen from './developer-coding-on-laptop.jpg';
import Typewriter from 'typewriter-effect';

import Button from 'react-bootstrap/Button';

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}
export const Home = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  /*para boton*/

  return (
    <div style={{textAlign: 'center'}}>
      <Parallax bgImage={imagen} strength={200}>
        <div className="cont-mentor" style={{height: 400}}>
          <Container fluid>
            <Row>
              <Col>
                <h2 id="mentor">
                  INCREMENTA TU{' '}
                  <strong id="span">
                    <Typewriter
                      options={{
                        strings: ['CONOCIMIENTO.', 'POTENCIAL.'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </strong>{' '}
                </h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 id="help">Encuentra aquí tu mentor</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  id="btns-primary"
                  size="sm"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}>
                  {isLoading ? 'CARGANDO…' : 'VER MENTORES'}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
      <div style={{height: '30vh'}}></div>
      <h1>| | |</h1>
    </div>
  );
};
