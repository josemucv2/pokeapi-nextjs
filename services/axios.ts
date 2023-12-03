import axios from 'axios'
import { error } from 'console';

const BASEURL = "https://pokeapi.co/api/v2/pokemon";


export const getPokemon = (limit?: number, offset?: number) => {
    return axios.get(`${BASEURL}?limit=${limit}&offset=${offset}`)
    .then((res)=> res.data.results)
    .catch((error)=> error)
}

export const getPokemonById = (pokemonUrl: string) => {
    return axios.get(pokemonUrl)
    .then((response) => response.data)
    .catch((error)=> error)
}