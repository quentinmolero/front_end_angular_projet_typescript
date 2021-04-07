import {Pokemon} from "../model/pokemon";

describe("test pokemon speed", () => {
    it("pikachu should be first", () => {
        const pikachu = new Pokemon({name: "Pikachu", moves: [], speed: 20, stats: []});
        const squirtle = new Pokemon({name: "Squirtle", moves: [], speed: 15, stats: []});

        expect(pikachu.isPokemonQuicker(squirtle)).toBe(true);
    });
});