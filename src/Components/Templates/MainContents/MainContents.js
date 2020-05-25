import React from 'react';
import '../../Pages/Main.css';
import Radius from './Radius';
import StoreList from './StoreList';

function MainContents() {
  // const { state } = useContext(MapContext);
  return (
    <div className="MainContents">
      <Radius />
      <StoreList />
    </div>
  );
}

export default MainContents;
