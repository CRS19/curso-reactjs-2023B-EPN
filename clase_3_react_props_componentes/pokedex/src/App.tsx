import "./App.css";
import { CardPokemon } from "./components/CardPokemon/CardPokemon";
import { Contador } from "./components/Contador/Contador";
import { PokemonList } from "./constants/PokemonList";

function App() {
  return (
    <>
      <h1>useState hook - ESTA DEPLOYADO!! x2</h1>

      <Contador />

      <div style={{ marginBottom: 2000 }} />

      <h1>Pokemones list - clase 3</h1>
      {PokemonList.map((pokemon) => (
        <CardPokemon
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          imgUrl={pokemon.imgUrl}
        />
      ))}
    </>
  );
}

export default App;
