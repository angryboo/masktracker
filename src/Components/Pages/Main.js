/* eslint-disable react/button-has-type */
import React from 'react';
import './Main.css';
import Map from '../Templates/Maps/Map';
// import { MapContext } from '../../ContextAPI/MapContext';
import MainContents from '../Templates/MainContents/MainContents';
import Header from '../Templates/Header/Header';

function Main() {
  // const { state } = useContext(MapContext);
  return (
    <main className="Main">
      <Header />
      <Map />
      <MainContents />
    </main>
  );
}

export default Main;
