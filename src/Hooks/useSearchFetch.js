import { useReducer, useContext } from 'react';
import { MapContext } from '../ContextAPI/MapContext';
import { initialState, searchReducer } from '../Reducer/SearchReducer';
import { address } from '../API/AddressAPI';
import { coordinates } from '../API/CoordinatesAPI';
// import { transcoord } from '../API/TransCoordAPI';

const useSearchFetch = () => {
  const [serchState, dispatch] = useReducer(searchReducer, initialState);
  const { state, getLocation } = useContext(MapContext);
  const { kakao } = window;

  const moveToTarget = (lat, lon) => {
    const moveLatLon = new kakao.maps.LatLng(lat, lon);
    state.map.panTo(moveLatLon);
    getLocation(lat, lon);
  };

  const getSearchLocation = async (obj) => {
    dispatch({ type: 'LOADING' });
    try {
      const locationData = await coordinates.getCoordinates(obj);
      console.log(locationData);
      if (locationData.status === 200) {
        console.log(locationData);
        moveToTarget(
          locationData.data.result.posY,
          locationData.data.result.posX,
        );
        dispatch({
          type: 'LOCATION',
          selectLocation: {
            latitude: locationData.data.result.posY,
            longitude: locationData.data.result.posX,
          },
        });
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: locationData.statusText,
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

  const getAddress = async (keyword) => {
    dispatch({ type: 'LOADING' });
    try {
      const addressData = await address.getAddress(keyword);
      if (addressData.status === 200 && addressData.data.results.juso.length) {
        dispatch({
          type: 'ADDRESS',
          searchAddress: addressData.data.results.juso,
        });
        getSearchLocation(addressData.data.results.juso[0]);
      } else {
        dispatch({
          type: 'ERROR',
          error: {
            state: true,
            message: addressData.statusText,
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

  const changeInput = (keyword) => {
    dispatch({
      type: 'INPUT',
      inputState: keyword,
    });
  };

  const resetLocation = () => {
    dispatch({
      type: 'LOCATION',
      selectLocation: {
        latitude: null,
        longitude: null,
      },
    });
  };

  const selectMarker = async (code) => {
    console.log(code);
    dispatch({
      type: 'MARKER',
      selectMarker: code,
    });
  };

  return [
    serchState,
    moveToTarget,
    getSearchLocation,
    getAddress,
    changeInput,
    resetLocation,
    selectMarker,
  ];
};

export default useSearchFetch;
