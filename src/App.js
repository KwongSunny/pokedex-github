import React, { useState } from 'react';
import styles from './Stylesheets/App.module.css';
import Pokedex from './Components/Pokedex.js';

function App() {
  const [search, setSearch] = useState();

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return (
    <div className= {styles.App}>
      <input className = {styles.input} type = 'text' onChange = {e => {setSearch(e.target.value.toLowerCase())}}></input>
      <Pokedex capitalize = {capitalize} search = {search}></Pokedex>
    </div>
  );
}

export default App;
