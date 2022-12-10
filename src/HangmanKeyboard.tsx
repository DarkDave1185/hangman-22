import "./HangmanKeyboard.css"
import styles from "./HangmanKeyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled?: boolean
}

export function HangmanKeyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled=false}: KeyboardProps) {
    return (
        <>
            <div className={styles.keyboardbase}>
                {KEYS.map(key => {
                    const isActive = activeLetters.includes(key)
                    const isInactive = inactiveLetters.includes(key)
                    return (
                        <button className={`${styles.key} ${isActive? styles.active:""} ${isInactive? styles.inactive:""}`} key={key} 
                                onClick={()=>addGuessedLetter(key)} disabled={isActive || isInactive || disabled} >{key}</button>
                    )
                })}
            </div>
        </>
    )
}