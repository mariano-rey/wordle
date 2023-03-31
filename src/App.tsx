import "./App.css";
import Game from "@/containers/game/Game";

function App() {
  return (
    <main className="font-sans">
      <section>
        <h1>WORDLE</h1>
        <Game />
      </section>
    </main>
  );
}

export default App;
