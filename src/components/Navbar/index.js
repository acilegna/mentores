import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import logo from './HACK.png';
// maneras de importar , mas recomendable la segunda, porq solo estas importando ese elemanto
// import { Button } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Nav
      className="justify-content-center"
      variant="pills"
      defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={() => navigate('/')} className="line">
          INICIO
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="line" eventKey="link-1">
          NOSOTROS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <img src={logo} className="image" />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={() => navigate('/mentor')}
          className="line"
          eventKey="disableds">
          MENTORES
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="line" eventKey="disabled">
          CONTACTO
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
