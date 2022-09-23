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
        <div className="row">
          <h1 className="col-12 text-center my-3 fw-bold">Nuestro equipo</h1>
          <h2 className="col-12 text-center ">Juntos es mejor- Simon Sinek</h2>
          <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <Card item={item} />
        </div>
      </div>
    </>
  );
};
