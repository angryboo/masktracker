/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { MapContext } from '../../../ContextAPI/MapContext';
import '../../Pages/Main.css';

function Radius() {
  const { getRange } = useContext(MapContext);
  const handleClick = (range) => {
    getRange(range);
  };
  return (
    <div className="Radius">
      <span className="RadiusSelect">반경 선택</span>
      <ul className="RadiusList">
        <li onClick={() => handleClick(500)}>500m</li>
        <li onClick={() => handleClick(700)}>700m</li>
        <li onClick={() => handleClick(1000)}>1km</li>
      </ul>
    </div>
  );
}

export default Radius;
