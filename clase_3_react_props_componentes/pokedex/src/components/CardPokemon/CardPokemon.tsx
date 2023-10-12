import { IPokemon } from "../../constants/PokemonList";
import {
  CardContainerStyles,
  ImgStyles,
  NameStyles,
} from "./styles/CardPokemon.styles";

export const CardPokemon = ({ name, id, imgUrl, types }: IPokemon) => {
  const getColor = (type: string) => {
    switch (type) {
      case "Grass":
        return "#629869";
      case "Fire":
        return "red";
      case "Water":
        return "blue";
      default:
        return "white";
    }
  };

  return (
    <div
      style={{
        ...CardContainerStyles,
        backgroundColor: getColor(types[0]),
      }}
    >
      <img style={ImgStyles} src={imgUrl} />
      <div style={NameStyles}>
        <p>{id}</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
