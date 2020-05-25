import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function Overlay({ map }) {
  const { state } = useContext(MapContext);
  const { kakao } = window;
  useEffect(() => {
    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(state.latitude, state.longitude), // 원의 중심좌표
      radius: state.radius, // 원의 반지름
      strokeWeight: 1, // 선 두께
      strokeColor: '#999', // 선 색깔
      strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명
      strokeStyle: 'dashed', // 선의 스타일
      fillColor: '#333', // 채우기 색깔
      fillOpacity: 0.2, // 채우기 불투명도
    });
    circle.setMap(map);
    return () => {
      circle.setMap(null);
    };
  }, [
    kakao.maps.Circle,
    kakao.maps.LatLng,
    map,
    state.latitude,
    state.longitude,
    state.radius,
  ]);

  return <></>;
}

export default Overlay;
