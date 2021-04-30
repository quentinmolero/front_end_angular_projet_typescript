import {Pokemon} from "./pokemon";
import {Turn} from "./turn.model";

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
        return this.isPokemonDead(this.secondPokemon) || this.isPokemonDead(this.firstPokemon);
    }

    processFight() {
        const firstAttackingPokemon = Turn.findAttackingPokemon(this.firstPokemon, this.secondPokemon);
        const lastAttackingPokemon = firstAttackingPokemon === this.firstPokemon ? this.secondPokemon : this.firstPokemon;

        Turn.processPokemonAttack(firstAttackingPokemon, lastAttackingPokemon);
        if (!this.isPokemonDead(lastAttackingPokemon)) {
            Turn.processPokemonAttack(lastAttackingPokemon, firstAttackingPokemon);
        }
    }

    determineWinner(): Pokemon {
        return this.isPokemonDead(this.firstPokemon) ? this.secondPokemon : this.firstPokemon;
    }

    startFight(): Pokemon {
        while (!this.ifAnyPokemonDead()) {
            this.processFight();
        }
        return this.determineWinner();
    }
}