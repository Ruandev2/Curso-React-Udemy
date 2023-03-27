//css
import './App.css';
//React
import { useCallback, useEffect, useState } from "react"
//data
import { wordsList } from "./data/words";
//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
]

const guessesQty = 3
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList)

  const [pickedWord, setpikedword] = useState("");
  const [pickedCategory, setpikedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWorngLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  //pick a radom category
  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words)

    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    //pick a Rondom Word
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word);

    return { category, word };
  }, [words]);
  //Starts the secret word Game
  const startGame = useCallback(() => {
    //pick word and pick category
    const { word, category } = pickWordAndCategory();

    console.log(category, word);
    //create an array of lettrs

    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters)

    //fill start
    setpikedword(word);
    setpikedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);
  //Pross the later input
  const verifyLetter = (letter) => {
    const normalizandLetter = letter.toLowerCase();
    //check if letter has already been utilezed
    if (
      guessedLetters.includes(normalizandLetter) ||
      wrongLetters.includes(normalizandLetter)
    ) {
      return;
    }
    //push guessed letter or remove a guess
    if (letters.includes(normalizandLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizandLetter,
      ]);

    } else {
      setWorngLetters((actualwrongLetters) => [
        ...actualwrongLetters,
        normalizandLetter,

      ]);
      setGuesses((actualGuessedLetters) => actualGuessedLetters - 1)
    }
  }
  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWorngLetters([]);
  }
  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);
  //check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
    console.log(guessedLetters);

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));

      // restart game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame]);
  //restart the Game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty)

    setGameStage(stages[0].name)
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}
export default App;
