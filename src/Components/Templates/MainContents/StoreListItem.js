/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
// import { MapContext } from '../../../ContextAPI/MapContext';
import { SearchContext } from '../../../ContextAPI/SearchContext';

function StoreListItem({ store }) {
  // const { state } = useContext(MapContext);
  const { searchState } = useContext(SearchContext);

  useEffect(() => {
    if (searchState.selectMarker === store.code) {
      console.log(store);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState.selectMarker]);

  const $StoreList = document.querySelector('.MaskList');

  const storeDetail = ({ target }) => {
    [...$StoreList.children].forEach(($Store) => {
      $Store.classList.toggle('StoreActive', $Store === target);
    });
  };

  // console.log(storeList);
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <li id={store.code} className="Store" tabIndex="0" onClick={storeDetail}>
      <h4>{store.name}</h4>
      <div
        className="Stock"
        style={{
          backgroundColor: `${store.bgcolor}`,
        }}
      >
        <img
          src="https://raw.githubusercontent.com/songseungeun/masktracker/feature-content/src/Components/Img/mask-emoji.png"
          alt="mask"
          className="Mask-emoji"
        />
        <span className="StockValue">{store.stock}</span>
      </div>
      <span className="Date">
        {store.stock_at !== null ? `입고시간 : ${store.stock_at}` : ''}
      </span>
      <span className="Addr">{store.addr}</span>
    </li>
  );
}

export default StoreListItem;
