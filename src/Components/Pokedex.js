import React, { useState, useEffect } from 'react';
import axios from'axios';
import styles from '../Stylesheets/Pokedex.module.css';
import Pokemon from './Pokemon.js';
import pokedexImg from '../images/openPokedex.png';

function Pokedex(props){
    const [items, setItems] = useState([]);
    const pokemonList = [];
    const [pokemonName, setPokemonName] = useState();
    const search = props.search;
    const [pokemon, setPokemon] = useState(0);
    const capitalize = props.capitalize;

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(res => {
                setItems(res.data.results);
            })
    }, [])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => {
                setPokemon(res.data);
            })
    }, [pokemonName])

    if(items.length > 0)
    {
        for(let i = 0; i < items.length; i++)
        {
            if(items[i].name.includes(search) || search === undefined || items[i].url.slice(34).includes(search))
                pokemonList.push(items[i].name);
        }

        return(
            <div>
                <img src = {pokedexImg} alt = "pokedexImg"/>
                <Pokemon capitalize = {capitalize} pokemon = {pokemon}></Pokemon>
                <ul className = {styles.list}>
                    {
                        pokemonList.map(name => <li key = {name} className = {styles.listItem}>
                                                    <button className = {styles.itemButton} onClick= {() => setPokemonName(name)}>{capitalize(name)}</button>
                                                </li>)
                    }
                </ul>

            </div>
        );
    }
    else 
    {
        return(
            <div/>
        ); 
    }
}

export default Pokedex;