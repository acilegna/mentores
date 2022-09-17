import React from 'react';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imageTwo from './john-schnobrich-FlPc9_VocJ4-unsplash.jpg';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

export const Mentor = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <h1 className="text-center">Nuestro equipo</h1>
        </Col>
        <Col md={12}>
          <h1 className="text-center">Juntos es mejor- Simon Sinek</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Figure className="cont-img">
            <Image fluid src={imageTwo} className="img-one" />
          </Figure>
        </Col>

        <Col xs={12} sm={6} md={3}>
          <Figure className="cont-img">
            <Image fluid src={imageTwo} className="img-one" />
          </Figure>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Figure className="cont-img">
            <Image fluid src={imageTwo} className="img-one" />
          </Figure>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Figure className="cont-img">
            <Image fluid src={imageTwo} className="img-one" />
          </Figure>
        </Col>
      </Row>
    </Container>
  );
};
