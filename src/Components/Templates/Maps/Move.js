import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { SearchContext } from '../../../ContextAPI/SearchContext';

function Move({ moveTarget }) {
  const { searchState } = useContext(SearchContext);
  // const { kakao } = window;
  useEffect(() => {
    console.log(searchState.selectLocation);
    moveTarget(
      searchState.selectLocation.latitude,
      searchState.selectLocation.longitude,
    );

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState.selectLocation]);

  return <></>;
}

export default Move;
