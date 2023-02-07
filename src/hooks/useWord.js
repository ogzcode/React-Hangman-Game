import { createContext, useContext, useEffect, useState } from "react";
import data from "../utils/data.json";
import createWord from "../utils/createWord";
import { useGameState } from "./useGameState";

const WordContext = createContext();
export const useWord = () => useContext(WordContext);

export default function WordProvider({ children }) {
    const [word, setWord] = useState([]);
    const [falseAnswer, setFalseAnswer] = useState(0);
    const {toggleFalse} = useGameState();

    useEffect(() => {
        gameWin();
    }, [word]);

    const generateWord = (option) => {
        const words = data[option];
        let index = Math.floor(Math.random() * words.length);
        setWord(createWord(words[index]));
    };

    const gameWin = () => {
        const copyArray = word.filter(w => !w.state);
        
        if (copyArray.length === 0){
            toggleFalse();
            setFalseAnswer(0);
        }
    };

    const charInWord = (c) => {
        const wordCopy = [...word];
        let isTrue = false;
        for (let i of wordCopy) {
            if (i.char.toUpperCase() === c) {
                i.state = true;
                isTrue = true;
            }
        }

        if (isTrue) {
            setWord(wordCopy);
        }
        else {
            setFalseAnswer(falseAnswer + 1);
            if (falseAnswer + 1 >= 5) {
                setFalseAnswer(0);
                toggleFalse();
            }
        }
    };
    return (
        <WordContext.Provider value={{ word, falseAnswer, generateWord, charInWord }}>
            {children}
        </WordContext.Provider>
    );
}