/**
 * Pokémon data, accessible by name or id.
 * @type {{}}
 */

const pokemonMap :{[name : string] : object } = {};
const pokemonMapId : {[id : number] : object} = {};



/**
 * Datalist that contains all Pokémon data
 */
const pokemonList = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "catchRate": 45,
        "evolution": "Ivysaur",
        "evoLevel": 16,
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 65,
        "levelType": "medium slow",
        "exp": 64,
        "eggCycles": 20
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "catchRate": 45,
        "evolution": "Venusaur",
        "evoLevel": 32,
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 80,
        "levelType": "medium slow",
        "exp": 142,
        "eggCycles": 20
    },
    {
        "id": 3,
        "name": "Venusaur",
        "catchRate": 45,
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 100,
        "levelType": "medium slow",
        "exp": 236,
        "eggCycles": 20
    },
    {
        "id": 4,
        "name": "Charmander",
        "catchRate": 45,
        "evolution": "Charmeleon",
        "evoLevel": 16,
        "type": [
            "Fire"
        ],
        "attack": 60,
        "levelType": "medium slow",
        "exp": 62,
        "eggCycles": 20
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "catchRate": 45,
        "evolution": "Charizard",
        "evoLevel": 36,
        "type": [
            "Fire"
        ],
        "attack": 80,
        "levelType": "medium slow",
        "exp": 142,
        "eggCycles": 20
    },
    {
        "id": 6,
        "name": "Charizard",
        "catchRate": 45,
        "type": [
            "Fire",
            "Flying"
        ],
        "attack": 105,
        "levelType": "medium slow",
        "exp": 240,
        "eggCycles": 20
    },
    {
        "id": 7,
        "name": "Squirtle",
        "catchRate": 45,
        "evolution": "Wartortle",
        "evoLevel": 16,
        "type": [
            "Water"
        ],
        "attack": 50,
        "levelType": "medium slow",
        "exp": 63,
        "eggCycles": 20
    },
    {
        "id": 8,
        "name": "Wartortle",
        "catchRate": 45,
        "evolution": "Blastoise",
        "evoLevel": 36,
        "type": [
            "Water"
        ],
        "attack": 65,
        "levelType": "medium slow",
        "exp": 142,
        "eggCycles": 20
    },
    {
        "id": 9,
        "name": "Blastoise",
        "catchRate": 45,
        "type": [
            "Water"
        ],
        "attack": 85,
        "levelType": "medium slow",
        "exp": 239,
        "eggCycles": 20
    },
    {
        "id": 10,
        "name": "Caterpie",
        "catchRate": 255,
        "evolution": "Metapod",
        "evoLevel": 7,
        "type": [
            "Bug"
        ],
        "attack": 30,
        "levelType": "medium fast",
        "exp": 39,
        "eggCycles": 10
    },
    {
        "id": 11,
        "name": "Metapod",
        "catchRate": 120,
        "evolution": "Butterfree",
        "evoLevel": 10,
        "type": [
            "Bug"
        ],
        "attack": 25,
        "levelType": "medium fast",
        "exp": 72,
        "eggCycles": 10
    },
    {
        "id": 12,
        "name": "Butterfree",
        "catchRate": 45,
        "type": [
            "Bug",
            "Flying"
        ],
        "attack": 90,
        "levelType": "medium fast",
        "exp": 173,
        "eggCycles": 10
    },
    {
        "id": 13,
        "name": "Weedle",
        "catchRate": 255,
        "evolution": "Kakuna",
        "evoLevel": 7,
        "type": [
            "Bug",
            "Poison"
        ],
        "attack": 35,
        "levelType": "medium fast",
        "exp": 39,
        "eggCycles": 10
    },
    {
        "id": 14,
        "name": "Kakuna",
        "catchRate": 120,
        "evolution": "Beedrill",
        "evoLevel": 10,
        "type": [
            "Bug",
            "Poison"
        ],
        "attack": 25,
        "levelType": "medium fast",
        "exp": 72,
        "eggCycles": 10
    },
    {
        "id": 15,
        "name": "Beedrill",
        "catchRate": 45,
        "type": [
            "Bug",
            "Poison"
        ],
        "attack": 90,
        "levelType": "medium fast",
        "exp": 173,
        "eggCycles": 10
    },
    {
        "id": 16,
        "name": "Pidgey",
        "catchRate": 255,
        "evolution": "Pidgeotto",
        "evoLevel": 18,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 45,
        "levelType": "medium slow",
        "exp": 50,
        "eggCycles": 15
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "catchRate": 120,
        "evolution": "Pidgeot",
        "evoLevel": 36,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 60,
        "levelType": "medium slow",
        "exp": 122,
        "eggCycles": 15
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "catchRate": 45,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 80,
        "levelType": "medium slow",
        "exp": 211,
        "eggCycles": 15
    },
    {
        "id": 19,
        "name": "Rattata",
        "catchRate": 255,
        "evolution": "Raticate",
        "evoLevel": 20,
        "type": [
            "Normal"
        ],
        "attack": 56,
        "levelType": "medium fast",
        "exp": 51,
        "eggCycles": 15
    },
    {
        "id": 20,
        "name": "Raticate",
        "catchRate": 127,
        "type": [
            "Normal"
        ],
        "attack": 81,
        "levelType": "medium fast",
        "exp": 145,
        "eggCycles": 15
    },
    {
        "id": 21,
        "name": "Spearow",
        "catchRate": 255,
        "evolution": "Fearow",
        "evoLevel": 20,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 60,
        "levelType": "medium fast",
        "exp": 52,
        "eggCycles": 15
    },
    {
        "id": 22,
        "name": "Fearow",
        "catchRate": 90,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 90,
        "levelType": "medium fast",
        "exp": 155,
        "eggCycles": 15
    },
    {
        "id": 23,
        "name": "Ekans",
        "catchRate": 255,
        "evolution": "Arbok",
        "evoLevel": 22,
        "type": [
            "Poison"
        ],
        "attack": 60,
        "levelType": "medium fast",
        "exp": 58,
        "eggCycles": 20
    },
    {
        "id": 24,
        "name": "Arbok",
        "catchRate": 90,
        "type": [
            "Poison"
        ],
        "attack": 85,
        "levelType": "medium fast",
        "exp": 153,
        "eggCycles": 20
    },
    {
        "id": 25,
        "name": "Pikachu",
        "catchRate": 190,
        "evolution": "Raichu",
        "evoLevel": "Thunder Stone",
        "type": [
            "Electric"
        ],
        "attack": 55,
        "levelType": "medium fast",
        "exp": 105,
        "eggCycles": 20
    },
    {
        "id": 26,
        "name": "Raichu",
        "catchRate": 75,
        "type": [
            "Electric"
        ],
        "attack": 90,
        "levelType": "medium fast",
        "exp": 214,
        "eggCycles": 20
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "catchRate": 255,
        "evolution": "Sandslash",
        "evoLevel": 22,
        "type": [
            "Ground"
        ],
        "attack": 75,
        "levelType": "medium fast",
        "exp": 60,
        "eggCycles": 20
    },
    {
        "id": 28,
        "name": "Sandslash",
        "catchRate": 90,
        "type": [
            "Ground"
        ],
        "attack": 100,
        "levelType": "medium fast",
        "exp": 158,
        "eggCycles": 20
    },
    {
        "id": 29,
        "name": "Nidoran(F)",
        "catchRate": 235,
        "evolution": "Nidorina",
        "evoLevel": 16,
        "type": [
            "Poison"
        ],
        "attack": 47,
        "levelType": "medium slow",
        "exp": 55,
        "eggCycles": 20
    },
    {
        "id": 30,
        "name": "Nidorina",
        "catchRate": 120,
        "evolution": "Nidoqueen",
        "evoLevel": "Moon Stone",
        "type": [
            "Poison"
        ],
        "attack": 62,
        "levelType": "medium slow",
        "exp": 128,
        "eggCycles": 20
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "catchRate": 45,
        "type": [
            "Poison",
            "Ground"
        ],
        "attack": 92,
        "levelType": "medium slow",
        "exp": 223,
        "eggCycles": 20
    },
    {
        "id": 32,
        "name": "Nidoran(M)",
        "catchRate": 235,
        "evolution": "Nidorino",
        "evoLevel": 16,
        "type": [
            "Poison"
        ],
        "attack": 57,
        "levelType": "medium slow",
        "exp": 55,
        "eggCycles": 20
    },
    {
        "id": 33,
        "name": "Nidorino",
        "catchRate": 120,
        "evolution": "Nidoking",
        "evoLevel": "Moon Stone",
        "type": [
            "Poison"
        ],
        "attack": 72,
        "levelType": "medium slow",
        "exp": 128,
        "eggCycles": 20
    },
    {
        "id": 34,
        "name": "Nidoking",
        "catchRate": 45,
        "type": [
            "Poison",
            "Ground"
        ],
        "attack": 102,
        "levelType": "medium slow",
        "exp": 223,
        "eggCycles": 20
    },
    {
        "id": 35,
        "name": "Clefairy",
        "catchRate": 150,
        "evolution": "Clefable",
        "evoLevel": "Moon Stone",
        "type": [
            "Fairy"
        ],
        "attack": 60,
        "levelType": "fast",
        "exp": 113,
        "eggCycles": 20
    },
    {
        "id": 36,
        "name": "Clefable",
        "catchRate": 25,
        "type": [
            "Fairy"
        ],
        "attack": 95,
        "levelType": "fast",
        "exp": 213,
        "eggCycles": 20
    },
    {
        "id": 37,
        "name": "Vulpix",
        "catchRate": 190,
        "evolution": "Ninetales",
        "evoLevel": "Fire Stone",
        "type": [
            "Fire"
        ],
        "attack": 50,
        "levelType": "medium fast",
        "exp": 60,
        "eggCycles": 20
    },
    {
        "id": 38,
        "name": "Ninetales",
        "catchRate": 75,
        "type": [
            "Fire"
        ],
        "attack": 81,
        "levelType": "medium fast",
        "exp": 177,
        "eggCycles": 20
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "catchRate": 170,
        "evolution": "Wigglytuff",
        "evoLevel": "Moon Stone",
        "type": [
            "Normal",
            "Fairy"
        ],
        "attack": 45,
        "levelType": "fast",
        "exp": 95,
        "eggCycles": 20
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "catchRate": 50,
        "type": [
            "Normal",
            "Fairy"
        ],
        "attack": 85,
        "levelType": "fast",
        "exp": 191,
        "eggCycles": 20
    },
    {
        "id": 41,
        "name": "Zubat",
        "catchRate": 255,
        "evolution": "Golbat",
        "evoLevel": 22,
        "type": [
            "Poison",
            "Flying"
        ],
        "attack": 45,
        "levelType": "medium fast",
        "exp": 49,
        "eggCycles": 15
    },
    {
        "id": 42,
        "name": "Golbat",
        "catchRate": 90,
        "type": [
            "Poison",
            "Flying"
        ],
        "attack": 80,
        "levelType": "medium fast",
        "exp": 159,
        "eggCycles": 15
    },
    {
        "id": 43,
        "name": "Oddish",
        "catchRate": 255,
        "evolution": "Gloom",
        "evoLevel": 21,
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 75,
        "levelType": "medium slow",
        "exp": 64,
        "eggCycles": 20
    },
    {
        "id": 44,
        "name": "Gloom",
        "catchRate": 120,
        "evolution": "Vileplume",
        "evoLevel": "Leaf Stone",
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 85,
        "levelType": "medium slow",
        "exp": 138,
        "eggCycles": 20
    },
    {
        "id": 45,
        "name": "Vileplume",
        "catchRate": 45,
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 110,
        "levelType": "medium slow",
        "exp": 216,
        "eggCycles": 20
    },
    {
        "id": 46,
        "name": "Paras",
        "catchRate": 190,
        "evolution": "Parasect",
        "evoLevel": 24,
        "type": [
            "Bug",
            "Grass"
        ],
        "attack": 70,
        "levelType": "medium fast",
        "exp": 57,
        "eggCycles": 20
    },
    {
        "id": 47,
        "name": "Parasect",
        "catchRate": 75,
        "type": [
            "Bug",
            "Grass"
        ],
        "attack": 95,
        "levelType": "medium fast",
        "exp": 142,
        "eggCycles": 20
    },
    {
        "id": 48,
        "name": "Venonat",
        "catchRate": 190,
        "evolution": "Venomoth",
        "evoLevel": 31,
        "type": [
            "Bug",
            "Poison"
        ],
        "attack": 55,
        "levelType": "medium fast",
        "exp": 61,
        "eggCycles": 20
    },
    {
        "id": 49,
        "name": "Venomoth",
        "catchRate": 75,
        "type": [
            "Bug",
            "Poison"
        ],
        "attack": 90,
        "levelType": "medium fast",
        "exp": 158,
        "eggCycles": 20
    },
    {
        "id": 50,
        "name": "Diglett",
        "catchRate": 255,
        "evolution": "Dugtrio",
        "evoLevel": 26,
        "type": [
            "Ground"
        ],
        "attack": 55,
        "levelType": "medium fast",
        "exp": 53,
        "eggCycles": 20
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "catchRate": 50,
        "type": [
            "Ground"
        ],
        "attack": 80,
        "levelType": "medium fast",
        "exp": 142,
        "eggCycles": 20
    },
    {
        "id": 52,
        "name": "Meowth",
        "catchRate": 255,
        "evolution": "Persian",
        "evoLevel": 28,
        "type": [
            "Normal"
        ],
        "attack": 45,
        "levelType": "medium fast",
        "exp": 58,
        "eggCycles": 20
    },
    {
        "id": 53,
        "name": "Persian",
        "catchRate": 90,
        "type": [
            "Normal"
        ],
        "attack": 70,
        "levelType": "medium fast",
        "exp": 154,
        "eggCycles": 20
    },
    {
        "id": 54,
        "name": "Psyduck",
        "catchRate": 190,
        "evolution": "Golduck",
        "evoLevel": 33,
        "type": [
            "Water"
        ],
        "attack": 65,
        "levelType": "medium fast",
        "exp": 64,
        "eggCycles": 20
    },
    {
        "id": 55,
        "name": "Golduck",
        "catchRate": 75,
        "type": [
            "Water"
        ],
        "attack": 95,
        "levelType": "medium fast",
        "exp": 175,
        "eggCycles": 20
    },
    {
        "id": 56,
        "name": "Mankey",
        "catchRate": 190,
        "evolution": "Primeape",
        "evoLevel": 28,
        "type": [
            "Fighting"
        ],
        "attack": 80,
        "levelType": "medium fast",
        "exp": 61,
        "eggCycles": 20
    },
    {
        "id": 57,
        "name": "Primeape",
        "catchRate": 75,
        "type": [
            "Fighting"
        ],
        "attack": 105,
        "levelType": "medium fast",
        "exp": 159,
        "eggCycles": 20
    },
    {
        "id": 58,
        "name": "Growlithe",
        "catchRate": 190,
        "evolution": "Arcanine",
        "evoLevel": "Fire Stone",
        "type": [
            "Fire"
        ],
        "attack": 70,
        "levelType": "slow",
        "exp": 70,
        "eggCycles": 20
    },
    {
        "id": 59,
        "name": "Arcanine",
        "catchRate": 75,
        "type": [
            "Fire"
        ],
        "attack": 110,
        "levelType": "slow",
        "exp": 194,
        "eggCycles": 20
    },
    {
        "id": 60,
        "name": "Poliwag",
        "catchRate": 255,
        "evolution": "Poliwhirl",
        "evoLevel": 25,
        "type": [
            "Water"
        ],
        "attack": 50,
        "levelType": "medium slow",
        "exp": 60,
        "eggCycles": 20
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "catchRate": 120,
        "evolution": "Poliwrath",
        "evoLevel": "Water Stone",
        "type": [
            "Water"
        ],
        "attack": 65,
        "levelType": "medium slow",
        "exp": 135,
        "eggCycles": 20
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "catchRate": 45,
        "type": [
            "Water",
            "Fighting"
        ],
        "attack": 95,
        "levelType": "medium slow",
        "exp": 225,
        "eggCycles": 20
    },
    {
        "id": 63,
        "name": "Abra",
        "catchRate": 200,
        "evolution": "Kadabra",
        "evoLevel": 16,
        "type": [
            "Psychic"
        ],
        "attack": 105,
        "levelType": "medium slow",
        "exp": 62,
        "eggCycles": 20
    },
    {
        "id": 64,
        "name": "Kadabra",
        "catchRate": 100,
        "evolution": "Alakazam",
        "evoLevel": "Trade Stone",
        "type": [
            "Psychic"
        ],
        "attack": 120,
        "levelType": "medium slow",
        "exp": 140,
        "eggCycles": 20
    },
    {
        "id": 65,
        "name": "Alakazam",
        "catchRate": 50,
        "type": [
            "Psychic"
        ],
        "attack": 135,
        "levelType": "medium slow",
        "exp": 221,
        "eggCycles": 20
    },
    {
        "id": 66,
        "name": "Machop",
        "catchRate": 180,
        "evolution": "Machoke",
        "evoLevel": 28,
        "type": [
            "Fighting"
        ],
        "attack": 80,
        "levelType": "medium slow",
        "exp": 61,
        "eggCycles": 20
    },
    {
        "id": 67,
        "name": "Machoke",
        "catchRate": 90,
        "evolution": "Machamp",
        "evoLevel": "Trade Stone",
        "type": [
            "Fighting"
        ],
        "attack": 100,
        "levelType": "medium slow",
        "exp": 142,
        "eggCycles": 20
    },
    {
        "id": 68,
        "name": "Machamp",
        "catchRate": 45,
        "type": [
            "Fighting"
        ],
        "attack": 130,
        "levelType": "medium slow",
        "exp": 227,
        "eggCycles": 20
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "catchRate": 255,
        "evolution": "Weepinbell",
        "evoLevel": 21,
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 75,
        "levelType": "medium slow",
        "exp": 60,
        "eggCycles": 20
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "catchRate": 120,
        "evolution": "Victreebel",
        "evoLevel": "Leaf Stone",
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 90,
        "levelType": "medium slow",
        "exp": 137,
        "eggCycles": 20
    },
    {
        "id": 71,
        "name": "Victreebel",
        "catchRate": 45,
        "type": [
            "Grass",
            "Poison"
        ],
        "attack": 105,
        "levelType": "medium slow",
        "exp": 216,
        "eggCycles": 20
    },
    {
        "id": 72,
        "name": "Tentacool",
        "catchRate": 190,
        "evolution": "Tentacruel",
        "evoLevel": 30,
        "type": [
            "Water",
            "Poison"
        ],
        "attack": 50,
        "levelType": "slow",
        "exp": 67,
        "eggCycles": 20
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "catchRate": 60,
        "type": [
            "Water",
            "Poison"
        ],
        "attack": 80,
        "levelType": "slow",
        "exp": 180,
        "eggCycles": 20
    },
    {
        "id": 74,
        "name": "Geodude",
        "catchRate": 255,
        "evolution": "Graveler",
        "evoLevel": 25,
        "type": [
            "Rock",
            "Ground"
        ],
        "attack": 80,
        "levelType": "medium slow",
        "exp": 60,
        "eggCycles": 15
    },
    {
        "id": 75,
        "name": "Graveler",
        "catchRate": 120,
        "evolution": "Golem",
        "evoLevel": "Trade Stone",
        "type": [
            "Rock",
            "Ground"
        ],
        "attack": 95,
        "levelType": "medium slow",
        "exp": 137,
        "eggCycles": 15
    },
    {
        "id": 76,
        "name": "Golem",
        "catchRate": 45,
        "type": [
            "Rock",
            "Ground"
        ],
        "attack": 120,
        "levelType": "medium slow",
        "exp": 218,
        "eggCycles": 15
    },
    {
        "id": 77,
        "name": "Ponyta",
        "catchRate": 190,
        "evolution": "Rapidash",
        "evoLevel": 40,
        "type": [
            "Fire"
        ],
        "attack": 85,
        "levelType": "medium fast",
        "exp": 82,
        "eggCycles": 20
    },
    {
        "id": 78,
        "name": "Rapidash",
        "catchRate": 60,
        "type": [
            "Fire"
        ],
        "attack": 100,
        "levelType": "medium fast",
        "exp": 175,
        "eggCycles": 20
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "catchRate": 190,
        "evolution": "Slowbro",
        "evoLevel": 37,
        "type": [
            "Water",
            "Psychic"
        ],
        "attack": 65,
        "levelType": "medium fast",
        "exp": 63,
        "eggCycles": 20
    },
    {
        "id": 80,
        "name": "Slowbro",
        "catchRate": 75,
        "type": [
            "Water",
            "Psychic"
        ],
        "attack": 100,
        "levelType": "medium fast",
        "exp": 172,
        "eggCycles": 20
    },
    {
        "id": 81,
        "name": "Magnemite",
        "catchRate": 190,
        "evolution": "Magneton",
        "evoLevel": 30,
        "type": [
            "Electric",
            "Steel"
        ],
        "attack": 95,
        "levelType": "medium fast",
        "exp": 65,
        "eggCycles": 20
    },
    {
        "id": 82,
        "name": "Magneton",
        "catchRate": 60,
        "type": [
            "Electric",
            "Steel"
        ],
        "attack": 120,
        "levelType": "medium fast",
        "exp": 163,
        "eggCycles": 20
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "catchRate": 45,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 65,
        "levelType": "medium fast",
        "exp": 123,
        "eggCycles": 20
    },
    {
        "id": 84,
        "name": "Doduo",
        "catchRate": 190,
        "evolution": "Dodrio",
        "evoLevel": 31,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 85,
        "levelType": "medium fast",
        "exp": 62,
        "eggCycles": 20
    },
    {
        "id": 85,
        "name": "Dodrio",
        "catchRate": 45,
        "type": [
            "Normal",
            "Flying"
        ],
        "attack": 110,
        "levelType": "medium fast",
        "exp": 161,
        "eggCycles": 20
    },
    {
        "id": 86,
        "name": "Seel",
        "catchRate": 190,
        "evolution": "Dewgong",
        "evoLevel": 34,
        "type": [
            "Water"
        ],
        "attack": 45,
        "levelType": "medium fast",
        "exp": 65,
        "eggCycles": 20
    },
    {
        "id": 87,
        "name": "Dewgong",
        "catchRate": 75,
        "type": [
            "Water",
            "Ice"
        ],
        "attack": 70,
        "levelType": "medium fast",
        "exp": 166,
        "eggCycles": 20
    },
    {
        "id": 88,
        "name": "Grimer",
        "catchRate": 190,
        "evolution": "Muk",
        "evoLevel": 38,
        "type": [
            "Poison"
        ],
        "attack": 80,
        "levelType": "medium fast",
        "exp": 65,
        "eggCycles": 20
    },
    {
        "id": 89,
        "name": "Muk",
        "catchRate": 75,
        "type": [
            "Poison"
        ],
        "attack": 105,
        "levelType": "medium fast",
        "exp": 175,
        "eggCycles": 20
    },
    {
        "id": 90,
        "name": "Shellder",
        "catchRate": 190,
        "evolution": "Cloyster",
        "evoLevel": "Water Stone",
        "type": [
            "Water"
        ],
        "attack": 65,
        "levelType": "slow",
        "exp": 61,
        "eggCycles": 20
    },
    {
        "id": 91,
        "name": "Cloyster",
        "catchRate": 60,
        "type": [
            "Water",
            "Ice"
        ],
        "attack": 95,
        "levelType": "slow",
        "exp": 184,
        "eggCycles": 20
    },
    {
        "id": 92,
        "name": "Gastly",
        "catchRate": 190,
        "evolution": "Haunter",
        "evoLevel": 25,
        "type": [
            "Ghost",
            "Poison"
        ],
        "attack": 100,
        "levelType": "medium slow",
        "exp": 62,
        "eggCycles": 20
    },
    {
        "id": 93,
        "name": "Haunter",
        "catchRate": 90,
        "evolution": "Gengar",
        "evoLevel": "Trade Stone",
        "type": [
            "Ghost",
            "Poison"
        ],
        "attack": 115,
        "levelType": "medium slow",
        "exp": 142,
        "eggCycles": 20
    },
    {
        "id": 94,
        "name": "Gengar",
        "catchRate": 45,
        "type": [
            "Ghost",
            "Poison"
        ],
        "attack": 130,
        "levelType": "medium slow",
        "exp": 225,
        "eggCycles": 20
    },
    {
        "id": 95,
        "name": "Onix",
        "catchRate": 45,
        "type": [
            "Rock",
            "Ground"
        ],
        "attack": 45,
        "levelType": "medium fast",
        "exp": 77,
        "eggCycles": 25
    },
    {
        "id": 96,
        "name": "Drowzee",
        "catchRate": 190,
        "evolution": "Hypno",
        "evoLevel": 26,
        "type": [
            "Psychic"
        ],
        "attack": 48,
        "levelType": "medium fast",
        "exp": 66,
        "eggCycles": 20
    },
    {
        "id": 97,
        "name": "Hypno",
        "catchRate": 75,
        "type": [
            "Psychic"
        ],
        "attack": 73,
        "levelType": "medium fast",
        "exp": 169,
        "eggCycles": 20
    },
    {
        "id": 98,
        "name": "Krabby",
        "catchRate": 225,
        "evolution": "Kingler",
        "evoLevel": 28,
        "type": [
            "Water"
        ],
        "attack": 105,
        "levelType": "medium fast",
        "exp": 65,
        "eggCycles": 20
    },
    {
        "id": 99,
        "name": "Kingler",
        "catchRate": 60,
        "type": [
            "Water"
        ],
        "attack": 130,
        "levelType": "medium fast",
        "exp": 166,
        "eggCycles": 20
    },
    {
        "id": 100,
        "name": "Voltorb",
        "catchRate": 190,
        "evolution": "Electrode",
        "evoLevel": 30,
        "type": [
            "Electric"
        ],
        "attack": 55,
        "levelType": "medium fast",
        "exp": 66,
        "eggCycles": 20
    },
    {
        "id": 101,
        "name": "Electrode",
        "catchRate": 60,
        "type": [
            "Electric"
        ],
        "attack": 80,
        "levelType": "medium fast",
        "exp": 168,
        "eggCycles": 20
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "catchRate": 90,
        "evolution": "Exeggutor",
        "evoLevel": "Leaf Stone",
        "type": [
            "Grass",
            "Psychic"
        ],
        "attack": 60,
        "levelType": "slow",
        "exp": 65,
        "eggCycles": 20
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "catchRate": 45,
        "type": [
            "Grass",
            "Psychic"
        ],
        "attack": 125,
        "levelType": "slow",
        "exp": 182,
        "eggCycles": 20
    },
    {
        "id": 104,
        "name": "Cubone",
        "catchRate": 190,
        "evolution": "Marowak",
        "evoLevel": 28,
        "type": [
            "Ground"
        ],
        "attack": 50,
        "levelType": "medium fast",
        "exp": 64,
        "eggCycles": 20
    },
    {
        "id": 105,
        "name": "Marowak",
        "catchRate": 75,
        "type": [
            "Ground"
        ],
        "attack": 80,
        "levelType": "medium fast",
        "exp": 149,
        "eggCycles": 20
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "catchRate": 45,
        "type": [
            "Fighting"
        ],
        "attack": 120,
        "levelType": "medium fast",
        "exp": 159,
        "eggCycles": 25
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "catchRate": 45,
        "type": [
            "Fighting"
        ],
        "attack": 105,
        "levelType": "medium fast",
        "exp": 159,
        "eggCycles": 25
    },
    {
        "id": 108,
        "name": "Lickitung",
        "catchRate": 45,
        "type": [
            "Normal"
        ],
        "attack": 60,
        "levelType": "medium fast",
        "exp": 77,
        "eggCycles": 20
    },
    {
        "id": 109,
        "name": "Koffing",
        "catchRate": 190,
        "evolution": "Weezing",
        "evoLevel": 35,
        "type": [
            "Poison"
        ],
        "attack": 65,
        "levelType": "medium fast",
        "exp": 68,
        "eggCycles": 20
    },
    {
        "id": 110,
        "name": "Weezing",
        "catchRate": 60,
        "type": [
            "Poison"
        ],
        "attack": 90,
        "levelType": "medium fast",
        "exp": 172,
        "eggCycles": 20
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "catchRate": 120,
        "evolution": "Rhydon",
        "evoLevel": 42,
        "type": [
            "Ground",
            "Rock"
        ],
        "attack": 85,
        "levelType": "slow",
        "exp": 69,
        "eggCycles": 20
    },
    {
        "id": 112,
        "name": "Rhydon",
        "catchRate": 60,
        "type": [
            "Ground",
            "Rock"
        ],
        "attack": 130,
        "levelType": "slow",
        "exp": 170,
        "eggCycles": 20
    },
    {
        "id": 113,
        "name": "Chansey",
        "catchRate": 30,
        "type": [
            "Normal"
        ],
        "attack": 35,
        "levelType": "fast",
        "exp": 395,
        "eggCycles": 40
    },
    {
        "id": 114,
        "name": "Tangela",
        "catchRate": 45,
        "type": [
            "Grass"
        ],
        "attack": 100,
        "levelType": "medium fast",
        "exp": 87,
        "eggCycles": 20
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "catchRate": 45,
        "type": [
            "Normal"
        ],
        "attack": 95,
        "levelType": "medium fast",
        "exp": 172,
        "eggCycles": 20
    },
    {
        "id": 116,
        "name": "Horsea",
        "catchRate": 225,
        "evolution": "Seadra",
        "evoLevel": 32,
        "type": [
            "Water"
        ],
        "attack": 70,
        "levelType": "medium fast",
        "exp": 59,
        "eggCycles": 20
    },
    {
        "id": 117,
        "name": "Seadra",
        "catchRate": 75,
        "type": [
            "Water"
        ],
        "attack": 95,
        "levelType": "medium fast",
        "exp": 154,
        "eggCycles": 20
    },
    {
        "id": 118,
        "name": "Goldeen",
        "catchRate": 225,
        "evolution": "Seaking",
        "evoLevel": 33,
        "type": [
            "Water"
        ],
        "attack": 67,
        "levelType": "medium fast",
        "exp": 64,
        "eggCycles": 20
    },
    {
        "id": 119,
        "name": "Seaking",
        "catchRate": 60,
        "type": [
            "Water"
        ],
        "attack": 92,
        "levelType": "medium fast",
        "exp": 158,
        "eggCycles": 20
    },
    {
        "id": 120,
        "name": "Staryu",
        "catchRate": 225,
        "evolution": "Starmie",
        "evoLevel": "Water Stone",
        "type": [
            "Water"
        ],
        "attack": 70,
        "levelType": "slow",
        "exp": 68,
        "eggCycles": 20
    },
    {
        "id": 121,
        "name": "Starmie",
        "catchRate": 60,
        "type": [
            "Water",
            "Psychic"
        ],
        "attack": 100,
        "levelType": "slow",
        "exp": 182,
        "eggCycles": 20
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "catchRate": 45,
        "type": [
            "Psychic",
            "Fairy"
        ],
        "attack": 100,
        "levelType": "medium fast",
        "exp": 161,
        "eggCycles": 25
    },
    {
        "id": 123,
        "name": "Scyther",
        "catchRate": 45,
        "type": [
            "Bug",
            "Flying"
        ],
        "attack": 110,
        "levelType": "medium fast",
        "exp": 100,
        "eggCycles": 25
    },
    {
        "id": 124,
        "name": "Jynx",
        "catchRate": 45,
        "type": [
            "Ice",
            "Psychic"
        ],
        "attack": 115,
        "levelType": "medium fast",
        "exp": 159,
        "eggCycles": 25
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "catchRate": 45,
        "type": [
            "Electric"
        ],
        "attack": 95,
        "levelType": "medium fast",
        "exp": 172,
        "eggCycles": 25
    },
    {
        "id": 126,
        "name": "Magmar",
        "catchRate": 45,
        "type": [
            "Fire"
        ],
        "attack": 100,
        "levelType": "medium fast",
        "exp": 173,
        "eggCycles": 25
    },
    {
        "id": 127,
        "name": "Pinsir",
        "catchRate": 45,
        "type": [
            "Bug"
        ],
        "attack": 125,
        "levelType": "slow",
        "exp": 175,
        "eggCycles": 25
    },
    {
        "id": 128,
        "name": "Tauros",
        "catchRate": 45,
        "type": [
            "Normal"
        ],
        "attack": 100,
        "levelType": "slow",
        "exp": 172,
        "eggCycles": 20
    },
    {
        "id": 129,
        "name": "Magikarp",
        "catchRate": 255,
        "evolution": "Gyarados",
        "evoLevel": 20,
        "type": [
            "Water"
        ],
        "attack": 15,
        "levelType": "slow",
        "exp": 40,
        "eggCycles": 5
    },
    {
        "id": 130,
        "name": "Gyarados",
        "catchRate": 45,
        "type": [
            "Water",
            "Flying"
        ],
        "attack": 125,
        "levelType": "slow",
        "exp": 189,
        "eggCycles": 5
    },
    {
        "id": 131,
        "name": "Lapras",
        "catchRate": 45,
        "type": [
            "Water",
            "Ice"
        ],
        "attack": 85,
        "levelType": "slow",
        "exp": 187,
        "eggCycles": 40
    },
    {
        "id": 132,
        "name": "Ditto",
        "catchRate": 35,
        "type": [
            "Normal"
        ],
        "attack": 48,
        "levelType": "medium fast",
        "exp": 101,
        "eggCycles": 20
    },
    {
        "id": 133,
        "name": "Eevee",
        "catchRate": 45,
        "evolution": "Vaporeon, Jolteon, Flareon",
        "evoLevel": "Water Stone, Thunder Stone, Fire Stone",
        "type": [
            "Normal"
        ],
        "attack": 55,
        "levelType": "medium fast",
        "exp": 65,
        "eggCycles": 35
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "catchRate": 45,
        "type": [
            "Water"
        ],
        "attack": 110,
        "levelType": "medium fast",
        "exp": 184,
        "eggCycles": 35
    },
    {
        "id": 135,
        "name": "Jolteon",
        "catchRate": 45,
        "type": [
            "Electric"
        ],
        "attack": 110,
        "levelType": "medium fast",
        "exp": 184,
        "eggCycles": 35
    },
    {
        "id": 136,
        "name": "Flareon",
        "catchRate": 45,
        "type": [
            "Fire"
        ],
        "attack": 130,
        "levelType": "medium fast",
        "exp": 184,
        "eggCycles": 35
    },
    {
        "id": 137,
        "name": "Porygon",
        "catchRate": 45,
        "type": [
            "Normal"
        ],
        "attack": 85,
        "levelType": "medium fast",
        "exp": 79,
        "eggCycles": 20
    },
    {
        "id": 138,
        "name": "Omanyte",
        "catchRate": 45,
        "evolution": "Omastar",
        "evoLevel": 40,
        "type": [
            "Rock",
            "Water"
        ],
        "attack": 90,
        "levelType": "medium fast",
        "exp": 71,
        "eggCycles": 30
    },
    {
        "id": 139,
        "name": "Omastar",
        "catchRate": 45,
        "type": [
            "Rock",
            "Water"
        ],
        "attack": 115,
        "levelType": "medium fast",
        "exp": 173,
        "eggCycles": 30
    },
    {
        "id": 140,
        "name": "Kabuto",
        "catchRate": 45,
        "evolution": "Kabutops",
        "evoLevel": 40,
        "type": [
            "Rock",
            "Water"
        ],
        "attack": 80,
        "levelType": "medium fast",
        "exp": 71,
        "eggCycles": 30
    },
    {
        "id": 141,
        "name": "Kabutops",
        "catchRate": 45,
        "type": [
            "Rock",
            "Water"
        ],
        "attack": 115,
        "levelType": "medium fast",
        "exp": 173,
        "eggCycles": 30
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "catchRate": 45,
        "type": [
            "Rock",
            "Flying"
        ],
        "attack": 105,
        "levelType": "slow",
        "exp": 180,
        "eggCycles": 30
    },
    {
        "id": 143,
        "name": "Snorlax",
        "catchRate": 25,
        "type": [
            "Normal"
        ],
        "attack": 110,
        "levelType": "slow",
        "exp": 189,
        "eggCycles": 40
    },
    {
        "id": 144,
        "name": "Articuno",
        "catchRate": 3,
        "type": [
            "Ice",
            "Flying"
        ],
        "attack": 95,
        "levelType": "slow",
        "exp": 261,
        "eggCycles": 80
    },
    {
        "id": 145,
        "name": "Zapdos",
        "catchRate": 3,
        "type": [
            "Electric",
            "Flying"
        ],
        "attack": 125,
        "levelType": "slow",
        "exp": 261,
        "eggCycles": 80
    },
    {
        "id": 146,
        "name": "Moltres",
        "catchRate": 3,
        "type": [
            "Fire",
            "Flying"
        ],
        "attack": 125,
        "levelType": "slow",
        "exp": 261,
        "eggCycles": 80
    },
    {
        "id": 147,
        "name": "Dratini",
        "catchRate": 45,
        "evolution": "Dragonair",
        "evoLevel": 30,
        "type": [
            "Dragon"
        ],
        "attack": 64,
        "levelType": "slow",
        "exp": 60,
        "eggCycles": 40
    },
    {
        "id": 148,
        "name": "Dragonair",
        "catchRate": 45,
        "evolution": "Dragonite",
        "evoLevel": 55,
        "type": [
            "Dragon"
        ],
        "attack": 84,
        "levelType": "slow",
        "exp": 147,
        "eggCycles": 40
    },
    {
        "id": 149,
        "name": "Dragonite",
        "catchRate": 45,
        "type": [
            "Dragon",
            "Flying"
        ],
        "attack": 134,
        "levelType": "slow",
        "exp": 270,
        "eggCycles": 40
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "catchRate": 3,
        "type": [
            "Psychic"
        ],
        "attack": 154,
        "levelType": "slow",
        "exp": 306,
        "eggCycles": 120
    },
    {
        "id": 151,
        "name": "Mew",
        "catchRate": 45,
        "type": [
            "Psychic"
        ],
        "attack": 100,
        "levelType": "medium slow",
        "exp": 270,
        "eggCycles": 120
    }
];

// TODO move to its own initialize method that gets called on game start.
for(let i = 0; i < pokemonList.length; i++){
    let p = pokemonList[i];
    pokemonMap[p["name"]] = p;
    pokemonMapId[i+1] = p;
}

