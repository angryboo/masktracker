import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { SearchContext } from '../../../ContextAPI/SearchContext';

function Move({ map, moveToSearch }) {
  const { searchState } = useContext(SearchContext);
  // const { kakao } = window;
  useEffect(() => {
    console.log(searchState.selectLocation);
    console.dir(moveToSearch);
    console.dir(map);

    // const panTo = () => {
    //   // 이동할 위도 경도 위치를 생성합니다
    //   const moveLatLon = new kakao.maps.LatLng(
    //     searchState.selectLocation.latitude,
    //     searchState.selectLocation.longitude,
    //   );
    //   map.panTo(moveLatLon);
    // };

    // panTo();
    return () => {};
  }, [map, moveToSearch, searchState.selectLocation]);

  return <></>;
}

export default Move;
