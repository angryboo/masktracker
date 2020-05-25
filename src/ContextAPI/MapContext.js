/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useMapFetch from '../Hooks/useMapFetch';

export const MapContext = createContext(null);

// eslint-disable-next-line import/prefer-default-export
export function MapProvider({ children }) {
  const [state, getStores, getLocation, getRange, setMap] = useMapFetch();
  const ContextValue = {
    state,
    getStores,
    getLocation,
    getRange,
    setMap,
  };
  return (
    <MapContext.Provider value={ContextValue}>{children}</MapContext.Provider>
  );
}
