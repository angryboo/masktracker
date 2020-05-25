import React from 'react';
import './App.css';
import Main from './Components/Pages/Main';
import { MapProvider } from './ContextAPI/MapContext';
import { SearchProvider } from './ContextAPI/SearchContext';

function App() {
  return (
    <div className="App">
      <MapProvider>
        <SearchProvider>
          <Main />
        </SearchProvider>
      </MapProvider>
    </div>
  );
}

export default App;
