import React from 'react';
import '../../Pages/Main.css';

function Radius() {
  return (
    <div className="Radius">
      <span className="RadiusSelect">반경 선택</span>
      <ul className="RadiusList">
        <li>500m</li>
        <li>700m</li>
        <li>1km</li>
      </ul>
    </div>
  );
}

export default Radius;
