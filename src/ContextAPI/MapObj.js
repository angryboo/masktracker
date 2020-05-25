import React, { createContext } from 'react';

const { kakao } = window;

const container = document.getElementById('map');
const options = {
  center: new kakao.maps.LatLng(37.544579, 127.056045),
  level: 5,
};
// eslint-disable-next-line import/prefer-default-export
export const map = new kakao.maps.Map(container, options);

export const MapObjContext = createContext(null);

// eslint-disable-next-line import/prefer-default-export
export function MapObjProvider({ children }) {
  const ContextValue = {
    map,
  };
  return (
    <MapObjContext.Provider value={ContextValue}>
      {children}
      {/* <div id="map" /> */}
    </MapObjContext.Provider>
  );
}
