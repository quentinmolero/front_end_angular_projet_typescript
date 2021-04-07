import {IPokemonAttackProps, Pokemon} from "../model/pokemon";
import {Turn} from "../model/turn.model";

describe("test pokemon speed", () => {
    let pickachu: Pokemon, squirtle: Pokemon, charmander: Pokemon;
    let randomMock: () => number;

    beforeEach(() => {
        pickachu = new Pokemon({name: "Pikachu", health: 50, moves: [], speed: 20, stats: []});
        squirtle = new Pokemon({name: "Squirtle", health: 60, moves: [], speed: 15, stats: []});
        charmander = new Pokemon({name: "Charmander", health: 45, moves: [], speed: 15, stats: []});
        randomMock = () => 0.99;
    });

    it("Pikachu should be first", () => {
        expect(Turn.findAttackingPokemon(pickachu, squirtle)).toBe(pickachu);
    });

    it("Squirtle shouldn't be first", () => {
        expect(Turn.findAttackingPokemon(squirtle, pickachu)).toBe(pickachu);
    });

    it("Squirtle and Charmander have the same speed", () => {
        expect(Turn.findAttackingPokemon(charmander, squirtle, randomMock)).toBe(charmander);
    });
});

describe("test pokemon move", () => {
    let pickachu: Pokemon, squirtle: Pokemon;
    let pickachuMoves: IPokemonAttackProps[], squirtleMoves: IPokemonAttackProps[];
    let randomMock: () => number;

    beforeEach(() => {
        pickachuMoves = [{name: "mega-punch", damage: 10},
            {name: "pay-day", damage: 0},
            {name: "thunder-punch", damage: 5},
            {name: "slam", damage: 10}];
        squirtleMoves = [{name: "ice-punch", damage: 5},
            {name: "mega-punch", damage: 10},
            {name: "mega-kick", damage: 10},
            {name: "headbutt", damage: 10}];
        pickachu = new Pokemon({name: "Pikachu", health: 50, moves: pickachuMoves, speed: 20, stats: []});
        squirtle = new Pokemon({name: "Squirtle", health: 60, moves: squirtleMoves, speed: 15, stats: []});
        randomMock = () => 0.1;
    });

    it("Pikachu should use mega-punch", () => {
        expect(pickachu.getPokemonAttack(randomMock).name).toBe("mega-punch");
    });

    it("Squirtle should use ice-punch", () => {
        expect(squirtle.getPokemonAttack(randomMock).name).toBe("ice-punch");
    });

    it("Pickachu is first Squirtle and use mega-punch", () => {
        expect(Turn.findAttackingPokemon(pickachu, squirtle).getPokemonAttack(randomMock).name).toBe("mega-punch");
    })
});