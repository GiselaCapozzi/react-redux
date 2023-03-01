import axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Actions
export const fetchPoquemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
};

export const fetchPokemonSuccess = pokemon => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
};

export const fetchPokemonFailure = error => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = valor => {
    return (dispatch) => {
        dispatch(fetchPoquemonRequest());
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(res => {
                dispatch(fetchPokemonSuccess([res.data]))
            })
            .catch(err => {
                dispatch(fetchPokemonFailure('No se encontro el pokemon'))
            })
    }
};

export default fetchPokemon;