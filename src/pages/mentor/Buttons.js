import React, {useState} from 'react';
import Data from './Data';
import './index.css';

const Buttons = ({filterItem, setItem, menuItems}) => {
  const [click, setClick] = useState(0);
  const [state, setStyle] = useState('');
  const filterAll = 'all';

  const changeStyle = Val => {
    setStyle({active: Val});
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        {menuItems.map((Val, id) => {
          return (
            <button
              key={id}
              /*  state.active===contenido de val */
              className={
                state.active === Val
                  ? 'bton-filter p-1 px-3 mx-2 fw-bold active'
                  : 'bton-filter p-1 px-3 mx-2 fw-bold'
              }
              value={state.active}
              onClick={() => {
                filterItem(Val);
                setClick(1);
                changeStyle(Val);
              }}>
              {Val}
            </button>
          );
        })}

        <button
          className={
            (state.active !== filterAll && click === 0) || click === 2
              ? 'bton-filter p-1 px-3 mx-2 fw-bold active'
              : 'bton-filter p-1 px-3 mx-2 fw-bold '
          }
          onClick={() => {
            setItem(Data);
            setClick(2);
            changeStyle(filterAll);
          }}>
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
