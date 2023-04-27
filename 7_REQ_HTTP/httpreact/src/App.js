//style
import './App.css';
//hooks
import { useState, useEffect } from "react";
// 4 - cusmom hooks
import { useFetch } from './hooks/useFeth';

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]) 
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  //4 - cusmom items
  const { data: items, httpConfig,loading ,error} = useFetch(url);

  //1 - resgatando dados
  //useEffect(() => {
  //async function fetchData() {
  // const res = await fetch(url);

  //const data = await res.json();

  // setProducts(data);
  // }
  //fetchData();
  //}, []);
  //2add de Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };
    // console.log(product)
    //const res = await fetch(url, {
    //method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    //  },
    // body: JSON.stringify(product),
    //})
    //const addedProduct = await res.json();

    //// 3 - carregamento dinâmico
    //setProducts((prevProducts) => [...prevProducts, addedProduct])
    //5 - Refatorando Post
    httpConfig(product, "POST")


    setName("");
    setPrice("");
  };
  const hendleRtemove=(id)=>{
    httpConfig(id,"DELETE")

  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/*6 loading*/}
      {loading&&<p>Carregador dados...</p>}
      {error &&<p>{error}</p>}
      <ul>
        {items && items.map((products) => (
          <li key={products.id}>
           
            {products.name}
            - R$:{products.price}
            {/*9 - Desafio*/}
            <button onClick={()=>hendleRtemove(products.id)}>Excluir</button>
            </li>
        ))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {/* 7 - State de Loading no Post*/}
         {loading ? <p>Auarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
