import { useParams } from "react-router-dom";

export const PokemonDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Detalle de pokemon {params.id}</h1>
    </div>
  );
};
