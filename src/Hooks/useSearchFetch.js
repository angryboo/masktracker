import { useReducer } from 'react';
import { initialState, searchReducer } from '../Reducer/SearchReducer';
import { address } from '../API/AddressAPI';
import { coordinates } from '../API/CoordinatesAPI';

const useSearchFetch = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const getLocation = async (obj) => {
    dispatch({ type: 'LOADING' });
    try {
      const locationData = await coordinates.getCoordinates(obj);
      if (locationData.status === 200) {
        console.log(locationData);
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
          getLocation(addressData.data.results.juso[0]);
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

  return [state, getLocation, getAddress, changeInput, resetLocation];
};

export default useSearchFetch;
