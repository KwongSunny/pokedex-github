import React, { useState, useEffect } from 'react';
import axios from'axios';
import styles from './Pokedex.module.css';
import Pokemon from './Pokemon.js';

function Pokedex(){
    const [items, setItems] = useState([]);
    const pokemonList = [];
    let pokemon = '';

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(res => {
                setItems(res.data.results);
            })
    }, [])
    
    const ShowPokemon = (name) => {
        pokemon = name;
        console.log(pokemon);
    }


    if(items.length > 0)
    {
        for(let i = 0; i < items.length; i++)
        {
            pokemonList.push(items[i].name);
        }

        return(
            <div>
                <ul className = {styles.list}>
                    {
                        pokemonList.map(name => <li className = {styles.listItem}>
                                                    <button onClick= {ShowPokemon.bind(name)}>{name}</button>
                                                </li>)
                    }
                </ul>
                <Pokemon pokemon = {pokemon}></Pokemon>
            </div>
        );
    }

    return(
        <div>

        </div>
    ); 

}

export default Pokedex;