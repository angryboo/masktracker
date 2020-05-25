import React from 'react';
import '../../Pages/Main.css';

function Level({ map }) {
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
