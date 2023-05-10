import React, {useState, useEffect} from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  window.location.replace('https://calendly.com/amgye2188/30min?month=2022-11');
};
const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Agenda">
    <Button variant="success" onClick={About}>
      Ver agenda
    </Button>
  </Popover>
);

const Cards = ({item}) => {
  const [over, setOver] = useState(0);
  const [color, setColor] = useState('rojo');
  const [colores, setColores] = useState('azul');
  const [status, setStatus] = useState('');
  const [state, setState] = useState('');
  const [pin, setPin] = useState('pin');

  const [open, setOpen] = useState('');
  const toggle = id => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  // Si la  status--variable se actualiza, el efecto se ejecutará nuevamente:[status]
  //Solo ejecute el efecto en el renderizado inicial: []
  //sin parametro se ejecuta en cada render. continuo
  /* useEffect(() => {
    //si se actualiza sttaus hazme esto
    if (status === 1) {
      setStatus(0);
    } else setStatus(40);
  }, [status]); // <- add empty brackets here */

  const changeStyle = () => {
    setColor('verde');
  };

  const changeStyles = () => {
    setColor('naranja');
  };

  const no = () => {
    setState('pin');
  };

  const change = Val => {
    setOver({active: Val});
    console.log(Val);
  };
  const zero = '0';
  const uno = '1';

  const changes = name => {
    setStatus({active: name});
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map(Val => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}>
                <div className="card-img-top text-center">
                  <h2 className="name">
                    Hola,{' '}
                    <span style={{color: Val.styles.color}}>
                      {' '}
                      Soy {Val.languaje} {Val.lastname}
                    </span>
                  </h2>
                  <h3>
                    <strong className="category"> {Val.category}</strong>
                  </h3>
                  <img
                    src={Val.img}
                    alt={Val.name}
                    className="photo img-one background"
                  />
                  {Val.skills.map((element, index) => {
                    return (
                      <img
                        key={index}
                        src={element.skill}
                        alt={''}
                        className="skill anim_moveBottom"
                        style={{
                          left: element.left,
                          top: element.top,
                          float: element.position,
                          right: element.right,
                        }}
                      />
                    );
                  })}
                </div>

                <div className="card-body">
                  <ButtonToolbar>
                    <OverlayTrigger
                      trigger={['hover', 'hover']}
                      placement="bottom"
                      delay={{show: 250, hide: 1500}}
                      overlay={popoverHoverFocus}>
                      <div className="fs-4"></div>
                    </OverlayTrigger>
                  </ButtonToolbar>

                  <p className="desc"> {Val.desc}</p>
                  <Accordion>
                    <Accordion.Item
                      onMouseDown={() => {
                        changes(Val.name);
                      }}
                      eventKey={status.active === Val.name ? zero : uno}>
                      <Accordion.Header>Comentarios</Accordion.Header>
                      <Accordion.Body>
                        Loressm ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <h3 className="costo"> {Val.costo}</h3>
                </div>

                <div style={{background: Val.styles.background}}>
                  {Val.redes.map((element, index) => {
                    return (
                      <a key={index} href={element.link} className="space">
                        <FontAwesomeIcon icon={element.icono} color="white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
