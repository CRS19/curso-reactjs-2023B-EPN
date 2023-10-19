/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent } from "react";
import { CardPokemon } from "../CardPokemon/CardPokemon";
import { usePokemonContainer } from "./state/usePokemonContainer";
import { PokemonApiResponse } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";

export interface IPokemonContainerProps {
  listPokemons: PokemonApiResponse[];
}

export const PokemonContainer = ({ listPokemons }: IPokemonContainerProps) => {
  const { setFilter, pokemonList } = usePokemonContainer(listPokemons);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <input
        style={{ width: "80%", padding: "10px" }}
        type="text"
        placeholder="Buscar pokemon"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setFilter(e.target.value.trim());
        }}
      />
      {pokemonList.length !== 0 ? (
        pokemonList.map((pokemon) => <CardPokemon {...pokemon} />)
      ) : (
        <h3>Pokemones no encontrados</h3>
      )}
    </div>
  );
};
