import React from 'react';
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import Log from './Log';
// eslint-disable-next-line no-unused-vars
// import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      {/* <Log></Log> */}
      <Log name="krish"/>
      <Log age= "22"/>
      {/* <Welcome></Welcome> */}
    </div>
  );
}

export default App;
