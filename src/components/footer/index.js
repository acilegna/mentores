import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// maneras de importar , mas recomendable la segunda, porq solo estas importando ese elemanto
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

export const Footer = () => {
  return (
    <footer>
      <Row className="foot">
        <Col>1 of 3</Col>
        <Col>
          {' '}
          <small className="ml-2">
            &copy; Devwares, 2023. All rights reserved.
          </small>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </footer>
  );
};
