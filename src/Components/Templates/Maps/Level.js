/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function Level({ map }) {
  const { state } = useContext(MapContext);
  const { kakao } = window;

  const onZoomIn = () => {
    const level = map.getLevel();
    map.setLevel(level - 1);
  };
  const onZoomOut = () => {
    const level = map.getLevel();
    map.setLevel(level + 1);
  };

  return (
    <div className="Level">
      <button type="button" className="ZoomIn" onClick={onZoomIn}>
        +
      </button>
      <button type="button" className="ZoomOut" onClick={onZoomOut}>
        -
      </button>
    </div>
  );
}

export default Level;
