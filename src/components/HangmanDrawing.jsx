import { useWord } from "../hooks/useWord"

const HEAD = (
    <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '100%',
        border: '4px solid black',
        position: 'absolute',
        bottom: '124px',
        left: '136px'
    }} />
)

const BODY = (
    <div style={{
        width: '4px',
        height: '40px',
        background: 'black',
        position: 'absolute',
        top: '116px',
        left: "150px"
    }} />
)

const RIGHT_ARM = (
    <div style={{
        width: '24px',
        height: '4px',
        background: 'black',
        position: 'absolute',
        top: '130px',
        left: "154px",
        rotate: '-30deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_ARM = (
    <div style={{
        width: '24px',
        height: '4px',
        background: 'black',
        position: 'absolute',
        top: '130px',
        left: "126px",
        rotate: '30deg',
        transformOrigin: 'right bottom'
    }} />
)

const RIGHT_LEG = (
    <div style={{
        width: '24px',
        height: '4px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        left: "150px",
        rotate: '60deg',
        transformOrigin: 'left bottom'
    }} />
)

const LEFT_LEG = (
    <div style={{
        width: '24px',
        height: '4px',
        background: 'black',
        position: 'absolute',
        top: '150px',
        left: "130px",
        rotate: '-60deg',
        transformOrigin: 'right bottom'
    }} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses = 6 }) {
    const {falseAnswer} = useWord();
    return (
        <div className="canvas">
            <div style={{ position: 'relative', right: "80px" }}>
                {BODY_PARTS.slice(0, falseAnswer)}

                <div style={{
                    height: '30px', width: '5px', background: 'black',
                    position: "absolute", bottom: "155px", left: "150px"
                }} />

                <div style={{
                    height: '5px', width: '100px', background: 'black',
                    position: "absolute", bottom: "180px", left: "50px"
                }} />

                <div style={{
                    height: '180px', width: '5px', background: 'black',
                    position: "absolute", bottom: "5px", left: "50px"
                }} />
                <div style={{
                    height: '5px', width: '100px',
                    background: 'black', position: "absolute", bottom: 0, left: 0
                }} />
            </div>
        </div>
    )
}