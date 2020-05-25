/* eslint-disable react/button-has-type */
import React from 'react';
import './Main.css';
// import Map from '../Templates/Maps/Map';
// import Test from '../Templates/Test/Test'; // 테스트용 컴포넌트(삭제예정)
// import { MapContext } from '../../ContextAPI/MapContext';
import MainContents from '../Templates/MainContents/MainContents';
import Header from '../Templates/Header/Header';

function Main() {
  // const { state } = useContext(MapContext);
  return (
    <main className="Main">
      {/* <Test /> */}
      <Header />
      {/* <Map /> */}
      <MainContents />
    </main>
  );
}

export default Main;
