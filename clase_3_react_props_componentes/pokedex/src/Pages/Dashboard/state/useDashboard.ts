import { useEffect, useState } from "react";
import { PokemonApiResponse } from "../interfaces/Dashboard.interfaces";

export const useDashboard = () => {
  const [listPokemons, setListPokemons] = useState<PokemonApiResponse[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      const reponse = await fetch(
        `${import.meta.env.VITE_POKE_API_BASE_PATH}/pokemon`
      );

      const responseBody = await reponse.json();

      const arrayPromises = responseBody.results.map(
        (pokemon: { name: string; url: string }) => {
          return fetch(pokemon.url);
        }
      );

      // Promsie.all [Promise, Promise, Promise]

      const arrayRespuestasDePromises = await Promise.all(
        (
          await Promise.all(arrayPromises)
        ).map(async (response) => await response.json())
      );

      setListPokemons(arrayRespuestasDePromises);

      //Promise.allsettled  [{ status: string, value: any }, { status: string, value: any },{ status: string, value: any }]

      /*const arrayRespuestasDePromises = (
        await Promise.allSettled(arrayPromises)
      ).map((el) => el.value);

      const resultsFromAllSettled = (
        await Promise.allSettled(
          arrayRespuestasDePromises.map(async (el) => await el.json())
        )
      ).map((el) => el.value);

      console.log("termino de cargar ", resultsFromAllSettled);

      setListPokemons(resultsFromAllSettled);
      */
    };

    getPokemons();
  }, []);

  return {
    listPokemons,
  };
};
