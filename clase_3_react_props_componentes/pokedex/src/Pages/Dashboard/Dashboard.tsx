import { NavBar } from "../../components/NavBar/NavBar";
import { PokemonContainer } from "../../components/PokemonContainer/PokemonContainer";
import { useDashboard } from "./state/useDashboard";

export const Dashboard = () => {
  const { listPokemons } = useDashboard();

  return (
    <>
      <NavBar />
      <div>Dashboard</div>

      <PokemonContainer listPokemons={listPokemons} />
    </>
  );
};
