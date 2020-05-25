export const initialState = {
  latitude: 37.544579,
  longitude: 127.056045,
  radius: 500,
  stores: [],
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

// eslint-disable-next-line import/prefer-default-export
export const mapReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        stores: [...initialState.stores],
        error: { ...initialState.error },
        loading: true,
      };
    case 'MOVE':
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      };
    case 'RADIUS':
      return {
        ...state,
        radius: action.radius,
      };
    case 'STORE':
      return {
        ...state,
        stores: [...action.stores],
      };
    case 'ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
