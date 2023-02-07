function CharBox({ char }) {
    const style = {
        backgroundColor: "lightgreen",
        color: "black"
    };
    return (
        <div className="char__box" style={char.state ? style : {}}>
            <span>{char.state ? char.char : "?"}</span>
        </div>
    );
}

export default CharBox;