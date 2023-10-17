import { NavBar } from "./components/NavBar/NavBar";
import { PokemonContainer } from "./components/PokemonContainer/PokemonContainer";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavBar />
      <h1>Clase 5 - custom hooks</h1>

      <PokemonContainer />
    </div>
  );
}

export default App;
