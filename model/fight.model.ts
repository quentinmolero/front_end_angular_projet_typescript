import {Pokemon} from "./pokemon";

export interface IFightProps {
    firstPokemon: Pokemon;
    secondPokemon: Pokemon;
}

export class Fight implements IFightProps{
    firstPokemon: Pokemon;
    secondPokemon: Pokemon;

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    isPokemonDead(pokemon: Pokemon): boolean {
        return pokemon.health <= 0;
    }

    ifAnyPokemonDead(): boolean {
        if (this.isPokemonDead(this.firstPokemon)) {
            return true;
        }
        return this.isPokemonDead(this.secondPokemon);
    }


}