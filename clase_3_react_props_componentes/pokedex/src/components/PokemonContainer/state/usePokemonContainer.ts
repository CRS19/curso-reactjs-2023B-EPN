/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { PokemonApiResponse } from "../../../Pages/Dashboard/interfaces/Dashboard.interfaces";

export const usePokemonContainer = (listPokemons: PokemonApiResponse[]) => {
  const [pokemonList, setPokemonList] =
    useState<PokemonApiResponse[]>(listPokemons);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const filertPokemon = (type: string): PokemonApiResponse[] => {
      return listPokemons.filter((pokemon) => {
        const typesEnMayuscula = pokemon.types.map((type) =>
          type.type.name.toUpperCase()
        );

        return typesEnMayuscula.includes(type.toUpperCase());
      });
    };

    if (pokemonList.length === 0 && filter === "") {
      setPokemonList(listPokemons);
      return;
    }

    if (filter !== "") {
      setPokemonList(filertPokemon(filter));
    }

    if (filter === "") {
      setPokemonList(listPokemons);
    }
  }, [filter]);

  useEffect(() => {
    setPokemonList(listPokemons); // antes se cargaba por un archivo quemado
  }, [listPokemons]);

  return {
    pokemonList,
    setFilter,
  };
};
