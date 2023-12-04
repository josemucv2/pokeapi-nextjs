import axios from 'axios';

const BASEURL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (limit?: number, offset?: number): Promise<any> => {
  try {
    const response = await axios.get(`${BASEURL}?limit=${limit}&offset=${offset}`);
    return response.data.results;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getPokemonById = async (pokemonUrl: string): Promise<any> => {
  try {
    const response = await axios.get(pokemonUrl);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
