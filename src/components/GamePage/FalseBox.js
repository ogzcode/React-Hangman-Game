import { useWord } from "../../hooks/useWord";

function FalseBox() {
    const {falseAnswer} = useWord();
    return (
        <div className="false__box">
            {
                [...Array(5)].map((d, i) =>
                    <span className={falseAnswer > i ? "box false" : "box"} key={i}></span>
                )
            }
        </div>
    );
}

export default FalseBox;