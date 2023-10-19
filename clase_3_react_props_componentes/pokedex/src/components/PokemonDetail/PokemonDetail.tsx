import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PokemonApiResponse } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";

export const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState<PokemonApiResponse | null>(null);
  const params = useParams();

  useEffect(() => {
    const getSinglePokemon = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_POKE_API_BASE_PATH}/pokemon/${params.id}`,
        {
          method: "post",
        }
      );

      const responseBody = await response.json();

      setPokemon(responseBody);
    };

    getSinglePokemon();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <h1>Detalle de pokemon {params.id}</h1>
      {pokemon !== null ? (
        <>
          <h2>{pokemon.name}</h2>
          {pokemon.sprites.other.dream_world.front_default !== null ? (
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          ) : (
            <h3>No tiene imagen</h3>
          )}
          {pokemon.moves.map((move, index) => (
            <p key={`${move}-${index}`}>{move.move.name}</p>
          ))}
        </>
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};
