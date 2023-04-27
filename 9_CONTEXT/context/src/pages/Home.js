//import { useContext } from "react";
// 2 - criar provider
//import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
// 5 - context mais Complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";
const Home = () => {
  // 2 - criar provider
 // const { counter } = useContext(CounterContext);

  //4 - refatorando Hooks
  const {counter} = useCounterContext();
  
  //5- context mais complexo
  const {color,dispatch} = useTitleColorContext();

  //6- Alterando contexto Complexo
  const setTitleColor = (color) => {
    dispatch({type:color});
  }
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor contador: {counter}</p>
      {/* 3 - alterar o valor do contexto */}
      <ChangeCounter/>
      {/* 6 - Alterando contexto Complexo*/}
      <button onClick={()=>setTitleColor("RED")}>Vermelho</button>
      <button onClick={()=>setTitleColor("BLUE")}>Vermelho</button>
    </div>
  );
};

export default Home;