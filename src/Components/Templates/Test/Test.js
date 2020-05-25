// 테스트용 컴포넌트

/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { MapContext } from '../../../ContextAPI/MapContext';
import { SearchContext } from '../../../ContextAPI/SearchContext';
import '../../Pages/Main.css';
import { token } from '../../../API/Token';

function Main() {
  const { state, getRange } = useContext(MapContext);
  const { searchState, getLocation } = useContext(SearchContext);

  const obj = {
    admCd: '1120011500',
    bdKdcd: '0',
    bdMgtSn: '1120011500103000001000002',
    bdNm: '성수역',
    buldMnnm: '100',
    buldSlno: '0',
    detBdNmList: '지하철 2호선',
    emdNm: '성수동2가',
    emdNo: '02',
    engAddr: '100, Achasan-ro, Seongdong-gu, Seoul',
    jibunAddr: '서울특별시 성동구 성수동2가 300-1 성수역',
    liNm: '',
    lnbrMnnm: '300',
    lnbrSlno: '1',
    mtYn: '0',
    rn: '아차산로',
    rnMgtSn: '112003000002',
    roadAddr: '서울특별시 성동구 아차산로 100 (성수동2가)',
    roadAddrPart1: '서울특별시 성동구 아차산로 100',
    roadAddrPart2: ' (성수동2가)',
    sggNm: '성동구',
    siNm: '서울특별시',
    udrtYn: '0',
    zipNo: '04782',
  };

  const tk = async () => {
    const { data } = await token.getToken();
    console.log(data.result.accessToken);
  };

  const gps = () => {
    console.log(
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      }),
    );
  };

  return (
    <div className="Test">
      테스트용 컴포넌트입니다.
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        현재 mapState 보기
      </button>
      <button
        onClick={() => {
          getRange(500);
        }}
      >
        범위 500m 변경
      </button>
      <button
        onClick={() => {
          getRange(700);
        }}
      >
        범위 7000m 변경
      </button>
      <button
        onClick={() => {
          getRange(1000);
        }}
      >
        범위 1000m 변경
      </button>
      <button
        onClick={() => {
          console.log(searchState);
        }}
      >
        현재 searchState 보기
      </button>
      <button
        onClick={() => {
          getLocation(obj);
        }}
      >
        좌표 검색
      </button>
      <button
        onClick={() => {
          console.log(tk());
        }}
      >
        토큰취득
      </button>
      <button
        onClick={() => {
          console.log(gps());
        }}
      >
        gps
      </button>
    </div>
  );
}

export default Main;
