/* eslint-disable jsx-a11y/alt-text */
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

  let imageSrc = '';

  const plentyMarker =
    'https://raw.githubusercontent.com/songseungeun/masktracker/feature-content/src/Components/Img/marker-p.png';
  const someMarker =
    'https://raw.githubusercontent.com/songseungeun/masktracker/feature-content/src/Components/Img/marker-s.png';
  const fewMarker =
    'https://raw.githubusercontent.com/songseungeun/masktracker/feature-content/src/Components/Img/marker-f.png';
  const defaultMarker =
    'https://raw.githubusercontent.com/songseungeun/masktracker/feature-content/src/Components/Img/marker-x.png';

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
          title: store.title,
          position: store.latlng,
          image: markerImage,
        });
        // console.log(marker);
        marker.setMap(mapObj);
        markers.push(marker);
      });
    };

    generateMaker(map);

    // markers.forEach((marker) => {
    //   kakao.maps.event.addListener(marker, 'click', () => {
    //     // console.log(marker);
    //     const $storeList = document.querySelector('.store');
    //   });
    // });

    // let iwContent = '';

    // const iwRemoveable = true;

    // markers.forEach((marker) => {
    //   kakao.maps.event.addListener(marker, 'click', () => {
    //     iwContent = `<div class="popup">${marker.mc}</div>`;

    //     const infoWindow = new kakao.maps.InfoWindow({
    //       content: `<strong>${iwContent}</strong>`,
    //       // removable: iwRemoveable,
    //     });

    //     infoWindow.open(map, marker);

    //     // console.log(infoWindow);
    //   });
    // });
    // const $InfoPopup = document.querySelector('.popup');
    // console.log($InfoPopup);
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

  return (
    <>
      <ul className="MarkerList">
        <li>
          <img src={plentyMarker} />
          <span className="MarkerName">100개 이상</span>
        </li>
        <li>
          <img src={someMarker} />
          <span className="MarkerName">99개 이하</span>
        </li>
        <li>
          <img src={fewMarker} />
          <span className="MarkerName">30개 이하</span>
        </li>
        <li>
          <img src={defaultMarker} />
          <span className="MarkerName">수량없음</span>
        </li>
      </ul>
    </>
  );
}

export default Marker;
