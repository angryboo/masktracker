/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function Marker({ map }) {
  const { state } = useContext(MapContext);
  const { kakao } = window;
  useEffect(() => {
    const markersPosition = state.stores.map(
      ({ name, lat, lng, remain_stat, code }) => ({
        title: name,
        latlng: new kakao.maps.LatLng(lat, lng),
        remain_stat,
        code,
      }),
    );

    const markers = [];

    const generateMaker = (mapObj) => {
      let imageSrc = '';

      const plentyMarker =
        'https://raw.githubusercontent.com/songseungeun/mask-stores/feature-content/src/img/marker-p.png';
      const someMarker =
        'https://raw.githubusercontent.com/songseungeun/mask-stores/feature-content/src/img/marker-s.png';
      const fewMarker =
        'https://raw.githubusercontent.com/songseungeun/mask-stores/feature-content/src/img/marker-f.png';
      const defaultMarker =
        'https://raw.githubusercontent.com/songseungeun/mask-stores/feature-content/src/img/marker-x.png';

      markersPosition.forEach((store) => {
        switch (store.remain_stat) {
          case 'plenty':
            imageSrc = plentyMarker;
            break;
          case 'some':
            imageSrc = someMarker;
            break;
          case 'few':
            imageSrc = fewMarker;
            break;
          default:
            imageSrc = defaultMarker;
        }

        const imageSize = new kakao.maps.Size(60, 85);

        const imageOption = { offset: new kakao.maps.Point(27, 69) };

        const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        const marker = new kakao.maps.Marker({
          title: store.code,
          position: store.latlng,
          image: markerImage,
        });
        // console.log(marker);
        marker.setMap(mapObj);
        markers.push(marker);
      });
    };

    generateMaker(map);

    let iwContent = '';

    const iwRemoveable = true;

    markers.forEach((marker) => {
      kakao.maps.event.addListener(marker, 'click', () => {
        iwContent = marker.mc;

        const infoWindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        infoWindow.open(map, marker);
      });
    });
    // markers.forEach((marker) => {
    //   kakao.maps.event.addListener(marker, 'click', () => {
    //     console.log(marker);
    //     const $storeList = document.querySelector('.store');
    //   });
    // });

    return () => {
      markers.forEach((marker) => {
        marker.setMap(null);
      });
    };
  }, [state.stores]);

  return <></>;
}

export default Marker;
