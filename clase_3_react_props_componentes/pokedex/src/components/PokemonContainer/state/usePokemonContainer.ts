/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { IPokemon, PokemonListConst } from "../../../constants/PokemonList";

export const usePokemonContainer = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const filertPokemon = (type: string): IPokemon[] => {
      return PokemonListConst.filter((pokemon) => {
        const typesEnMayuscula = pokemon.types.map((type) =>
          type.toUpperCase()
        );

        return typesEnMayuscula.includes(type.toUpperCase());
      });

      /*if (type !== "") {
        return PokemonListConst.filter(
          (pokemon) => pokemon.name.toLowerCase() === type.toLowerCase()
        );
      }*/

      return [];
    };

    if (pokemonList.length === 0 && filter === "") {
      setPokemonList(PokemonListConst);
      return;
    }

    if (filter !== "") {
      setPokemonList(filertPokemon(filter));
    }

    if (filter === "") {
      setPokemonList(PokemonListConst);
    }
  }, [filter]);

  return {
    pokemonList,
    setFilter,
  };
};
