import { useState } from "react";
import { useWord } from "../../hooks/useWord";

function CharBtn({ char }) {
    const [disabled, setDisabled] = useState(false);
    const {charInWord} = useWord();

    const onDisabled = () => {
        if (!disabled) charInWord(char);
        setDisabled(true);
    };
    return <button className="char__btn" onClick={onDisabled} disabled={disabled}>{char}</button>
}


export default CharBtn;