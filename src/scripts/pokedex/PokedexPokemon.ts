class PokedexPokemon implements pokemonInterface {
    name: string;
    id: number;
    type1: GameConstants.PokemonType;
    type2: GameConstants.PokemonType;
    kills: number;
    catches: number;
    shiny: boolean;


    constructor(name: string, id: number, type1: GameConstants.PokemonType, type2: GameConstants.PokemonType, kills: number, catches: number, shiny: boolean) {
        this.name = name;
        this.id = id;
        this.type1 = type1;
        this.type2 = type2;
        this.kills = kills;
        this.catches = catches;
        this.shiny = shiny;
    }
}