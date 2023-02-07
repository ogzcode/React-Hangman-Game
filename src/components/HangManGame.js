import FalseBox from "./GamePage/FalseBox";
import getCharList from "../utils/getCharList";
import CharBox from "./GamePage/CharBox";
import CharBtn from "./GamePage/CharBtn";
import {useWord} from "../hooks/useWord";

function CharList() {
    const {word} = useWord();
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {
                word.map((w, i) => <CharBox char={w} key={i} />)
            }
        </div>
    );
}

function BtnList() {
    return (
        <div className="btn__box">
            {
                getCharList().map((c, i) => <CharBtn char={c} key={i} />)
            }
        </div>
    );
}

function HangManGame() {
    return (
        <>
            <FalseBox />
            <CharList />
            <BtnList />
        </>
    );
}

export default HangManGame;
