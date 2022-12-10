import { useCallback, useEffect, useState } from "react";
import "./App.css"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanKeyboard } from "./HangmanKeyboard";
import { HangmanWord } from "./HangmanWord";
import words from "./wordList.json"

function getWord() {
  return words[Math.floor(Math.random()*words.length)]
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    //return "test"
    return words[Math.floor(Math.random()*words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))
  
  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser ) return
    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
      return () => {
        document.removeEventListener("keypress", handler)
    }
  })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler)
      return () => {
        document.removeEventListener("keypress", handler)
    }
  }, [])
    console.log(wordToGuess)
  return (
    <>
      <div className="basic">
        <div className="winLose">
          {isWinner && "WINNER! - Refresh to play again"}
          {isLoser && "YOU LOST! - Refresh to play again"}
        </div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />
        <HangmanKeyboard inactiveLetters={incorrectLetters} addGuessedLetter={addGuessedLetter} disabled={isWinner || isLoser}
                        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} />
      </div>
    </>
  )
}

export default App;
