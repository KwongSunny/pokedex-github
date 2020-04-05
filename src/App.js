import React from 'react';
import './App.css';
import Pokedex from './Components/Pokedex.js';

function App() {

  return (
    <div className="App">
      Name/ID: <input type = 'text'></input>
      <Pokedex></Pokedex>
    </div>
  );
}

export default App;
