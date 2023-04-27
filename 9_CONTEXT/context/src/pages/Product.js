import { useCounterContext } from "../hooks/useCounterContext"
const Product = () => {
  //const {counter, setCounter} = useContext(CounterContext);
  const {counter} = useCounterContext();
  return (
    <div>
        <h1>Product</h1>
      <p>Valor contador: {counter}</p>
    </div>
  )
}

export default Product