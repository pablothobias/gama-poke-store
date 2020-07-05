import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import './shop-card.scss'

const ShopCard = () => {

    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);
    const total = useSelector(state => state.total);

    const [totalDisplay, setTotalDisplay] = useState(0);
    const [pokemonsDisplay, setPokemonsDisplay] = useState([]);

    useEffect(() => {
        setTotalDisplay(total);
        setPokemonsDisplay(pokemons);
    }, [pokemons, total]);

    const removePokemon = (pokemon) => {
        setPokemonsDisplay(pokemonsDisplay.filter(item => item.id !== pokemon.id));
        dispatch({ type: 'REMOVE_POKEMON', id: pokemon.id, price: Number(pokemon.price) });
    };

    const buyPokemons = () => {
        alert("Nice! You completed your purchase worth U$" + total);
    };

    return (
        <div className="shop-card">
            <h2>Shopping Car</h2>

            {pokemons && pokemons.length !== 0 &&
                <div className="poke-list">
                    <table>
                        <tbody className="list-content">
                            {pokemonsDisplay && pokemonsDisplay.map(pokemon => (
                                <tr key={pokemon.id}>
                                    <span className="poke-info">
                                        <img id="poke-img" src={pokemon.sprites ?
                                            pokemon.sprites.front_shiny : null} alt="" />
                                    </span>
                                    <span className="name-price">
                                        <p>{pokemon.name} - U$ {pokemon.price}</p>
                                    </span>
                                    <span className="remove-btn-content">
                                        <button id="remove" onClick={() => removePokemon(pokemon)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </span>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
            {pokemonsDisplay && pokemonsDisplay.length === 0 &&
                <div id="empty-content">
                    <img src="https://i.ya-webdesign.com/images/cart-icons-png.png" alt="" id="empty-shopping-car" />
                    <h2>Your car is empty</h2>
                </div>
            }
            {totalDisplay > 0 &&
                <div className="total-content">
                    <b>Total : U$ {total.toFixed(2)}</b>
                    <button className="buy" onClick={buyPokemons}>Buy!</button>
                </div>}
        </div>
    );
};

export default ShopCard;