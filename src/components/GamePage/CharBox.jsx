function CharBox({ char }) {
    const style = {
        backgroundColor: "#4ade80",
        color: "white"
    };
    return (
        <div className="char__box" style={char.state ? style : {}}>
            <span>{char.state ? char.char : "?"}</span>
        </div>
    );
}

export default CharBox;