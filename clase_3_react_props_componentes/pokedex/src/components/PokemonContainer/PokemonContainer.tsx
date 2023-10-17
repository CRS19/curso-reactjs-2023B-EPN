/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent } from "react";
import { CardPokemon } from "../CardPokemon/CardPokemon";
import { usePokemonContainer } from "./state/usePokemonContainer";

export const PokemonContainer = () => {
  const { setFilter, pokemonList } = usePokemonContainer();

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
        pokemonList.map((pokemon) => (
          <CardPokemon
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            imgUrl={pokemon.imgUrl}
          />
        ))
      ) : (
        <h3>Pokemones no encontrados</h3>
      )}
    </div>
  );
};
