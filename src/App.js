import React from 'react';

import { LocationInput } from './components/LocationInput';

import './App.css';

function App() {
  return (
    <div className="app">
      <LocationInput onChange={() => null} googleKey='AIzaSyCzqM4d_k6mUiUTUqYomt6wJ51NBgMmctY'/>
    </div>
  );
}

export default App;
