import React from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
const popoverHoverFocus = (
  <Popover id="popover-trigger-hover-focus" title="Popover bottom">
    <strong>Holy guacamole!</strong> Check this info.
    <strong>Holy guacamole!</strong> Check this info.
    <strong>Holy guacamole!</strong> Check this info.
    <Button variant="success">Click me to see</Button>
  </Popover>
);
const Card = ({item}) => {
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
                  <img src={Val.img} alt={Val.name} className="photo w-75" />
                </div>
                <div className="card-body">
                  <ButtonToolbar>
                    <OverlayTrigger
                      trigger={['hover', 'focus']}
                      placement="bottom"
                      overlay={popoverHoverFocus}>
                      <div className="fs-4">
                        <h2 className=" ">{Val.language}</h2>
                      </div>
                    </OverlayTrigger>
                  </ButtonToolbar>
                  <span className=" ">{Val.name}</span>
                  <h3 className=""> {Val.costo}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
