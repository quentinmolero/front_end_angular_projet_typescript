import {IPokemonProps} from "../model/pokemon";

const fetch = require("node-fetch");

export async function fetchPokemon(name: string): Promise<IPokemonProps> {
    const data: Response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
    const pokemon: any = await data.json();
    return {
        name: pokemon.name,
        moves: pokemon.moves,
        speed: 0,
        stats: pokemon.stats
    };
}