export const initialState = {
  inputState: '',
  searchMode: false,
  selectLocation: { latitude: null, longitude: null },
  searchAddress: [],
  error: {
    state: false,
    message: null,
  },
  loading: false,
};

// eslint-disable-next-line import/prefer-default-export
export const searchReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        inputState: initialState.inputState,
        searchMode: initialState.searchMode,
        selectLocation: { ...initialState.selectLocation },
        searchAddress: [...initialState.searchAddress],
        error: { ...initialState.error },
        loading: true,
      };
    case 'INPUT':
      return {
        ...state,
        inputState: action.inputState,
      };
    case 'ADDRESS':
      return {
        ...state,
        searchAddress: [...action.searchAddress],
      };
    case 'LOCATION':
      return {
        ...state,
        selectLocation: { ...action.selectLocation },
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
