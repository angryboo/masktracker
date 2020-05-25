/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
import React, { useEffect, useContext } from 'react';
import '../../Pages/Main.css';
import { MapContext } from '../../../ContextAPI/MapContext';

function StoreList() {
  const { state } = useContext(MapContext);

  const storeList = state.stores;
  useEffect(() => {
    // console.log(state.stores);
  }, [state.stores]);

  // console.log(state.stores);

  // 마스크 수량을 렌더링하는 함수
  const stockValue = (remain_stat) => {
    switch (remain_stat) {
      case 'plenty':
        return '100개 이상';
      case 'some':
        return '30개 ~ 100개';
      case 'few':
        return '30개 미만';
      default:
        return '없습니다';
    }
  };
  // console.log(StoreList);

  // const today = new Date();
  // console.log(today);
  // 2020/05/23 11:39:00
  return (
    <div className="MaskListWrapper">
      <div className="SearchResult">
        총 {storeList.length}개의 약국이 검색되었습니다.
      </div>
      <ul className="MaskList">
        {storeList.length ? (
          storeList.map(({ code, addr, name, remain_stat, stock_at }) => (
            <li key={code} className="store">
              <h4>{name}</h4>
              <img
                src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/face-with-medical-mask.png"
                alt="mask"
                className="mask-emoji"
              />
              <span className="stock">{stockValue(remain_stat)}</span>
              <span className="date">입고시간 : {stock_at}</span>
              <span className="addr">{addr}</span>
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
