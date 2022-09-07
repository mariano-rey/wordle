import { useEffect } from "react";
import "./App.css";
import type { CharStatus } from "./components/charBox";
import Row from "./components/row";
import useKeyPress from "./hooks/useKeyPress";
import useGame from "./hooks/useGame";
import CONSTANTS from "./constants";

export type Row = {
  chars: { value: string; status: CharStatus }[];
};

function App() {
  const { word, attemps, onPressKey } = useGame();
  const keyPress = useKeyPress();

  function renderContent() {
    const rows: React.ReactNode[] = [];
    for (let x = 0; x < CONSTANTS.ATTEMPS_LENGTH; x++) {
      const chars = attemps[x]?.chars;
      rows.push(<Row key={x} chars={chars} />);
    }
    return rows;
  }

  useEffect(() => {
    const charFormat = /^[A-Z]{1,1}$/;
    if (charFormat.test(keyPress)) {
      onPressKey(keyPress);
    }
  }, [keyPress]);

  return (
    <main className="font-sans">
      <section>
        <h1>WORDLE</h1>
        {renderContent()}
      </section>
    </main>
  );
}

export default App;
