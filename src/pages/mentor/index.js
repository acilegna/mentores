import React, {useState} from 'react';
import Data from './Data';
import Card from './Card';
import Buttons from './Buttons';
import './index.css';

export const Mentor = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map(Val => Val.category))];

  const filterItem = curcat => {
    const newItem = Data.filter(newVal => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="container-fluid">
        <div
          style={{
            backgroundImage: `url("http://localhost:3000/images/equi_1.jpg"`,
            height: '270px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
          }}
          className="row cont-text">
          <h1 className="col-12 text-center my-3 fw-bold title-filter">
            Nuestro equipo
          </h1>
          <h2 className="col-12 text-center title-prhase">
            Juntos es mejor- Simon Sinek
          </h2>
        </div>
        <div className="filter">
          {' '}
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
        </div>

        <div className="row">
          <Card item={item} />
        </div>
      </div>
    </>
  );
};
