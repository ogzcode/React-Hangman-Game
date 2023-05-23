import { createContext, useContext, useState } from "react";

const GameStateContext = createContext();
export const useGameState = () => useContext(GameStateContext);

export default function GameStateProvider({ children }){
    const [state, setState] = useState(false);

    const toggleTrue = () => setState(true);
    const toggleFalse = () => setState(false);

    return (
        <GameStateContext.Provider value={{state, toggleTrue, toggleFalse}}>
            { children }
        </GameStateContext.Provider>
    );
}