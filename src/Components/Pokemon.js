import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = (props) =>{
    
    const pokemon = props.pokemon;
    const pokemonName = pokemon.name;
    const [types, setTypes] = useState([]);

    const iDToText = (num) => {
        if(num/10 < 1)
        {
            return `0000${num}`;
        }
        else if(num/10 < 10)
        {
            return `000${num}`;
        }
        else if(num/10 < 100)
        {
            return `00${num}`;
        }
        else if(num/10 < 1000)
        {
            return `0${num}`;
        }
        else    return num;
    }

    const showTypes = (pokemon) => {
        if(pokemon.types.length === 2)
        {
            return `${pokemon.types[1].type.name} ${pokemon.types[0].type.name}`;
        }
        else
        {
            return pokemon.types[0].type.name;
        }
    }
    
    if(pokemon)
    {
        return(
            <div>
                {`ID #${iDToText(pokemon.id)}: ${pokemonName}`}
                <br />
                    <span>{showTypes(pokemon)}</span>
                <br />
                <img src = {pokemon.sprites.front_default} alt = {`${pokemonName} does not have any available sprite`} />
            </div>
        );
    }
    else
    {
        return(
            <div>
                ID #00000
            </div>
        )
    }

}

export default Pokemon;