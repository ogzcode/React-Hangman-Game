import "./App.css";
import HangManGame from "./components/HangManGame";
import WordProvider from "./hooks/useWord";
import { useGameState } from "./hooks/useGameState";
import GameStart from "./components/GameStart";

function App() {
  const { state } = useGameState();
  return (
    <div className="App">
      <WordProvider>
        {
          state ? <HangManGame /> : <GameStart />
        }
      </WordProvider>
    </div>
  );
}
export default App;
