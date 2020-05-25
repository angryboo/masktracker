import React, { useContext } from 'react';
import '../../Pages/Main.css';
import { SearchContext } from '../../../ContextAPI/SearchContext';

function Level({ map }) {
  const { moveToTarget } = useContext(SearchContext);
  // const { kakao } = window;

  const getGps = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      moveToTarget(position.coords.latitude, position.coords.longitude);
    });
  };

  const onZoomIn = () => {
    const level = map.getLevel();
    map.setLevel(level - 1);
  };
  const onZoomOut = () => {
    const level = map.getLevel();
    map.setLevel(level + 1);

    // const moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);
    // map.panTo(moveLatLon);
    // console.log(map.panTo);
  };

  return (
    <div className="Level">
      <button type="button" className="Location" onClick={getGps}>
        <i className="fas fa-location-arrow" />
      </button>
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
