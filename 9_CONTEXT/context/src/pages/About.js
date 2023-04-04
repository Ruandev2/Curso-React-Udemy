//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext"


const About = () => {
  //const {counter, setCounter} = useContext(CounterContext);
  const {counter} = useCounterContext();

  return (
    <div>
      <div>
        <h1>Abount</h1>
      <p>Valor contador: {counter}</p>
    </div>
    </div>
  )
}

export default About