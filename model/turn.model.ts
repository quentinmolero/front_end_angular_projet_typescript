import {Pokemon} from "./pokemon";

export class Turn {
    static findAttackingPokemon(firstPokemon: Pokemon, secondPokemon: Pokemon, random = Math.random): Pokemon {
        return firstPokemon.isPokemonQuickerThanFoe(secondPokemon, random) ? firstPokemon : secondPokemon;
    }

    static async processPokemonAttack(attackingPokemon: Pokemon, defendingPokemon: Pokemon) {
        defendingPokemon.health -= attackingPokemon.getPokemonAttack().damage;
        await new Promise(res => setTimeout(res, 1000));
    }
}