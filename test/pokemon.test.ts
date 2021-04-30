import {IPokemonAttackProps, Pokemon} from "../model/pokemon";
import {Turn} from "../model/turn.model";
import {Fight} from "../model/fight.model";

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
    });
});

describe("test pokemon fight", () => {
    let pickachu: Pokemon, squirtle: Pokemon;
    let winnerMoves: IPokemonAttackProps[], looserMoves: IPokemonAttackProps[];
    let fight: Fight;

    beforeEach(() => {
        winnerMoves = [{name: "mega-punch", damage: 15},
            {name: "pay-day", damage: 5},
            {name: "thunder-punch", damage: 10},
            {name: "slam", damage: 15}];
        looserMoves = [{name: "ice-punch", damage: 0},
            {name: "mega-punch", damage: 0},
            {name: "mega-kick", damage: 0},
            {name: "headbutt", damage: 0}];
        pickachu = new Pokemon({name: "Pikachu", health: 50, moves: winnerMoves, speed: 20, stats: []});
        squirtle = new Pokemon({name: "Squirtle", health: 40, moves: looserMoves, speed: 15, stats: []});
        fight = new Fight(pickachu, squirtle);

        jest.setTimeout(20_000);
    });

    it("Pikachu should win the fight", async () => {
        expect(await fight.startFight()).toBe(pickachu);
    });

    it("Squirtle should win the fight", async () => {
        pickachu.moves = looserMoves;
        squirtle.moves = winnerMoves;
        expect(await fight.startFight()).toBe(squirtle);
    });

    it("Pickachu should win because squirtle is already ko", async () => {
        squirtle.health = 0;
        expect(await fight.startFight()).toBe(pickachu);
    });

    it("Pickachu should win because squirtle is already ko", async () => {
        squirtle.health = 0;
        expect(await fight.startFight()).toBe(pickachu);
    });

    it("Both pokemons are dead before the fight", () => {
        pickachu.health = 0;
        squirtle.health = 0;
        expect(async () => {await fight.startFight()}).rejects.toThrow();
    });
});