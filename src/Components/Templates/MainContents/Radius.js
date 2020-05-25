/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { MapContext } from '../../../ContextAPI/MapContext';
import '../../Pages/Main.css';

function Radius() {
  const { getRange } = useContext(MapContext);

  const $RadiusList = document.querySelector('.RadiusList');

  const handleClick = (range, e) => {
    getRange(range);

    [...$RadiusList.children].forEach(($Radius) => {
      $Radius.classList.toggle('RadiusActive', $Radius === e.target);
    });
  };

  return (
    <div className="Radius">
      <span className="RadiusSelect">반경 선택</span>
      <ul className="RadiusList">
        <li onClick={(e) => handleClick(500, e)}>500m</li>
        <li onClick={(e) => handleClick(700, e)}>700m</li>
        <li onClick={(e) => handleClick(1000, e)}>1km</li>
      </ul>
    </div>
  );
}

export default Radius;
