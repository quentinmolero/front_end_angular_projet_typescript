import {Pokemon} from "./model/pokemon";
import {fetchPokemon} from "./fetcher/pokemon.fetch";

const pikachu = new Pokemon({name: "Pikachu", moves: [], speed: 20, stats: []});
const squirtle = new Pokemon({name: "Squirtle", moves: [], speed: 15, stats: []});

console.log(pikachu);
console.log(squirtle);

async function main() {
    const ditto = new Pokemon(await fetchPokemon("ditto"));
    console.log(ditto);
}

main().then();