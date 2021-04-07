export interface IPokemonProps {
    name: string;
    speed: Number;
    moves: Object[];
    stats: Object[];
}

export class Pokemon implements IPokemonProps{
    name: string;
    speed: Number;
    moves: Object[];
    stats: Object[];

    constructor(props: IPokemonProps) {
        this.name = props.name;
        this.speed = props.speed;
        this.moves = props.moves;
        this.stats = props.stats;
    }

    public getPokemonSpeed(): Number {
        return this.speed;
    }

    public isPokemonQuicker(foe: Pokemon): boolean {
        return this.getPokemonSpeed() >= foe.getPokemonSpeed();
    }
}