/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable camelcase */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function StoreList() {
  const { state } = useContext(MapContext);

  useEffect(() => {
    // console.log(state.stores);
  }, [state.stores]);

  const storeList = state.stores;

  storeList.map((store) => {
    if (store.remain_stat === 'plenty') {
      store.stock = '100개 이상';
      store.sort = 1;
      store.bgcolor = '#7295f1';
    } else if (store.remain_stat === 'some') {
      store.stock = '99개 이하';
      store.sort = 2;
      store.bgcolor = '#48bcc6';
    } else if (store.remain_stat === 'few') {
      store.stock = '30개 이하';
      store.sort = 3;
      store.bgcolor = '#ffa840';
    } else {
      store.stock = '판매중단';
      store.sort = 4;
      store.bgcolor = '#ccc';
    }
  });

  storeList.sort((stockA, stockB) => stockA.sort - stockB.sort);

  const $StoreList = document.querySelector('.MaskList');

  const storeDetail = ({ target }) => {
    [...$StoreList.children].forEach(($Store) => {
      $Store.classList.toggle('StoreActive', $Store === target);
    });
  };

  // console.log(storeList);
  return (
    <div className="MaskListWrapper">
      <div className="SearchResult">
        총 {storeList.length}개의 약국이 검색되었습니다.
      </div>
      <ul className="MaskList">
        {storeList.length ? (
          storeList.map(({ code, addr, name, stock, stock_at, bgcolor }) => (
            <li
              id={code}
              key={code}
              className="Store"
              tabIndex="0"
              onClick={storeDetail}
            >
              <h4>{name}</h4>
              <div
                className="Stock"
                style={{
                  backgroundColor: `${bgcolor}`,
                }}
              >
                <img
                  src="https://raw.githubusercontent.com/songseungeun/masktracker/feature-content/src/Components/Img/mask-emoji.png"
                  alt="mask"
                  className="Mask-emoji"
                />
                <span className="StockValue">{stock}</span>
              </div>
              <span className="Date">
                {stock_at !== null ? `입고시간 : ${stock_at}` : ''}
              </span>
              <span className="Addr">{addr}</span>
            </li>
          ))
        ) : (
          <li>주변에 약국이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}

export default StoreList;
