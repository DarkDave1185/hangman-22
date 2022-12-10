import "./HangmanDrawing.css"

/*const HEAD =(<div className="hangman-corpse head"></div>)*/
const HEAD =(<div className="hangman-corpse head"></div>)
const BODY =(<div className="hangman-corpse body"></div>)
const RARM =(<div className="hangman-corpse rarm"></div>)
const LARM =(<div className="hangman-corpse larm"></div>)
const RLEG =(<div className="hangman-corpse rleg"></div>)
const LLEG =(<div className="hangman-corpse lleg"></div>)
const BODYPARTS =[HEAD, BODY, RARM, LARM, RLEG, LLEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <>
            <div className="hangman-base" >
                <div className="hangman tip">
                    {BODYPARTS.slice(0, numberOfGuesses)}
                </div>
                <div className="hangman top"></div>
                <div className="hangman middle"></div>
                <div className="hangman bottom"></div>
            </div>
        </>
    )
}