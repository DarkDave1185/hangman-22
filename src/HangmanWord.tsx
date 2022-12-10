import "./HangmanWord.css"

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({guessedLetters, wordToGuess, reveal=false}: HangmanWordProps) {
    return (
        <>
            <div className="word-base">
                {wordToGuess.split("").map((letter, index) => (
                    <span className="spaces" key={index}>
                        <span className="spaces-hidden" 
                            style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                                    color: !guessedLetters.includes(letter) && reveal ? "red" : "black"}}>
                            {letter}
                        </span>
                    </span>
                ))}
            </div>
        </>
    )
}