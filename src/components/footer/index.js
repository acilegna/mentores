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
        <Col></Col>
        <Col>
          {' '}
          <small className="ml-2 text">
            &copy; Angelica, 2023. All rights reserved.
          </small>
        </Col>
        <Col></Col>
      </Row>
    </footer>
  );
};
