import {Pokemon} from "./pokemon";

export class Turn {
    static findAttackingPokemon(firstPokemon: Pokemon, secondPokemon: Pokemon, random = Math.random): Pokemon {
        return firstPokemon.isPokemonQuickerThanFoe(secondPokemon, random) ? firstPokemon : secondPokemon;
    }
}