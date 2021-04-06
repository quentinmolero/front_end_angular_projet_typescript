export interface IPokemon {
    name: string;
}

export class Pokemon implements IPokemon{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}