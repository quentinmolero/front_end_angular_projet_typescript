import {Pokemon} from "../model/pokemon";

describe("test pokemon speed", () => {
    const pikachu = new Pokemon({name: "Pikachu", moves: [], speed: 20, stats: []});
    const squirtle = new Pokemon({name: "Squirtle", moves: [], speed: 15, stats: []});
    const charmander = new Pokemon({name: "Charmander", moves: [], speed: 15, stats: []});

    it("Pikachu should be first", () => {
        expect(pikachu.isPokemonQuickerThanFoe(squirtle)).toBe(true);
    });

    it("Squirtle shouldn't be first", () => {
        expect(squirtle.isPokemonQuickerThanFoe(pikachu)).toBe(false);
    });

    it("Squirtle and Charmander have the same speed", () => {
        expect(charmander.isPokemonQuickerThanFoe(squirtle)).not.toBeNull();
    });
});