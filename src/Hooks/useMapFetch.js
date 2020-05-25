import { useReducer, useEffect } from 'react';
import { initialState, mapReducer } from '../Reducer/MapReducer';
import { stores } from '../API/StoresAPI';

const useMapFetch = () => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  const getStores = async (lat, lon, rad) => {
    dispatch({ type: 'LOADING' });
    try {
      const storeData = await stores.getStores(lat, lon, rad);
      if (storeData.status === 200) {
        dispatch({
          type: 'STORE',
          stores: storeData.data.stores,
        });
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: storeData.statusText,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          state: true,
          message: error.message,
        },
      });
    }
  };

  const getLocation = (latitude, longitude) => {
    dispatch({
      type: 'MOVE',
      latitude,
      longitude,
    });
  };

  const getRange = (radius) => {
    dispatch({
      type: 'RADIUS',
      radius,
    });
  };

  // 마운트 시점에 초기 위치 마스크 판매처 취득
  useEffect(() => {
    getStores(state.latitude, state.longitude, state.radius);
  }, [state.latitude, state.longitude, state.radius]);

  return [state, getStores, getLocation, getRange];
};

export default useMapFetch;
