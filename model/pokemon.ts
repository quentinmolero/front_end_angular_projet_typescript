export interface IPokemonProps {
    name: string;
    health: Number;
    speed: Number;
    moves: IPokemonAttackProps[];
    stats: Object[];
}

export interface IPokemonAttackProps {
    name: string;
    damage: number;
}

export class Pokemon implements IPokemonProps{
    name: string;
    health: Number;
    speed: Number;
    moves: IPokemonAttackProps[];
    stats: Object[];

    constructor(props: IPokemonProps) {
        this.name = props.name;
        this.health = props.health;
        this.speed = props.speed;
        this.moves = props.moves;
        this.stats = props.stats;
    }

    public getPokemonSpeed(): Number {
        return this.speed;
    }

    public isPokemonQuickerThanFoe(foe: Pokemon, random = Math.random): boolean {
        if (this.getPokemonSpeed() !== foe.getPokemonSpeed()) {
            return this.getPokemonSpeed() > foe.getPokemonSpeed();
        }
        return random() > 0.5;
    }

    public getPokemonAttack(random: () => Number = Math.random): IPokemonAttackProps {
        return this.moves[Math.round(Number(random()) * 3)];
    }
}