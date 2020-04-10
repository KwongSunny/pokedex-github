import React from 'react';
import styles from '../Stylesheets/Pokemon.module.css';

const Pokemon = (props) =>{
    
    const pokemon = props.pokemon;
    const pokemonName = pokemon.name;
    const capitalize = props.capitalize;

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
        else return num;
    }

    const showTypes = (pokemon) => {
        if(pokemon.types.length === 2)
        {
            return `${capitalize(pokemon.types[1].type.name)} 
                    ${capitalize(pokemon.types[0].type.name)}`;
        }
        else
        {
            return capitalize(pokemon.types[0].type.name);
        }
    }
    
    if(pokemon)
    {
        return(
            <div className = {styles.pokemonInfo}>
                <br />
                <img className = {styles.pokemonImg} src = {pokemon.sprites.front_default} alt = {`${pokemonName} does not have any available sprite`} />
                {`ID #${iDToText(pokemon.id)}: ${capitalize(pokemonName)}`}
                <br />
                    <span>Type(s): {showTypes(pokemon)}</span>
                <br />
                <br />
                <div className = {styles.pokemonStats}>
                    <div>Speed: {pokemon.stats[0].base_stat}</div>
                    <div>Special Defense: {pokemon.stats[1].base_stat}</div>
                    <div>Special Attack: {pokemon.stats[2].base_stat}</div>
                    <div>Defense: {pokemon.stats[3].base_stat}</div>
                    <div>Attack: {pokemon.stats[4].base_stat}</div>
                    <div>HP: {pokemon.stats[0].base_stat}</div>
                </div>

            </div>
        );
    }
    else
    {
        return(
            <div className = {styles.pokemonInfo}>
                <br />
                ID #00000
            </div>
        )
    }

}

export default Pokemon;