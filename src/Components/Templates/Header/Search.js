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
    // console.log(searchState);
    getAddress(searchState.inputState);
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
