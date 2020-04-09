import React, { useState } from 'react';
import './App.css';
import Pokedex from './Components/Pokedex.js';

function App() {
  const [search, setSearch] = useState();


  return (
    <div className="App">
      Name: <input type = 'text' value = {search} onChange = {e => setSearch(e.target.value)}></input>
      <Pokedex search = {search}></Pokedex>
    </div>
  );
}

export default App;
