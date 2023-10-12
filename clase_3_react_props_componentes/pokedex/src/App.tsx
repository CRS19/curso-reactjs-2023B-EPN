import "./App.css";
import { CardPokemon } from "./components/CardPokemon/CardPokemon";
import { PokemonList } from "./constants/PokemonList";

function App() {
  return (
    <>
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
