import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './poke-card.scss'

const PokeCard = ({ pokeUrl }) => {

    const [pokemon, setPokemon] = useState({});
    const dispatch = useDispatch();

    const buyPokemon = (pokemon) => {
        dispatch({type: 'ADD_POKEMON', pokemon, price: Number(pokemon.price)});
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${pokeUrl}`,
            );

            const price = (Math.random() * (100 - 1) + 1).toFixed(2);
            result.data.price = price;

            setPokemon(result.data);
        };

        fetchData();
    }, [pokeUrl]);

    return (
        <div className="pokemon-card">
            <h4>{pokemon.name}</h4>
            {pokemon.sprites && <img src={pokemon.sprites.front_shiny} alt="" />}
            <p> Price: U$ {pokemon.price}</p>
            <button onClick={() => buyPokemon(pokemon)}>Buy this pokemon!</button>
        </div>
    );
};

export default PokeCard;