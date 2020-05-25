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
    } else if (store.remain_stat === 'some') {
      store.stock = '99개 이하';
      store.sort = 2;
    } else if (store.remain_stat === 'few') {
      store.stock = '30개 이하';
      store.sort = 3;
    } else {
      store.stock = '판매중단';
      store.sort = 4;
    }
  });

  storeList.sort((stockA, stockB) => stockA.sort - stockB.sort);

  // const $storeList = document.querySelectorAll('.store');

  const storeDetail = ({ target }) => {
    // $storeList.forEach((store) => {
    //   if (target.id === store.id) store.classList.toggle('active');
    // });
    if (!target.matches('.Store')) return;
    console.log(target);
    target.classList.toggle('active');
  };

  // console.log(storeList);
  return (
    <div className="MaskListWrapper">
      <div className="SearchResult">
        총 {storeList.length}개의 약국이 검색되었습니다.
      </div>
      <ul className="MaskList">
        {storeList.length ? (
          storeList.map(({ code, addr, name, stock, stock_at }) => (
            <li
              id={code}
              key={code}
              className="Store"
              tabIndex="0"
              onClick={storeDetail}
            >
              <h4>{name}</h4>
              <img
                src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-with-medical-mask.png"
                alt="mask"
                className="Mask-emoji"
              />
              <span className="Stock">{stock}</span>
              <span className="Date">입고시간 : {stock_at}</span>
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
