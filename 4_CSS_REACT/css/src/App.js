import { useState } from 'react';
import './App.css';
import MyComponent from './component/MyComponent';
import Title from './component/Title';

function App() {
  const n = 10;
  const [nome]= useState("Ruan");

  const redTitle = true;
  return (
    <div className="App">
       {/*Css Global*/}
      <h1>React com CSS</h1>
      {/*Css com Component*/}
      <MyComponent/>
      {/*Inline*/}
      <p style={{
        color:"blue",
        padding:"25px",
        borderTop:"2px solder"
      }}
      >
        Este elemento foi de fora Inline</p>
      <p style={{
        color:"blue",
        padding:"25px",
        borderTop:"2px solder"
      }}
      >
        Este elemento foi de fora Inline</p>
        {/*CSS INLINE DINAMICO*/}
        <h2 style={n < 10 ? { color: "purple" } : { color: "magenta" }}>
        CSS dinâmico
       </h2>

        <h2 style={n > 10 ? { color: "purple" } : { color: "magenta" }}>
         CSS dinâmico 
        </h2>

          <h2 style={nome === "Ruan" ?{color:"green",backgroundColor:"#000"}: null}>
            Test  Dinamico 
          </h2>
          {/*Classes Dinamicas*/}
          <h2 className={redTitle ? "red-title": "title"}>
            Este Titulo vai ter Classes Dinamicas
          </h2>
          <Title/>
    </div>
  );
}

export default App;
