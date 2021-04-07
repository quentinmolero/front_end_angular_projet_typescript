import {IPokemonAttackProps, Pokemon} from "./model/pokemon";
import {fetchPokemon} from "./fetcher/pokemon.fetch";

const pikachuMoves: IPokemonAttackProps[] = [{name: "mega-punch", damage: 10},
    {name: "pay-day", damage: 0},
    {name: "thunder-punch", damage: 5},
    {name: "slam", damage: 10}];
const squirtleMoves: IPokemonAttackProps[] = [{name: "mega-punch", damage: 10},
    {name: "mega-kick", damage: 10},
    {name: "ice-punch", damage: 5},
    {name: "headbutt", damage: 10}];

const pikachu = new Pokemon({name: "Pikachu", health: 50, moves: pikachuMoves, speed: 20, stats: []});
const squirtle = new Pokemon({name: "Squirtle", health: 60, moves: squirtleMoves, speed: 15, stats: []});

console.log(pikachu);
console.log(squirtle);

// async function main() {
//     const ditto = new Pokemon(await fetchPokemon("ditto"));
//     console.log(ditto);
// }
//
// main().then();