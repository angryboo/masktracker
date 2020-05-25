import { useReducer, useContext } from 'react';
import { MapContext } from '../ContextAPI/MapContext';
import { initialState, searchReducer } from '../Reducer/SearchReducer';
import { address } from '../API/AddressAPI';
import { coordinates } from '../API/CoordinatesAPI';

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
      if (addressData.status === 200) {
        dispatch({
          type: 'ADDRESS',
          searchAddress: addressData.data.results.juso,
        });
        if (addressData.data.results.juso.length) {
          getSearchLocation(addressData.data.results.juso[0]);
        }
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

  return [
    serchState,
    getSearchLocation,
    getAddress,
    changeInput,
    resetLocation,
  ];
};

export default useSearchFetch;
