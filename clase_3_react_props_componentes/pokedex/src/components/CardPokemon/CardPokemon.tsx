import { PokemonApiResponse } from "../../Pages/Dashboard/interfaces/Dashboard.interfaces";
import {
  CardContainerStyles,
  ImgStyles,
  NameStyles,
} from "./styles/CardPokemon.styles";
import { useNavigate } from "react-router-dom";

export const CardPokemon = (pokemon: PokemonApiResponse) => {
  const navigate = useNavigate();

  const getColor = (type: string) => {
    switch (type) {
      case "Grass".toUpperCase():
        return "#629869";
      case "Fire".toUpperCase():
        return "#E3866E";
      case "Water".toUpperCase():
        return "#A4B4D6";
      case "Bug".toUpperCase():
        return "#FBE597";
      default:
        return "white";
    }
  };

  return (
    <div
      style={{
        ...CardContainerStyles,
        backgroundColor: getColor(pokemon.types[0].type.name.toUpperCase()),
      }}
      onClick={() => {
        console.log("ve a la detalle", pokemon.id);
        navigate(`/dashboard/${pokemon.id}`);
      }}
    >
      <img
        style={ImgStyles}
        src={pokemon.sprites.other.dream_world.front_default}
      />
      <div style={NameStyles}>
        <p>{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
      </div>
    </div>
  );
};
