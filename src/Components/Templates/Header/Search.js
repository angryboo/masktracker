import React, { useContext, useRef } from 'react';
import '../../Pages/Main.css';
import { SearchContext } from '../../../ContextAPI/SearchContext';

function Search() {
  const { searchState, getAddress, changeInput } = useContext(SearchContext);

  const inputRef = useRef();

  const handleChange = (keyword) => {
    changeInput(keyword);
  };
  const handleClick = () => {
    if (!inputRef.current.value) return;
    console.log(searchState);
    getAddress(searchState.inputState);

    // const moveLatLon = new kakao.maps.LatLng(33.45058, 126.574942);
    // map.panTo(moveLatLon);
    // console.log(map);
    // console.log(map.panTo);

    inputRef.current.value = '';
  };
  const handleKeyUp = (code) => {
    if (code !== 13 || !inputRef.current.value) return;
    getAddress(searchState.inputState);
    inputRef.current.value = '';
    // event();
  };

  return (
    <div className="Search">
      <input
        name="localsearch"
        placeholder="지역검색"
        ref={inputRef}
        onChange={() => {
          handleChange(inputRef.current.value);
        }}
        onKeyUp={(e) => {
          handleKeyUp(e.keyCode);
        }}
        // value={LocalSearch}
      />
      <button
        type="submit"
        onClick={() => {
          handleClick();
        }}
      >
        검색
      </button>
    </div>
  );
}

export default Search;
