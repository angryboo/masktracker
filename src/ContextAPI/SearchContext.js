/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useSearchFetch from '../Hooks/useSearchFetch';

export const SearchContext = createContext(null);

// eslint-disable-next-line import/prefer-default-export
export function SearchProvider({ children }) {
  const [searchState, getLocation, getAddress, changeInput] = useSearchFetch();
  const ContextValue = {
    searchState,
    getLocation,
    getAddress,
    changeInput,
  };
  return (
    <SearchContext.Provider value={ContextValue}>
      {children}
    </SearchContext.Provider>
  );
}
