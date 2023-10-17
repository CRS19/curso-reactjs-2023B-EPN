export interface IPokemon {
  name: string;
  imgUrl: string;
  types: string[];
  id: number;
}

export const PokemonListConst = [
  {
    name: "Bulbasaur",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["Grass", "Poison"],
    id: 1,
  },
  {
    name: "Ivysaur",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    types: ["Grass", "Poison"],
    id: 2,
  },
  {
    name: "Venusaur",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    types: ["Grass", "Poison"],
    id: 3,
  },
  {
    name: "Charmander",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    types: ["Fire"],
    id: 4,
  },
  {
    name: "Charmeleon",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    types: ["Fire"],
    id: 5,
  },
  {
    name: "Charizard",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    types: ["Fire", "Flying"],
    id: 6,
  },
  {
    name: "Squirtle",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    types: ["Water"],
    id: 7,
  },
  {
    name: "Wartortle",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    types: ["Water"],
    id: 8,
  },
  {
    name: "Blastoise",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    types: ["Water"],
    id: 9,
  },
  {
    name: "Caterpie",
    imgUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    types: ["Bug"],
    id: 10,
  },
];
