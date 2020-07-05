import { createStore } from 'redux';

const INITIAL_STATE = {
    total: 0,
    pokemons: []
};

function pokemonStore(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_POKEMON':
            if (state.pokemons.some(poke => poke.name == action.pokemon.name)) {
                alert("You have already selected this pokemon.")
                return state;
            }
            return { ...state, pokemons: [...state.pokemons, action.pokemon], total: (state.total + action.price) };
        case 'REMOVE_POKEMON':

            const newState = state.pokemons.filter(poke => poke.id !== action.id);

            return { ...state, pokemons: [...newState], total: (state.total - action.price) };
        default:
            return state;

    }
}

const store = createStore(pokemonStore);

export default store;