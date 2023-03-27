import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="Start">
        <h1>Scret Word</h1>
        <p>Clique no botao abaixo para comecar o Jogo</p>
        <button onClick={startGame}>Comecar o Jogo</button>
    </div>
  )
}

export default StartScreen