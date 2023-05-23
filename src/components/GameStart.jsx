import { useWord } from "../hooks/useWord";
import data from "../utils/data.json";
import { useGameState } from "../hooks/useGameState";

function GameStart() {
    const {generateWord} = useWord();
    const { toggleTrue } = useGameState();

    const onCreateGame = (d) => {
        generateWord(d);
        toggleTrue();
    };

    return (
        <div className="game__page">
            <h1>Select Word Options</h1>
            <div>
                {
                    Object.keys(data).map((d, i) =>
                        <button key={i} onClick={() => onCreateGame(d)}>{d}</button>)
                }
            </div>
        </div>
    );
}

export default GameStart;