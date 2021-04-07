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

    public isPokemonQuickerThanFoe(foe: Pokemon): boolean {
        if (this.getPokemonSpeed() !== foe.getPokemonSpeed()) {
            return this.getPokemonSpeed() > foe.getPokemonSpeed();
        }
        return Math.random() > 0.5;
    }
}